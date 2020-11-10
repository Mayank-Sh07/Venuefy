import React from "react";
import ImageGallery from "react-image-gallery";
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
import "../image-gallery.scss";

const useStyles = makeStyles((theme) => ({
  venueContainer: {
    padding: "15px",
  },
  imageCarousel: {
    overflow: "hidden",
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
  },
  iconEmpty: {
    color: `rgba(0,0,0,0.5)`,
  },
}));

export default function Venue({ venueData }) {
  const classes = useStyles();

  if (venueData === [] || venueData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid container className={classes.venueContainer}>
      {venueData.map((venue) => (
        <>
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
            <Card
              elevation={0}
              style={{ backgroundColor: "white", color: "black" }}
            >
              <CardHeader
                title={venue.name}
                subheader={venue.area + ", " + venue.city}
                subheaderTypographyProps={{ style: { color: "black" } }}
                action={
                  <IconButton>
                    <Favorite style={{ color: "red" }} />
                  </IconButton>
                }
              />
              <div
                style={{
                  maxWidth: "80%",
                  margin: "auto",
                  maxHeight: 130,
                  overflow: "hidden",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={9}
                    sm={9}
                    container
                    justify={"space-around"}
                    alignItems={"center"}
                  >
                    {[
                      ...venue.amme,
                      "xyz",
                      "abx",
                      "xae",
                      "lol",
                      "rapq",
                      "faqu",
                    ].map((ammenity) => (
                      <Grid item xs={6} style={{ paddingRight: 10 }}>
                        <Typography variant='subtitle1' gutterBottom noWrap>
                          {ammenity}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={3}
                    container
                    justify='center'
                    alignItems='center'
                  >
                    more...
                  </Grid>
                </Grid>
              </div>
              <CardContent
                style={{
                  maxHeight: 130,
                  paddingBottom: 0,
                  overflow: "hidden",
                }}
              >
                <Box
                  component='fieldset'
                  mb={1}
                  borderColor='transparent'
                  style={{ display: "flex", paddingLeft: 0 }}
                >
                  Rating:
                  <Rating
                    name='read-only'
                    value={4}
                    readOnly
                    classes={{ iconEmpty: classes.iconEmpty }}
                  />
                </Box>
                <Typography variant={"subtitle1"}>
                  <b>{`Starting from ₹${venue.starting_price}`}</b> per person
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <Button color='primary' variant='outlined'>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </>
      ))}
    </Grid>
  );
}
