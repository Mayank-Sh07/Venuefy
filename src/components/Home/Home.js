import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import Geocode from "react-geocode";
import HomeTagSection from "./HomeTagSection/HomeTagSection";
import HomeAngularCarousel from "./HomeAngularCarousel/HomeAngularCarousel";

// disabled location finder for dev setup
// Geocode.setApiKey("AIzaSyD8GFTbKJa9sHNp-HDcfFsgoRDXueRRCBw");

const useStyles = makeStyles((theme) => ({
  tagContainerBG: {
    backgroundColor: theme.palette.secondary.light,
    clipPath: `polygon(40% 0, 100% 95%, 100% 100%, 0 100%, 0 0)`,
    height: "1310px",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      height: "770px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "1010px",
    },
    [theme.breakpoints.only("md")]: {
      height: "1210px",
    },
  },
  carouselContainerBG: {
    backgroundColor: theme.palette.secondary.light,
    height: "200px",
    position: "relative",
  },
}));

function Home({ geoCoords }) {
  const classes = useStyles();

  const [location, setLocation] = useState({
    city: "City",
    area: "Area",
    zip: null,
  });

  useEffect(() => {
    if (geoCoords !== null) {
      Geocode.fromLatLng(geoCoords.lat, geoCoords.lng).then(
        (response) => {
          console.log(response.results[0]);
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
            console.log(userLocation);
            setLocation(userLocation);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [geoCoords]);

  return (
    <>
      <Container
        disableGutters
        className={classes.tagContainerBG}
        maxWidth={false}
      ></Container>
      <HomeTagSection location={location} />
      <Container
        disableGutters
        className={classes.carouselContainerBG}
        maxWidth={false}
      ></Container>
      <HomeAngularCarousel />
    </>
  );
}

export default Home;
