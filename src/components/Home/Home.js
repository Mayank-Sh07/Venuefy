import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Geocode from "react-geocode";
import HomeTagSection from "./HomeTagSection/HomeTagSection";
import HomeAngularCarousel from "./HomeAngularCarousel/HomeAngularCarousel";
import HomeAngularDescription from "./HomeAngularDescription/HomeAngularDescription";
// disabled location finder for dev setup
// Geocode.setApiKey("AIzaSyD8GFTbKJa9sHNp-HDcfFsgoRDXueRRCBw");

const useStyles = makeStyles((theme) => ({
  tagContainerBG: {
    backgroundColor: theme.palette.secondary.light,
    clipPath: `polygon(40% 0, 100% 95%, 100% 100%, 0 100%, 0 0)`,
    height: "1320px",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      height: "780px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "1020px",
    },
    [theme.breakpoints.only("md")]: {
      height: "1220px",
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
      <HomeAngularDescription />
      {/* <div
        style={{
          backgroundColor: "red",
          height: "600px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "pink",
            height: "100%",
            position: "absolute",
            top: "0px",
            width: "100%",
            clipPath: `polygon(75% 0px, 100% 0%, 100% 100%, 50% 72%)`,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src='imgs/banner.jpg'
            alt='LOL'
            height='100%'
            width='55%'
            style={{
              objectFit: "cover",
              objectPosition: "left",
              marginTop: "110px",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "yellow",
            height: "85%",
            position: "absolute",
            top: "0px",
            width: "100%",
            clipPath: `polygon(0px 0px, 75% 0px, 50% 85%, 0px 85%)`,
          }}
        >
          <Typography variant='h2' style={{ padding: "20px 20px 20px 90px" }}>
            Who are we?
          </Typography>
          <div
            style={{
              backgroundColor: "blueviolet",
              height: "55%",
              margin: "10px 20% 10px 80px",
              clipPath: `polygon(0px 0px, 75% 0px, 56% 85%, 0px 85%)`,
              paddingRight: "25%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt augue interdum velit euismod in pellentesque. Arcu felis
            bibendum ut tristique et. Porttitor rhoncus dolor purus non enim
            praesent elementum facilisis. Mi sit amet mauris commodo quis.
            Nullam ac tortor vitae purus faucibus ornare. Dolor sit amet
            consectetur adipiscing elit pellentesque habitant. Ac feugiat sed
            lectus vestibulum mattis ullamcorper velit sed ullamcorper. Odio ut
            enim blandit volutpat maecenas volutpat blandit aliquam. Lobortis
            scelerisque fermentum dui faucibus in ornare quam. Euismod quis
            viverra nibh cras pulvinar mattis nunc sed. Pretium nibh ipsum
            consequat nisl vel pretium lectus quam id. Maecenas sed enim ut sem
            viverra aliquet eget. Nisl purus in mollis nunc sed id. Libero enim
            sed faucibus turpis in eu mi bibendum. Ligula ullamcorper malesuada
            proin libero nunc consequat interdum. Ultrices neque ornare aenean
          </div> */}

      {/* </div>
      </div> */}
    </>
  );
}

export default Home;
