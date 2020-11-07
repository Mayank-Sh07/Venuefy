import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import HomeTagSection from "./HomeTagSection/HomeTagSection";
import HomeAngularCarousel from "./HomeAngularCarousel/HomeAngularCarousel";
import HomeAngularDescription from "./HomeAngularDescription/HomeAngularDescription";
import HomePoster from "./HomePoster/HomePoster";
import HomeServices from "./HomeServices/HomeServices";
import HomeFeatures from "./HomeFeatures/HomeFeatures";

const useStyles = makeStyles((theme) => ({
  tagContainerBG: {
    backgroundColor: theme.palette.secondary.light,
    clipPath: `polygon(40% 0, 100% 95%, 100% 100%, 0 100%, 0 0)`,
    height: "1200px",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      height: "380px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "1000px",
    },
    [theme.breakpoints.only("md")]: {
      height: "1100px",
    },
  },

  carouselContainerBG: {
    backgroundColor: theme.palette.secondary.light,
    height: "100px",
    position: "relative",
  },
  sectionsBG: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function Home({ location }) {
  const classes = useStyles();

  return (
    <>
      <Container
        disableGutters
        className={classes.tagContainerBG}
        maxWidth={false}
      ></Container>
      <Hidden xsDown>
        <HomeTagSection location={location} />
      </Hidden>
      <Container
        disableGutters
        className={classes.carouselContainerBG}
        maxWidth={false}
      ></Container>
      <HomeAngularCarousel />
      <Container maxWidth={false} disableGutters className={classes.sectionsBG}>
        <HomeAngularDescription />
        <HomePoster />
        <HomeServices />
      </Container>
      <HomeFeatures />
    </>
  );
}

export default Home;
