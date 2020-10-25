import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
  Divider,
} from "@material-ui/core";

import {
  LocationCity,
  AccountCircle,
  Money,
  Home,
  ContactMail,
  Book,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mobileHeader: {
    height: "120px",
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 10px 0px 10px ",
  },
  title: {
    flexGrow: 1,
    marginLeft: "-10px",
  },
  selected: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: "1.25em",
    borderTopRightRadius: "1.25em",
    textShadow: `0 0 2px black`,
    filter: `progid: DXImageTransform.Microsoft.Glow(Color=#ffffff,Strength=0.5)`,
  },
  floatingNavContainer: {
    position: "fixed",
    bottom: "15px",
    zIndex: theme.zIndex.mobileStepper,
    backgroundColor: "transparent",
    width: "100%",
    justifyContent: "center",
  },
  floatingNav: {
    borderRadius: "1.75em",
    border: "1px solid white",
  },
  selectedBottom: {
    backgroundColor: "rgba(255,255,255,0.75)",
    textShadow: `0 0 2px white`,
    filter: `progid: DXImageTransform.Microsoft.Glow(Color=#ffffff,Strength=0.5)`,
  },
}));

export default function HeaderMobile({ currentPath }) {
  const classes = useStyles();
  const history = useHistory();
  const handleChange = (event, newRoute) => {
    history.push(newRoute);
  };

  function HideOnScroll(props) {
    const trigger = useScrollTrigger();
    return (
      <Slide in={!trigger} direction='up'>
        <Toolbar className={classes.floatingNavContainer} disableGutters>
          <BottomNavigation
            showLabels
            className={classes.floatingNav}
            onChange={handleChange}
          >
            <BottomNavigationAction
              value='/'
              label='Home'
              icon={<Home />}
              classes={{ selected: classes.selectedBottom }}
            />
            <Divider orientation='vertical' flexItem />
            <BottomNavigationAction
              value='/Contact'
              label='Contact'
              icon={<ContactMail />}
              classes={{ selected: classes.selectedBottom }}
            />
            <Divider orientation='vertical' flexItem />
            <BottomNavigationAction
              value='/Blog'
              label='Blog'
              icon={<Book />}
              classes={{ selected: classes.selectedBottom }}
            />
            <Divider orientation='vertical' flexItem />
            <BottomNavigationAction
              value='/Account'
              label='Account'
              icon={<AccountCircle />}
              classes={{ selected: classes.selectedBottom }}
            />
          </BottomNavigation>
        </Toolbar>
      </Slide>
    );
  }

  console.log(currentPath);

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static' className={classes.mobileHeader}>
          <Toolbar disableGutters>
            <div className={classes.title}>
              <img src='imgs/vflogo.PNG' alt='Venuefy' />
            </div>
            <Button>Testimonials</Button>
          </Toolbar>
          <BottomNavigation
            value={currentPath}
            onChange={handleChange}
            showLabels
          >
            <BottomNavigationAction
              value='/Venue'
              label='Venue'
              icon={<LocationCity />}
              classes={{ selected: classes.selected }}
            />
            <BottomNavigationAction
              value='/Vendors'
              label='Vendors'
              icon={<AccountCircle />}
              classes={{ selected: classes.selected }}
            />
            <BottomNavigationAction
              value='/Premium'
              label='Premium'
              icon={<Money />}
              classes={{ selected: classes.selected }}
            />
          </BottomNavigation>
        </AppBar>
      </div>
      <HideOnScroll />
    </>
  );
}
