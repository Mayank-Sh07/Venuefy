import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Venues,
  Testimonials,
  Vendors,
  AboutUs,
  Blog,
  Footer,
} from "./components";
import { usePosition } from "use-position";

function App() {
  const [geoCoords, setGeoCoords] = useState(null);
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (!!latitude && !!longitude) {
      setGeoCoords({ lat: latitude, lng: longitude });
    }
  }, [latitude, longitude]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
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
            render={(props) => <Home {...props} geoCoords={geoCoords} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
