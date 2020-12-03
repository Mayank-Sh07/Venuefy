import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Heart from "@material-ui/icons/FavoriteBorderOutlined";
import HeartIcon from "@material-ui/icons/FavoriteRounded";
import YouTube from "@material-ui/icons/SubscriptionsOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Location from "@material-ui/icons/LocationOnOutlined";
import Check from "@material-ui/icons/CheckCircleOutlined";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    padding: "12px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.light,
    maxHeight: "200px",
    maxWidth: "170px",
    margin: "20px auto",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
      maxWidth: "280px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "185px",
    },
  },
  iconEmpty: {
    color: `rgba(0,0,0,0.35)`,
  },
  bookingCard: {
    order: 1,
  },
  locationCard: {
    order: 2,
    [theme.breakpoints.down("md")]: {
      order: 3,
    },
  },
  favouriteCard: {
    order: 4,
  },
  reviewsCard: {
    order: 5,
  },
  ratingCard: {
    order: 3,
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
}));

export default function ActionCards() {
  const classes = useStyles();
  return (
    <Grid item container justify='space-evenly' alignItems='center'>
      <Grid
        item
        sm={4}
        md={4}
        lg={2}
        align='center'
        className={classes.bookingCard}
      >
        <div className={classes.card}>
          <Typography variant={"h6"}>
            <b>BOOK VENUE</b>
          </Typography>
          <Check style={{ fontSize: "60px" }} />
          <Typography variant={"caption"} paragraph>
            Reserve this venue for your event
          </Typography>
          <Button variant={"outlined"} color='primary' startIcon={<Check />}>
            Book Now
          </Button>
        </div>
      </Grid>

      <Grid
        item
        sm={4}
        md={4}
        lg={2}
        align='center'
        className={classes.locationCard}
      >
        <div className={classes.card}>
          <Typography variant={"h6"}>
            <b>GET LOCATION</b>
          </Typography>
          <Location style={{ fontSize: "60px" }} />
          <Typography variant={"caption"} paragraph>
            see the venue location on google Maps
          </Typography>
          <Button variant={"outlined"} color='primary' startIcon={<Location />}>
            Show Location
          </Button>
        </div>
      </Grid>

      <Grid
        item
        sm={4}
        md={4}
        lg={2}
        align='center'
        className={classes.ratingCard}
      >
        <div className={classes.card}>
          <Typography variant={"h6"}>
            <b>STAR RATING</b>
          </Typography>
          <Typography
            style={{
              fontSize: "60px",
              fontWeight: "600",
              maxHeight: 72,
              transform: `translateY(-15px)`,
            }}
          >
            4
          </Typography>
          <Typography
            variant={"caption"}
            paragraph
            style={{ transform: `translateY(-8px)` }}
          >
            rated from a total of 1234 ratings!
          </Typography>
          <Rating
            readOnly
            value={4}
            size={"small"}
            classes={{
              iconEmpty: classes.iconEmpty,
            }}
          />
        </div>
      </Grid>

      <Grid
        item
        sm={4}
        md={4}
        lg={2}
        align='center'
        className={classes.favouriteCard}
      >
        <div className={classes.card}>
          <Typography variant={"h6"}>
            <b>LOVING IT?</b>
          </Typography>
          <Heart style={{ fontSize: "60px" }} />
          <Typography variant={"caption"} paragraph>
            Add this venue to your Favoutites!
          </Typography>
          <Button
            variant={"outlined"}
            color='primary'
            startIcon={<HeartIcon />}
          >
            Mark Favourite
          </Button>
        </div>
      </Grid>

      <Grid
        item
        sm={4}
        md={4}
        lg={2}
        align='center'
        className={classes.reviewsCard}
      >
        <div className={classes.card}>
          <Typography variant={"h6"}>
            <b>VIDEO REVIEWS</b>
          </Typography>
          <YouTube style={{ fontSize: "60px" }} />
          <Typography variant={"caption"} paragraph>
            share your experience with this venue!
          </Typography>
          <Button
            variant={"outlined"}
            color='primary'
            startIcon={<YouTubeIcon />}
          >
            Record Review
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
