import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Form from "./Form/Form";
import ImageGallery from "react-image-gallery";
import "./image-gallery.scss";
import ActionCards from "./Actions/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
  },
  profileContainer: {
    backgroundColor: theme.palette.secondary.light,
  },
  ImageGalleryContainer: {
    order: 1,
    padding: theme.spacing(0, 1),
  },
  formContainer: {
    order: 2,
    [theme.breakpoints.only("xs")]: {
      order: 3,
    },
  },
  descriptionContainer: {
    order: 3,
    transform: `translateY(-50px)`,
    [theme.breakpoints.only("sm")]: {
      transform: `translateY(-40px)`,
    },
    [theme.breakpoints.only("xs")]: {
      order: 2,
    },
  },
  iconEmpty: {
    color: `rgba(0,0,0,0.35)`,
  },
  header: {
    color: "black",
    maxWidth: "1100px",
    fontWeight: "600",
    fontSize: "34px",
    [theme.breakpoints.only("md")]: {
      maxWidth: "880px",
      fontSize: "26px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "620px",
      fontSize: "20px",
    },
  },
  reviewSection: {
    display: "flex",
  },
  about: {
    fontSize: "1rem",
    fontWeight: "600",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  },
  description: {
    padding: "5px 24px",
  },
  descriptionText: {
    fontSize: "0.8rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
}));

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
];

export default function VenueProfile() {
  const classes = useStyles();
  const theme = useTheme();
  var smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <Container disableGutters>
        <Grid
          container
          className={classes.profileContainer}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={8} className={classes.ImageGalleryContainer}>
            <Container maxWidth={"md"} disableGutters>
              <ImageGallery
                items={images}
                showPlayButton={false}
                thumbnailPosition={"right"}
              />
            </Container>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.formContainer}>
            <Container maxWidth={"xs"}>
              <Form smDown={smDown} />
            </Container>
          </Grid>
          <Grid item xs={12} className={classes.descriptionContainer}>
            <Container disableGutters>
              <Grid
                container
                alignItems={"flex-start"}
                justify={"space-between"}
              >
                <Grid item xs={12}>
                  <CardHeader
                    disableTypography
                    title={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "-10px",
                        }}
                      >
                        <Typography noWrap className={classes.header}>
                          Chamong Chiabari - Mountain Retreat & Spa
                        </Typography>
                        <Rating
                          readOnly
                          value={4}
                          classes={{
                            iconEmpty: classes.iconEmpty,
                          }}
                          style={{ margin: "0px 10px" }}
                          size={smDown ? "small" : "medium"}
                        />
                      </div>
                    }
                    subheader={
                      <Typography
                        style={{ marginLeft: "6px" }}
                        variant={smDown ? "caption" : "subtitle1"}
                      >
                        chennai, Kolkata, Mumbai,
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.description}>
                    <Typography className={classes.about}>
                      About the Venue,
                    </Typography>
                    <Typography className={classes.descriptionText} paragraph>
                      About the Venue About the Venue About the Venue About the
                      Venue About the Venue About the Venue About the Venue
                      About the Venue About the Venue About the Venue About the
                      Venue About the Venue About the Venue About the Venue
                      About the Venue About the Venue About the Venue About the
                      Venue About the Venue About the Venue About the Venue
                      About the Venue About the Venue About the Venue
                    </Typography>
                  </div>
                </Grid>
                <ActionCards />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
