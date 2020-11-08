import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "../slick.css";
import "../slick-theme.css";

const useStyles = makeStyles((theme) => ({
  posterContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "-2px",
    padding: "15px 0px 0px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "75px",
      backgroundColor: theme.palette.secondary.light,
    },
  },
  posterCarouselContainer: {
    width: "100%",
    height: "400px",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "450px",
    },
  },
  slideBackground: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    display: "flex",
  },
  slideContainer: {
    padding: "20px 30px",
  },
  slidePaper: {
    borderRadius: "4em",
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      borderRadius: "1em",
    },
  },
  exploreBtn: {
    margin: "15px",
    color: "#FFFFFF",
    borderRadius: "2em",
    padding: "8px 12px",
    backgroundColor: "#000000",
    [theme.breakpoints.only("sm")]: {
      margin: "5px",
    },
    "&:hover": {
      backgroundColor: "#1e1e1e",
    },
  },
}));

const data = [
  {
    title: "Vendor1",
    description:
      "Vendor description for vendor 1, testing the space occupied for text of length 100 charactes",
    photoURL: "imgs/card-profile5-square.jpg",
  },
  {
    title: "Vendor2",
    description:
      "Vendor description for vendor 2, testing the space occupied for text of length 100 charactes",
    photoURL: "imgs/card-profile4-square.jpg",
  },
  {
    title: "Vendor3",
    description:
      "Vendor description for vendor 3, testing the space occupied for text of length 100 charactes",
    photoURL: "imgs/card-profile6-square.jpg",
  },
];

function HomePoster() {
  const classes = useStyles();
  const sliderProps = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    lazyLoad: true,
  };

  const VendorSlide = ({ title, description, photoURL }) => {
    return (
      <Container
        className={classes.posterCarouselContainer}
        maxWidth='xl'
        disableGutters
      >
        <div
          className={classes.slideBackground}
          style={{ backgroundImage: `url(${photoURL})` }}
        >
          <Grid
            container
            justify='space-evenly'
            alignItems='stretch'
            className={classes.slideContainer}
          >
            <Grid item xs={0} sm={4} md={4} />
            <Grid item xs={0} sm={4} md={5} />
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              component='div'
              className={classes.slidePaper}
            >
              <Typography variant='h5' align='center'>
                {title}
              </Typography>
              <Typography paragraph align='center'>
                {description}
              </Typography>
              <Button className={classes.exploreBtn}>Explore</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  };

  return (
    <Container
      maxWidth={null}
      className={classes.posterContainer}
      disableGutters
    >
      <Slider {...sliderProps}>
        {data.map((vendor) => (
          <VendorSlide
            title={vendor.title}
            description={vendor.description}
            photoURL={vendor.photoURL}
          />
        ))}
      </Slider>
    </Container>
  );
}

export default HomePoster;
