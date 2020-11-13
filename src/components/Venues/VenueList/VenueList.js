import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import ImageGallery from "react-image-gallery";
import "./image-gallery.scss";

const useStyles = makeStyles((theme) => ({
  venueContainer: {
    padding: "10px",
  },
  imageCarousel: {
    overflow: "hidden",
    border: "2px solid #424242",
    // borderRight: "none",
  },
  divider: {
    height: "3px",
    backgroundColor: "black",
    width: "100%",
    margin: "8px 0px 16px 0px",
  },
  venueDetails: {
    padding: "0px 10px",
    color: "black",
    border: "2px solid #424242",
    // borderLeft: "none",
  },
  venueDetailCard: { backgroundColor: "white", color: "black", height: 320 },
  iconEmpty: {
    color: `rgba(0,0,0,0.5)`,
  },
  venueName: {
    fontWeight: 620,
    fontSize: 24,
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  venueArea: {
    color: "#424242",
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: "2px",
  },
  ammenityContainer: {
    maxWidth: "86%",
    margin: "auto",
    maxHeight: 130,
    overflow: "hidden",
  },
  bottomContent: {
    maxHeight: 130,
    paddingBottom: 0,
    paddingLeft: 15,
    overflow: "hidden",
  },
  venueActions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  fieldSet: { display: "flex", paddingLeft: 0, border: "none" },
}));

export default function VenueList({ venueData, loadTracer }) {
  const classes = useStyles();

  if (venueData === [] || venueData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid container className={classes.venueContainer}>
      {venueData.map((venue) => (
        <React.Fragment key={`Venue-${venue.name}`}>
          <div className={classes.divider} />
          <Grid item xs={12} sm={6} className={classes.imageCarousel}>
            <ImageGallery
              items={venue.photos}
              showFullscreenButton={false}
              showPlayButton={false}
              lazyLoad={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.venueDetails}>
            <Card elevation={0} className={classes.venueDetailCard}>
              <CardHeader
                title={venue.name}
                titleTypographyProps={{ className: classes.venueName }}
                subheader={venue.area + ", " + venue.city}
                subheaderTypographyProps={{ className: classes.venueArea }}
                action={
                  <IconButton>
                    <Favorite style={{ color: "red" }} />
                  </IconButton>
                }
              />
              <div className={classes.ammenityContainer}>
                <Grid container>
                  <Grid
                    item
                    xs={10}
                    sm={11}
                    container
                    justify={"space-around"}
                    alignItems={"center"}
                  >
                    {[...venue.amme].map((ammenity) => (
                      <Grid item xs={6} style={{ paddingRight: 10 }}>
                        <Typography variant='subtitle1' gutterBottom noWrap>
                          {ammenity}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={1}
                    container
                    justify='center'
                    alignItems='center'
                  >
                    more...
                  </Grid>
                </Grid>
              </div>
              <CardContent className={classes.bottomContent}>
                <Box component='fieldset' className={classes.fieldSet}>
                  {"Rating :  "}
                  <Rating
                    value={4}
                    readOnly
                    classes={{ iconEmpty: classes.iconEmpty }}
                  />
                </Box>
                <Typography variant={"subtitle1"}>
                  <b>{`Starting from ₹${venue.starting_price}`}</b> per person
                </Typography>
              </CardContent>
            </Card>
            <div className={classes.venueActions}>
              <Button color='primary' variant='outlined'>
                Book Now
              </Button>
              <Button color='primary' variant='outlined'>
                View Details
              </Button>
            </div>
          </Grid>
        </React.Fragment>
      ))}
      <Grid innerRef={loadTracer} item xs={12} align='center'>
        LOADING VENUES
      </Grid>
    </Grid>
  );
}
