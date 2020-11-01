import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
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
  WhatsApp,
  Phone,
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
    // border: "0.3px solid white",
    boxShadow: `0px 3px 0px -6px rgba(255,255,255,0.2), 0px 0px 10px 1px rgba(255,255,255,0.14), 0px -1px 6px 3px rgba(255,255,255,0.12)`,
    overflow: "hidden",
  },
  selectedBottom: {
    backgroundColor: "#FFFFFF",
    textShadow: `0 0 2px black`,
    filter: `progid: DXImageTransform.Microsoft.Glow(Color=#ffffff,Strength=0.25)`,
  },
  tinyLabel: {
    fontSize: "7px",
    opacity: "1 !important",
  },
  tinyButtons: {
    padding: "0px !important",
    marginLeft: "8px",
    minWidth: "0px",
  },
}));

export default function HeaderMobile({ currentPath }) {
  const classes = useStyles();
  const history = useHistory();
  const handleChange = (event, newRoute) => {
    history.push(newRoute);
  };

  function FloatingNavBar(props) {
    const trigger = useScrollTrigger();
    return (
      <Slide in={!trigger} direction='up'>
        <Toolbar className={classes.floatingNavContainer} disableGutters>
          <BottomNavigation
            value={currentPath}
            onChange={handleChange}
            showLabels
            className={classes.floatingNav}
          >
            <BottomNavigationAction
              value='/'
              label='Home'
              icon={<Home />}
              classes={{ selected: classes.selectedBottom }}
            />
            {/* <Divider orientation='vertical' flexItem /> */}
            <BottomNavigationAction
              value='/Contact'
              label='Contact'
              icon={<ContactMail />}
              classes={{ selected: classes.selectedBottom }}
            />
            {/* <Divider orientation='vertical' flexItem /> */}
            <BottomNavigationAction
              value='/Blog'
              label='Blog'
              icon={<Book />}
              classes={{ selected: classes.selectedBottom }}
            />
            {/* <Divider orientation='vertical' flexItem /> */}
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

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static' className={classes.mobileHeader}>
          <Toolbar disableGutters>
            <div className={classes.title}>
              <img src='imgs/vflogo.PNG' alt='Venuefy' />
            </div>
            <BottomNavigation showLabels style={{ height: "unset" }}>
              <BottomNavigationAction
                label='Testimonials'
                icon={
                  <AccountCircle
                    style={{
                      color: "white",
                      fontSize: "18px",
                    }}
                  />
                }
                classes={{
                  root: classes.tinyButtons,
                  label: classes.tinyLabel,
                }}
                onClick={() => history.push("/Testimonials")}
              />
              <a href='tel:+919007967777' style={{ textDecoration: "none" }}>
                <BottomNavigationAction
                  label='Call Us'
                  icon={
                    <Phone
                      style={{
                        color: "white",
                        fontSize: "18px",
                      }}
                    />
                  }
                  classes={{
                    root: classes.tinyButtons,
                    label: classes.tinyLabel,
                  }}
                />
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=+917605054440&text=hey+I%27m+looking+for+a+venue'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BottomNavigationAction
                  label='Whatsapp'
                  icon={
                    <WhatsApp
                      style={{
                        color: "#25D366",
                        // backgroundColor: "white",
                        fontSize: "18px",
                      }}
                    />
                  }
                  classes={{
                    root: classes.tinyButtons,
                    label: classes.tinyLabel,
                  }}
                />
              </a>
            </BottomNavigation>
          </Toolbar>
          <BottomNavigation
            value={currentPath}
            onChange={handleChange}
            showLabels
          >
            <BottomNavigationAction
              value='/Venues'
              label='Venues'
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
      <FloatingNavBar />
    </>
  );
}
