import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import YouTube from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import TreeViewList from "./TreeView";
import logo from "../VenuefyLogo.png";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: "40px",
    [theme.breakpoints.only("xs")]: {
      padding: "20px",
    },
  },
  socialIcons: {
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  avatarBG: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  iconBG: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "4px",
  },
}));

const list1 = {
  head: "Venue Types",
  nodes: ["banquets", "resorts", "pubs", "hotels"],
};

const list2 = {
  head: "Premium Services",
  nodes: ["private jets", "cruise ships", "yatchs"],
};

const list3 = {
  head: "Services Provided",
  nodes: [
    "disc jockey (DJ)",
    "photographers",
    "make-up artists",
    "mehandi artists",
    "florists",
    "decorators",
    "caterers",
    "+ more...",
  ],
};

function HomeServices() {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Grid
        container
        alignItems='flex-start'
        justify='space-evenly'
        spacing={4}
      >
        <Grid item xs={6} sm={4}>
          <TreeViewList listData={list1} />
          <TreeViewList listData={list2} />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TreeViewList listData={list3} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid item container direction='column' alignItems='center'>
            <Grid item xs={12}>
              <img src={logo} height='50px' width='160px' alt='Venuefy' />
            </Grid>
            <Grid item xs={6} sm={12}>
              <a
                href='mailto: info@venuefy.in'
                style={{ textDecoration: "none" }}
              >
                <Button startIcon={<Mail />}>info@venuefy.in</Button>
              </a>
            </Grid>
            <Grid item xs={6} sm={12}>
              <a href='tel:+919007967777' style={{ textDecoration: "none" }}>
                <Button startIcon={<Phone />}>+91 90079-67777</Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.socialIcons}>
          <a
            href='https://www.facebook.com/venuefy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton>
              <Avatar className={classes.avatarBG}>
                <Facebook
                  style={{ color: "#4267B2" }}
                  className={classes.iconBG}
                />
              </Avatar>
            </IconButton>
          </a>
          <a
            href='https://www.instagram.com/venuefy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton>
              <Avatar className={classes.avatarBG}>
                <Instagram
                  style={{ color: "#E1306C" }}
                  className={classes.iconBG}
                />
              </Avatar>
            </IconButton>
          </a>
          <a
            href='https://www.linkedin.com/company/venuefy/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton>
              <Avatar className={classes.avatarBG}>
                <LinkedIn
                  style={{ color: "#2867B2" }}
                  className={classes.iconBG}
                />
              </Avatar>
            </IconButton>
          </a>
          <a
            href='https://www.youtube.com/channel/UCN9YvB4PzFtlNazmnaJUrAA'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton>
              <Avatar className={classes.avatarBG}>
                <YouTube
                  style={{ color: "#FF0000" }}
                  className={classes.iconBG}
                />
              </Avatar>
            </IconButton>
          </a>
          <a
            href='https://www.twitter.com/venuefy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton>
              <Avatar className={classes.avatarBG}>
                <Twitter
                  style={{ color: "#1DA1F2" }}
                  className={classes.iconBG}
                />
              </Avatar>
            </IconButton>
          </a>
        </Grid>
        <Grid item xs={12} sm={4} align='center'>
          <a
            href='https://www.wdievents.in/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://static.wixstatic.com/media/0cbda3_6d68eb4cafc241d08c837a2bfd5021b4~mv2.jpg/v1/fill/w_364,h_89,al_c,q_80,usm_0.66_1.00_0.01/0001%2520(3)_edited.webp'
              alt='WDI Events'
              height='70px'
              width='200px'
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeServices;
