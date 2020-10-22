import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";

import { WhatsApp, Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1.5),
  },
  title: {
    flexGrow: 1,
  },
  tab: {
    fontSize: "1.25em",
    textTransform: "none",
    [theme.breakpoints.only("sm")]: {
      minWidth: theme.spacing(10),
    },
    [theme.breakpoints.only("md")]: {
      minWidth: theme.spacing(12),
    },
    [theme.breakpoints.only("lg")]: {
      minWidth: theme.spacing(14),
    },
  },
  indicator: {
    height: "4px",
  },
  contacts: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-end",
    padding: "0px 15px 4px",
    height: "20px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <div className={classes.contacts}>
          <IconButton>
            <WhatsApp style={{ backgroundColor: "#25D366", color: "white" }} />
          </IconButton>
          <Button
            startIcon={<Phone />}
            color='inherit'
            style={{ color: "white" }}
          >
            +9190079-67777
          </Button>
        </div>
        <Toolbar>
          <div className={classes.title}>
            <img src='imgs/vflogo.PNG' alt='Venuefy' />
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='secondary'
            classes={{ indicator: classes.indicator }}
          >
            <Tab label='Home' classes={{ root: classes.tab }} />
            <Tab label='Venues' classes={{ root: classes.tab }} />
            <Tab label='Testimonials' classes={{ root: classes.tab }} />
            <Tab label='Vendors' classes={{ root: classes.tab }} />
            <Tab label='About Us' classes={{ root: classes.tab }} />
            <Tab label='Blogs' classes={{ root: classes.tab }} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
