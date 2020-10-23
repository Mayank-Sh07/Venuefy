import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Paper,
  Card,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "50px 50px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 40px 20px",
    },
  },
  rounded: {
    borderRadius: "2.5em",
  },
  btnRounded: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "2em",
    margin: "10px 0px",
    width: "100%",
  },
}));

function HomeFeatures() {
  const classes = useStyles();
  return (
    <Paper style={{ margin: "50px" }} elevation={12}>
      <Grid container justify='space-evenly' alignItems='center'>
        <Grid item xs={12} sm={4}>
          <Grid
            item
            container
            direction='column'
            alignItems='stretch'
            className={classes.btnContainer}
          >
            <Grid item>
              <Button className={classes.btnRounded}>
                management counsultancys
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Venue Supervisors</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Venue Supervisors</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Venue Supervisors</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Venue Supervisors</Button>
            </Grid>
            <Grid item>
              <Button className={classes.btnRounded}>Venue Supervisors</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper square elevation={0}>
            <Typography
              variant='h5'
              component='h2'
              style={{ marginBottom: "20px", paddingLeft: "15%" }}
            >
              Venue Supervisors
            </Typography>
            <Typography paragraph style={{ padding: "0px 15%" }}>
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
              className={classes.rounded}
              style={{
                marginLeft: "8%",
                position: "relative",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HomeFeatures;
