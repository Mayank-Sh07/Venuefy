import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";

const useStyles = makeStyles((theme) => ({
  featurePaper: {
    margin: "50px",
    maxWidth: theme.breakpoints.width("lg"),
    [theme.breakpoints.only("xs")]: {
      margin: "35px 15px 15px",
      padding: "10px",
    },
    borderRadius: "9px",
  },
  btnContainer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "50px 20px 20px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    [theme.breakpoints.only("xs")]: {
      padding: "20px 30px",
      borderRadius: "1em",
    },
  },
  rounded: {
    borderRadius: "1em",
  },
  btnRounded: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "2em",
    margin: "10px 0px",
    minWidth: "170px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "#FFFFFF",
    },
    [theme.breakpoints.width("sm")]: {
      minWidth: "120px",
    },
  },
  btnActive: {
    backgroundColor: theme.palette.primary.dark,
    color: "#FFFFFF",
    padding: "12px 18px",
  },
  floating: {
    marginLeft: "8%",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      margin: "auto",
      transform: `translateY(-20px)`,
    },
  },
  flexDir: {
    flexDirection: "row",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  descHead: {
    marginBottom: "20px",
    paddingLeft: "12%",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      paddingLeft: "0px",
    },
  },
  descBody: {
    padding: "0px 12%",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      padding: "0px 5%",
    },
  },
  styledBtn: {
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.dark,
      color: "#FFFFFF",
      padding: "10px",
      border: "1px solid white",
    },
  },
}));

const data = [
  {
    title: "Venue Supervisors",
    description:
      "We will be providing Venue Supervisors for your event, to take care of all the assistance related to the Venue in your Event.",
    image: image1,
  },
  {
    title: "Video Reviews",
    description:
      "We believe in real face to face reviews by our Clients, see what the past Clients say about us and their successful Events through Venuefy.",
    image: image2,
  },
  {
    title: "Free Coordinators",
    description:
      "We will be providing free Event Coordinators for your event, on successful Venue bookings with Venuefy",
    image: image3,
  },
  {
    title: "Best Discounts",
    description:
      "No Middle-man applied, so we are able to bring to you the best discounts for your auspicious Events.",
    image: image4,
  },
  {
    title: "Your Choice",
    description:
      "Ours Executives will provide you with multiple choices of venue and you are the Final Decision maker considering all the aspects and requirements of your Event.",
    image: image5,
  },
];

function HomeFeatures() {
  const classes = useStyles();
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const setIndx = (indexVal) => {
    setIndex(indexVal);
    if (window.innerWidth < theme.breakpoints.width("sm")) {
      let element = document.getElementById("feature-container");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const btnClasses = (val) => {
    if (index === val) return clsx(classes.btnActive, classes.btnRounded);
    else return classes.btnRounded;
  };

  return (
    <Container disableGutters id='feature-container'>
      <Paper className={classes.featurePaper} elevation={12}>
        <Grid
          container
          justify='space-evenly'
          alignItems='center'
          className={classes.flexDir}
        >
          <Grid item xs={12} sm={4} md={3}>
            <Grid
              item
              container
              direction='column'
              alignItems='center'
              className={classes.btnContainer}
            >
              <Grid item>
                <Button className={btnClasses(0)} onClick={() => setIndx(0)}>
                  Venue Supervisors
                </Button>
              </Grid>
              <Grid item>
                <Button className={btnClasses(1)} onClick={() => setIndx(1)}>
                  Video Reviews
                </Button>
              </Grid>
              <Grid item>
                <Button className={btnClasses(2)} onClick={() => setIndx(2)}>
                  Free Coordinators
                </Button>
              </Grid>
              <Grid item>
                <Button className={btnClasses(3)} onClick={() => setIndx(3)}>
                  Best Discounts
                </Button>
              </Grid>
              <Grid item>
                <Button className={btnClasses(4)} onClick={() => setIndx(4)}>
                  Choice
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={5}>
            <Paper square elevation={0}>
              <Typography variant='h5' className={classes.descHead}>
                {data[index].title}
              </Typography>
              <Typography paragraph className={classes.descBody}>
                {data[index].description}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ overflow: "visible" }} elevation={0}>
              <CardMedia
                component='img'
                alt='null image'
                image={data[index].image}
                height='340px'
                className={clsx(classes.rounded, classes.floating)}
              />
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default HomeFeatures;
