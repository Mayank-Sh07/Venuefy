import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import ImageGallery from "react-image-gallery";
import "./image-gallery.scss";

const useStyles = makeStyles((theme) => ({
  venueContainer: {
    padding: "0px 10px 10px",
    backgroundColor: theme.palette.secondary.light,
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
    [theme.breakpoints.only("xs")]: {
      padding: "0px",
    },
  },
  venueDetailCard: {
    color: "black",
    height: 320,
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.only("xs")]: {
      height: "unset",
    },
  },
  header: {
    [theme.breakpoints.only("xs")]: {
      padding: "8px 14px",
    },
  },
  iconEmpty: {
    color: `rgba(0,0,0,0.5)`,
  },
  venueName: {
    fontWeight: 620,
    fontSize: 23,
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "20px",
    },
  },
  venueArea: {
    color: "#424242",
    fontSize: 18,
    fontWeight: 500,
    paddingLeft: "2px",
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  ammenityContainer: {
    maxWidth: "86%",
    marginLeft: "8%",
    maxHeight: 130,
    overflow: "hidden",
    padding: "6px 0px",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "76%",
    },
  },
  ammenity: {
    fontSize: "0.85rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.6rem",
    },
  },
  bottomContent: {
    maxHeight: 130,
    overflow: "hidden",
  },
  venueActions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  actionBtn: {
    margin: "0px 15px",
    [theme.breakpoints.down("xs")]: {
      padding: "4px 10px",
      fontSize: "0.75rem",
      minWidth: "30px",
      margin: "0px 8px",
    },
  },
  smallBtn: {
    [theme.breakpoints.up("md")]: {
      padding: "2px 10px",
      fontSize: "0.8rem",
      minWidth: "30px",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "2px 8px",
      fontSize: "0.7rem",
      minWidth: "30px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "1px 4px",
      fontSize: "0.5rem",
      minWidth: "30px",
    },
  },
  fieldSet: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 0,
    border: "none",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem !important",
    },
  },
  price: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem ",
    },
  },
}));

function VenueList({ venueData, loadTracer, more }) {
  const classes = useStyles();

  if (venueData === [] || venueData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid container className={classes.venueContainer}>
      <div
        className={classes.divider}
        style={{ marginTop: "-2px" }}
        key={`DIVIDER-TOP`}
      />
      {venueData.map((venue) => (
        <>
          <Grid
            item
            xs={12}
            sm={6}
            className={classes.imageCarousel}
            key={`IMAGES-${venue.name}`}
          >
            <ImageGallery
              items={venue.photos}
              showFullscreenButton={false}
              showPlayButton={false}
              lazyLoad={true}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={classes.venueDetails}
            key={`DETAILS-${venue.name}`}
          >
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
                className={classes.header}
              />
              <div className={classes.ammenityContainer}>
                <Grid container>
                  <Grid
                    item
                    xs={10}
                    container
                    justify={"space-around"}
                    alignItems={"center"}
                  >
                    {[...venue.amme].map((ammenity) => (
                      <Grid item xs={6} style={{ paddingRight: 10 }}>
                        <Typography
                          className={classes.ammenity}
                          gutterBottom
                          noWrap
                        >
                          {ammenity}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    container
                    justify='center'
                    alignItems='center'
                  >
                    <Button
                      color='primary'
                      variant='outlined'
                      classes={{ root: classes.smallBtn }}
                    >
                      MORE
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <CardContent className={classes.bottomContent}>
                <Box component='fieldset' className={classes.fieldSet}>
                  <b>{"Rating  :  "}</b>
                  <Rating
                    value={4}
                    readOnly
                    classes={{ iconEmpty: classes.iconEmpty }}
                    size='small'
                    style={{ marginLeft: "8px" }}
                  />
                </Box>
                <Typography className={classes.price}>
                  <b>{`Starting from ₹${venue.starting_price}`}</b> per person
                </Typography>
              </CardContent>
            </Card>
            <div className={classes.venueActions}>
              <Button
                color='primary'
                variant='contained'
                className={classes.actionBtn}
              >
                View Details
              </Button>
              <Button
                color='primary'
                variant='contained'
                className={classes.actionBtn}
              >
                Book Now
              </Button>
            </div>
          </Grid>
          <div className={classes.divider} key={`DIVIDER-${venue.name}`} />
        </>
      ))}
      {more && (
        <Grid item xs={12} align='center' innerRef={loadTracer}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
}

export default memo(VenueList);
