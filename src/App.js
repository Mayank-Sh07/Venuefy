import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Header/Navbar";
import Footer from "./components/Navigation/Footer/Footer";
const Home = React.lazy(() => import("./components/Home/Home"));
const Venues = React.lazy(() => import("./components/Venues/Venues"));
const Testimonials = React.lazy(() =>
  import("./components/Testimonials/Testimonials")
);
const Vendors = React.lazy(() => import("./components/Vendors/Vendors"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const Blog = React.lazy(() => import("./components/Blog/Blog"));

function App() {
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
            <Route path='/' render={(props) => <Home {...props} />} />
          </Switch>
        </React.Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
