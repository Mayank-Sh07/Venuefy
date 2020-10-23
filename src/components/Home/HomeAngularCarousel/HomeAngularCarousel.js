import React from "react";
import { Container, makeStyles, Typography, Button } from "@material-ui/core";
import Slider from "react-slick";
import clsx from "clsx";
import { v4 as uuid } from "uuid";

// Title (42px) + Carousel (220px, 340px, 440px) => xs:265, sm:385, md:485

const useStyles = makeStyles((theme) => ({
  absoluteContainer: {
    position: "absolute",
    top: "620px",
    [theme.breakpoints.down("md")]: {
      top: "520px",
    },
  },
  carouselHeight: {
    [theme.breakpoints.only("xs")]: {
      height: "200px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
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
    filter: `progid: DXImageTransform.Microsoft.Glow(Color=#ffffff,Strength=0.5)`,
  },
  secondaryTitle: {
    flexBasis: "45%",
    fontWeight: 600,
    textShadow: `0 0 1px black`,
    filter: `progid: DXImageTransform.Microsoft.Glow(Color=#ffffff,Strength=0.5)`,
  },
  sliderContainer: {
    position: "relative",
    width: "97%",
    margin: "auto",
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
    marginLeft: "40%",
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
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey",
    display: "flex",
  },
  flexRight: {
    justifyContent: "flex-end",
  },
  labelTextContainer: {
    display: "flex",
    flexBasis: "40%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "18px",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "4px",
    },
  },
  labelAction: {
    display: "flex",
    flexBasis: "25%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  venueTitle: {
    flexBasis: "40%",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "80px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "180px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "270px",
    },
  },
  bookBtn: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFFFFF",
    borderRadius: "2em",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
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
        <div className={classes.flexTitle}>
          <Typography
            variant='h5'
            className={classes.secondaryTitle}
            align='center'
            component='div'
          >
            Resorts
          </Typography>
          <Typography
            variant='h5'
            className={classes.primaryTitle}
            align='center'
          >
            Banquets
          </Typography>
        </div>
        <div className={clsx(classes.sliderContainer, classes.carouselHeight)}>
          <SliderWithImgs data={venueData} classes={classes} type='primary' />
        </div>
        <div className={classes.flexTitle}>
          <Typography
            variant='h5'
            className={classes.primaryTitle}
            align='center'
          >
            Hotels
          </Typography>
          <Typography
            variant='h5'
            className={classes.secondaryTitle}
            align='center'
          >
            Pubs
          </Typography>
        </div>
        <div className={clsx(classes.sliderContainer, classes.carouselHeight)}>
          <SliderWithImgs data={venueData} classes={classes} type='secondary' />
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
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
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
            <div style={{ flexBasis: type === "secondary" ? "10%" : "25%" }} />
          )}
          <div className={classes.labelTextContainer}>
            <Typography variant='body1' className={classes.venueTitle} noWrap>
              {name}
            </Typography>
            <Typography variant='caption' style={{ flexBasis: "100%" }} noWrap>
              {area}
            </Typography>
          </div>
          <div className={classes.labelAction}>
            <Button className={classes.bookBtn}>BOOK</Button>
          </div>
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
