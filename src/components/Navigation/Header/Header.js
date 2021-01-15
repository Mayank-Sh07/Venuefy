import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../VenuefyLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 82,
  },
  menuButton: {
    marginRight: theme.spacing(1.5),
  },
  title: {
    flexGrow: 1,
  },
  tab: {
    fontSize: "1.125em",
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.75em",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  indicator: {
    height: "4px",
  },
  contacts: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-end",
    padding: "0px 15px 8px",
    height: "20px",
    transform: `translateY(-8px)`,
  },
  selected: {
    fontWeight: "600",
    fontSize: "1.20em",
    backgroundColor: "rgba(38,37,42,0.8)",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
}));

export default function Header({ currentPath }) {
  const classes = useStyles();
  const history = useHistory();
  const handleChange = (event, newRoute) => {
    history.push(newRoute);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <div className={classes.contacts}>
          <a
            href='https://api.whatsapp.com/send?phone=+917605054440&text=hey+I%27m+looking+for+a+venue'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton>
              <WhatsApp style={{ color: "#25D366" }} />
            </IconButton>
          </a>
          <a href='tel:+919007967777' style={{ textDecoration: "none" }}>
            <Button
              startIcon={<Phone />}
              color='inherit'
              style={{ color: "white" }}
            >
              +9190079-67777
            </Button>
          </a>
        </div>
        <Toolbar style={{ minHeight: "52px" }}>
          <div className={classes.title}>
            <img
              src={logo}
              alt='Venuefy'
              style={{
                width: "160px",
                height: "50px",
                transform: "translateY(-12px)",
              }}
            />
          </div>
          <Tabs
            value={currentPath}
            onChange={handleChange}
            indicatorColor='secondary'
            classes={{ indicator: classes.indicator }}
            selectionFollowsFocus
          >
            <Tab
              label='Home'
              value='/'
              classes={{ root: classes.tab, selected: classes.selected }}
            />
            <Tab
              label='Venues'
              value='/Venues'
              classes={{ root: classes.tab, selected: classes.selected }}
            />
            {/* 
            <Tab
              label='Vendors'
              value='/Vendors'
              classes={{ root: classes.tab, selected: classes.selected }}
            />
            <Tab
              label='Testimonials'
              value='/Testimonials'
              classes={{ root: classes.tab, selected: classes.selected }}
            /> */}
            <Tab
              label='About Us'
              value='/About'
              classes={{ root: classes.tab, selected: classes.selected }}
            />
            <Tab
              label='Blog'
              value='/Blog'
              classes={{ root: classes.tab, selected: classes.selected }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
