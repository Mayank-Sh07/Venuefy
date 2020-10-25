import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Paper,
  Card,
  CardMedia,
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const useStyles = makeStyles((theme) => ({
  featurePaper: {
    margin: "50px",
    [theme.breakpoints.only("xs")]: {
      margin: "15px",
      marginTop: "35px",
      padding: "10px",
    },
  },
  btnContainer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "50px 40px 20px",
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
    width: "100%",
  },
  floating: {
    marginLeft: "8%",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      margin: "auto",
      transform: `translateY(-25px)`,
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
    paddingLeft: "15%",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      paddingLeft: "0px",
    },
  },
  descBody: {
    padding: "0px 15%",
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

function HomeFeatures() {
  const classes = useStyles();
  return (
    <Paper className={classes.featurePaper} elevation={12}>
      <Grid
        container
        justify='space-evenly'
        alignItems='center'
        className={classes.flexDir}
      >
        <Grid item xs={12} sm={4}>
          <Grid
            item
            container
            direction='column'
            alignItems='stretch'
            className={classes.btnContainer}
          >
            <Grid item>
              <Button
                className={clsx(classes.btnRounded, classes.styledBtn)}
                endIcon={<DoubleArrowIcon />}
              >
                Venue Supervisors
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Video Reviews</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>event coordinators</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>
                Management Counsultancy
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>No Star Rating</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Best discounts</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper square elevation={0}>
            <Typography variant='h5' className={classes.descHead}>
              Venue Supervisors
            </Typography>
            <Typography paragraph className={classes.descBody}>
              Venuefy provides Venue Supervisors to take care of all the venue
              related happenings for your event.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ overflow: "visible" }} elevation={0}>
            <CardMedia
              component='img'
              alt='null image'
              image={"/imgs/Venue_Super_Visors.jpg"}
              height='340px'
              className={clsx(classes.rounded, classes.floating)}
            />
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HomeFeatures;
