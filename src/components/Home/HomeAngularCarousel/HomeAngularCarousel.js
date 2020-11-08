import React from "react";
import Slider from "react-slick";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { v4 as uuid } from "uuid";
import "../slick.css";
import "../slick-theme.css";

const useStyles = makeStyles((theme) => ({
  absoluteContainer: {
    position: "absolute",
    top: "620px",
    [theme.breakpoints.down("md")]: {
      top: "520px",
    },
    [theme.breakpoints.only("xs")]: {
      top: "130px",
    },
  },
  angularCarouselContainer: {
    maxWidth: theme.breakpoints.width("lg"),
    margin: "auto",
    padding: "0px 20px",
  },
  carouselHeight: {
    [theme.breakpoints.only("xs")]: {
      height: "170px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "260px",
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
    },
  },
  flexTitle: {
    margin: "15px 0px 5px",
    display: "flex",
    alignItems: "center",
  },
  primaryTitle: {
    flexBasis: "55%",
    fontWeight: 600,
    textShadow: `0 0 1px black`,
  },
  secondaryTitle: {
    flexBasis: "45%",
    fontWeight: 600,
    textShadow: `0 0 1px black`,
  },
  sliderContainer: {
    position: "relative",
    width: "100%",
    margin: "30px auto",
    borderRadius: "8px",
    overflow: "hidden",
  },
  secondaryLeft: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    clipPath: `polygon(0 0, 55% 0, 40% 100%, 0 100%)`,
  },
  secondaryRight: {
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "100%",
    clipPath: `polygon(56% 0, 100% 0, 100% 100%, 41% 100%)`,
  },
  primaryLeft: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    clipPath: `polygon(0 0, 39% 0, 54% 100%, 0 100%)`,
  },
  primaryRight: {
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "100%",
    clipPath: `polygon(40% 0, 100% 0, 100% 100%, 55% 100%)`,
  },
  sliderLeft: {
    marginRight: "40%",
  },
  sliderRight: {
    marginLeft: "39%",
  },
  imageClass: {
    objectFit: "contain",
    objectPosition: "center",
  },
  labelContainer: {
    position: "absolute",
    bottom: "12px",
    width: "100%",
    minHeight: "40px",
    backgroundColor: `rgba(0, 0, 0, 0.7)`,
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    display: "flex",
    alignItems: "center",
  },
  flexRight: {
    justifyContent: "flex-end",
  },
  labelTextContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "18px",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "4px",
    },
  },
  venueTitle: {
    flexBasis: "40%",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "80px",
      fontSize: "8px",
      paddingLeft: "2px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "180px",
      fontSize: "16px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "270px",
      fontSize: "20px",
    },
  },
  venueArea: {
    flexBasis: "100%",
    paddingLeft: "2px",
    [theme.breakpoints.only("xs")]: {
      fontSize: "6px",
    },
  },
  bookBtn: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFFFFF",
    borderRadius: "2em",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  tinyButton: {
    [theme.breakpoints.only("xs")]: {
      minWidth: "unset",
      width: "40px",
      height: "24px",
      fontSize: "0.5em",
    },
  },
}));

const venueData = [
  {
    name: "Jayantha Banquets",
    area: "salt lake",
    vcode: "#1234",
    photoURL: "imgs/card-profile1-square.jpg",
  },
  {
    name: "Altair Banquets",
    area: "Gopal Nagar",
    vcode: "#3456",
    photoURL: "imgs/card-profile2-square.jpg",
  },
  {
    name: "Holiday Inn",
    area: "New Kolkata",
    vcode: "#5674",
    photoURL: "imgs/card-profile4-square.jpg",
  },
];

function HomeAngularCarousel() {
  const classes = useStyles();

  return (
    <>
      <Container
        disableGutters
        className={classes.absoluteContainer}
        maxWidth={false}
      >
        <div className={classes.angularCarouselContainer}>
          <div
            className={clsx(classes.sliderContainer, classes.carouselHeight)}
          >
            <SliderWithImgs data={venueData} classes={classes} type='primary' />
          </div>
          <div
            className={clsx(classes.sliderContainer, classes.carouselHeight)}
          >
            <SliderWithImgs
              data={venueData}
              classes={classes}
              type='secondary'
            />
          </div>
        </div>
      </Container>
    </>
  );
}

function SliderWithImgs({ type, data, classes }) {
  const sliderProps = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const VenueSlide = ({ photoURL, name, area, vcode, position }) => {
    return (
      <div className={clsx(classes.carouselHeight)}>
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${photoURL})`,
            backgroundRepeat: "no-repeat",
            WebkitBackgroundSize: "cover",
          }}
        />
        <div className={classes.labelContainer}>
          {position === "right" && (
            <div style={{ flexBasis: type === "secondary" ? "7%" : "23%" }} />
          )}
          <div className={classes.labelTextContainer}>
            <Typography variant='body1' className={classes.venueTitle} noWrap>
              {name}
            </Typography>
            <Typography variant='caption' className={classes.venueArea} noWrap>
              {area}
            </Typography>
          </div>
          <Button
            className={classes.bookBtn}
            size='small'
            classes={{ root: classes.tinyButton }}
          >
            BOOK
          </Button>
          {position === "left" && (
            <div style={{ flexBasis: type === "secondary" ? "33%" : "17%" }} />
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={
          type === "secondary" ? classes.secondaryLeft : classes.primaryLeft
        }
      >
        <Slider
          {...sliderProps}
          className={clsx(classes.sliderLeft, classes.carouselHeight)}
        >
          {data.map((venue) => (
            <VenueSlide
              photoURL={venue.photoURL}
              name={venue.name}
              area={venue.area}
              vcode={venue.vcode}
              index={uuid()}
              position='left'
            />
          ))}
        </Slider>
      </div>
      <div
        className={
          type === "secondary" ? classes.secondaryRight : classes.primaryRight
        }
      >
        <Slider
          {...sliderProps}
          className={clsx(classes.sliderRight, classes.carouselHeight)}
        >
          {data.map((venue) => (
            <VenueSlide
              photoURL={venue.photoURL}
              name={venue.name}
              area={venue.area}
              vcode={venue.vcode}
              index={uuid()}
              position='right'
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HomeAngularCarousel;
