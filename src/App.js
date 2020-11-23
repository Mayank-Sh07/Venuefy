import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Header/Navbar";
import Footer from "./components/Navigation/Footer/Footer";
import LoadingApp from "./components/Loading/LoadingApp";
const Home = React.lazy(() => import("./components/Home/Home"));
const Venues = React.lazy(() => import("./components/Venues/Venues"));
const Testimonials = React.lazy(() =>
  import("./components/Testimonials/Testimonials")
);
const Vendors = React.lazy(() => import("./components/Vendors/Vendors"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const Blog = React.lazy(() => import("./components/Blog/Blog"));
const VenueProfile = React.lazy(() =>
  import("./components/VenueProfile/VenueProfile")
);
// const SignUp = React.lazy(() => import("./components/Auth/SignUp"));
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <React.Suspense fallback={<LoadingApp />}>
          <Switch>
            <Route
              exact
              path='/Venues'
              render={(props) => <Venues {...props} />}
            />
            <Route
              exact
              path='/Testimonials'
              render={(props) => <Testimonials />}
            />
            <Route
              exact
              path='/Vendors'
              render={(props) => <Vendors {...props} />}
            />
            <Route
              exact
              path='/About'
              render={(props) => <AboutUs {...props} />}
            />
            <Route exact path='/Blog' render={(props) => <Blog {...props} />} />
            {/* <Route
              exact
              path='/SignUp'
              render={(props) => <SignUp {...props} />}
            /> */}
            <Route
              path='/Venues/:id'
              render={(props) => <VenueProfile {...props} />}
            />
            <Route path='/' render={(props) => <Home {...props} />} />
          </Switch>
        </React.Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
