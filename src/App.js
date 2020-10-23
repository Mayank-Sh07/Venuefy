import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer/Footer";
import Home from "./components/Home/Home";
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
      <Navbar />
      <Home geoCoords={geoCoords} />
      <Footer />
    </div>
  );
}

export default App;
