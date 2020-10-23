import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    position: "relative",
    height: "600px",
    border: "1px solid black",
    borderBottom: "none",
    [theme.breakpoints.only("sm")]: {
      height: "450px",
    },
    [theme.breakpoints.only("md")]: {
      height: "500px",
    },
  },
  rightImageContainer: {
    height: "100%",
    position: "absolute",
    top: "0px",
    width: "100%",
    clipPath: `polygon(75% 0px, 100% 0%, 100% 100%, 50% 72%)`,
    display: "flex",
    justifyContent: "flex-end",
  },
  imageClass: {
    objectFit: "cover",
    objectPosition: "left",
    marginTop: "110px",
    height: "100%",
    width: "55%",
    border: "1px solid black",
  },
  leftTextContainer: {
    height: "85%",
    position: "absolute",
    top: "0px",
    width: "100%",
    clipPath: `polygon(0px 0px, 75% 0px, 50% 85%, 0px 85%)`,
    backgroundColor: theme.palette.secondary.light,
    border: "1px solid black",
  },
  leftHeading: {
    padding: "20px 20px 20px 90px",
  },
  leftText: {
    backgroundColor: theme.palette.secondary.main,
    height: "55%",
    margin: "10px 20% 10px 80px",
    clipPath: `polygon(0px 0px, 75% 0px, 55% 85%, 0px 85%)`,
    padding: "20px 26% 10px 20px",
    fontSize: "18px",
    [theme.breakpoints.only("md")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "40px",
    },
  },
}));

function HomeAngularDescription() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.descriptionContainer}>
        <div className={classes.rightImageContainer}>
          <img
            src={"imgs/banner2.jpg"}
            alt='Banner'
            className={classes.imageClass}
          />
        </div>
        <div className={classes.leftTextContainer}>
          <Typography variant='h2' className={classes.leftHeading}>
            Who are we?
          </Typography>
          <div className={classes.leftText}>
            We provide all Venue and Non-Venue services related to a plethora of
            events, from your choice of make-up artists and florists to
            exquisite banquets and cruise ships.
            <h5
              style={{
                marginTop: "5px",
                textAlign: "end",
                paddingRight: "15%",
              }}
            >
              - Venuefy
            </h5>
          </div>
        </div>
        <Typography
          variant='h2'
          style={{ position: "absolute", bottom: "5px", paddingLeft: "90px" }}
        >
          Venuefy Services
        </Typography>
      </div>
    </>
  );
}

export default HomeAngularDescription;
