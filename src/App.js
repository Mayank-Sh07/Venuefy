import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { usePosition } from "use-position";
import Geocode from "react-geocode";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer/Footer";
const Home = React.lazy(() => import("./components/Home/Home"));
const Venues = React.lazy(() => import("./components/Venues/Venues"));
const Testimonials = React.lazy(() =>
  import("./components/Testimonials/Testimonials")
);
const Vendors = React.lazy(() => import("./components/Vendors/Vendors"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const Blog = React.lazy(() => import("./components/Blog/Blog"));

// disabled location finder for dev setup
// Geocode.setApiKey("AIzaSyD8GFTbKJa9sHNp-HDcfFsgoRDXueRRCBw");

function App() {
  const [location, setLocation] = useState({
    city: "City",
    area: "Area",
    zip: null,
  });
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (!!latitude && !!longitude) {
      Geocode.fromLatLng(latitude, longitude).then(
        (response) => {
          if (response) {
            const userLocation = {};
            response.results[0].address_components.forEach((address) => {
              if (address.types.indexOf("sublocality") !== -1) {
                userLocation.area = address.short_name;
              } else if (address.types.indexOf("locality") !== -1) {
                userLocation.city = address.short_name;
              } else if (address.types.indexOf("postal_code") !== -1) {
                userLocation.zip = address.short_name;
              }
            });
            setLocation(userLocation);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [longitude]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <React.Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path='/Venues' render={(props) => <Venues />} />
            <Route
              exact
              path='/Testimonials'
              render={(props) => <Testimonials />}
            />
            <Route exact path='/Vendors' render={(props) => <Vendors />} />
            <Route exact path='/About' render={(props) => <AboutUs />} />
            <Route exact path='/Blog' render={(props) => <Blog />} />
            <Route
              path='/'
              render={(props) => <Home {...props} location={location} />}
            />
          </Switch>
        </React.Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
