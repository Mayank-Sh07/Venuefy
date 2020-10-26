import React, { useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Paper,
  Card,
  CardMedia,
  Container,
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

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
    description: "abc",
    imageURL: "/imgs/Venue_Super_Visors.jpg",
  },
  {
    title: "Video Reviews",
    description: "def",
    imageURL: "/imgs/card-profile2-square.jpg",
  },
  {
    title: "Event Coordinators",
    description: "ghi",
    imageURL: "/imgs/card-profile4-square.jpg",
  },
  {
    title: "Management Counsultants",
    description: "jkl",
    imageURL: "/imgs/card-profile5-square.jpg",
  },
  {
    title: "No-Star Ratings",
    description: "mno",
    imageURL: "/imgs/card-profile6-square.jpg",
  },
  {
    title: "Discounts",
    description: "pqr",
    imageURL: "/imgs/card-profile1-square.jpg",
  },
];

function HomeFeatures() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const setIndx = (indexVal) => {
    setIndex(indexVal);
  };

  return (
    <Container disableGutters>
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
                <Button
                  className={classes.btnRounded}
                  onClick={() => setIndx(0)}
                  // endIcon={<DoubleArrowIcon />}
                >
                  Supervisors
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.btnRounded}
                  onClick={() => setIndx(1)}
                >
                  Video Reviews
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.btnRounded}
                  onClick={() => setIndx(2)}
                >
                  Coordinators
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.btnRounded}
                  onClick={() => setIndx(3)}
                >
                  Counsultants
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.btnRounded}
                  onClick={() => setIndx(4)}
                >
                  No-Star Rating
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.btnRounded}
                  onClick={() => setIndx(5)}
                >
                  Discounts
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
                image={data[index].imageURL}
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
