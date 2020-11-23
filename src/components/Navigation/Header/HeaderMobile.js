import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";
import LocationCity from "@material-ui/icons/LocationCity";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Money from "@material-ui/icons/Money";
import Home from "@material-ui/icons/Home";
import ContactMail from "@material-ui/icons/ContactMail";
import Book from "@material-ui/icons/Book";
import logo from "../VenuefyLogo.png";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import BackDrop from "@material-ui/core/Backdrop";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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
    borderColor: "#FFFFFF",
    borderTopLeftRadius: "1.25em",
    borderTopRightRadius: "1.25em",
    textShadow: `0 0 2px black`,
  },
  floatingNavContainer: {
    position: "fixed",
    bottom: "12px",
    zIndex: theme.zIndex.mobileStepper,
    backgroundColor: "transparent",
    width: "100%",
    justifyContent: "center",
  },
  floatingNav: {
    borderRadius: "1.75em",
    boxShadow: `0px 3px 0px -6px rgba(255,255,255,0.2), 0px 0px 10px 1px rgba(255,255,255,0.14), 0px -1px 6px 3px rgba(255,255,255,0.12)`,
    maxHeight: "48px",
  },
  floatingNavRoot: {
    minWidth: "72px",
  },
  selectedBottom: {
    backgroundColor: "#FFFFFF",
    textShadow: `0 0 2px black`,
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
  divider: {
    maxHeight: "36px",
    margin: "10px 0px",
  },
  root2: {
    height: 380,
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  speedDialAction: {
    transform: `translate(10px,-18px)`,
  },
}));

export default function HeaderMobile({ currentPath }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newRoute) => {
    if (newRoute === "/none") {
      return;
    } else history.push(newRoute);
  };

  function SpeedDialTooltipOpen() {
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <SpeedDial
          ariaLabel='SpeedDial tooltip'
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          classes={{
            root: classes.speedDialRoot,
            actions: classes.speedDialAction,
          }}
          FabProps={{
            style: {
              transform: `translate(10px,-20px)`,
              boxShadow: "none",
              backgroundColor: "inherit",
            },
          }}
        >
          <SpeedDialAction
            key='Testimonials'
            icon={<SaveIcon />}
            tooltipTitle='Testimonials'
            tooltipOpen
            onClick={handleClose}
          />
          <SpeedDialAction
            key='xyz'
            icon={<PrintIcon />}
            tooltipTitle='xyzabc'
            tooltipPlacement='right'
            tooltipOpen
            onClick={handleClose}
          />
          <SpeedDialAction
            key='about'
            icon={<ShareIcon />}
            tooltipTitle='about'
            tooltipOpen
            onClick={handleClose}
          />
          <SpeedDialAction
            key='xyzabc'
            icon={<SaveIcon />}
            tooltipTitle='xyzabc'
            tooltipPlacement='right'
            tooltipOpen
            onClick={handleClose}
          />
        </SpeedDial>
      </>
    );
  }

  function FloatingNavBar(props) {
    const trigger = useScrollTrigger();
    return (
      <Slide in={!trigger} direction='up' unmountOnExit mountOnEnter>
        <Toolbar className={classes.floatingNavContainer} disableGutters>
          <BottomNavigation
            value={currentPath}
            onChange={handleChange}
            showLabels={true}
            className={classes.floatingNav}
          >
            <BottomNavigationAction
              value='/'
              label='Home'
              icon={<Home />}
              classes={{
                root: classes.floatingNavRoot,
                selected: classes.selectedBottom,
              }}
              style={{
                borderTopLeftRadius: "1.75em",
                borderBottomLeftRadius: "1.75em",
              }}
            />
            <Divider
              orientation='vertical'
              flexItem
              className={classes.divider}
            />
            <BottomNavigationAction
              value='/Contact'
              label='Contact'
              icon={<ContactMail />}
              classes={{
                root: classes.floatingNavRoot,
                selected: classes.selectedBottom,
              }}
            />
            <BackDrop open={open} />
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <div
                style={{
                  height: "72px",
                  width: "72px",
                  backgroundColor: "black",
                  transform: `translate(2px,-11px)`,
                  borderRadius: "3em",
                  margin: "-4px -10px",
                  zIndex: 2000,
                  display: "flex",
                  border: "2px solid beige",
                }}
              >
                <SpeedDialTooltipOpen />
              </div>
            </ClickAwayListener>

            <BottomNavigationAction
              value='/Blog'
              label='Blog'
              icon={<Book />}
              classes={{
                root: classes.floatingNavRoot,
                selected: classes.selectedBottom,
              }}
            />
            <Divider
              orientation='vertical'
              flexItem
              className={classes.divider}
            />
            <BottomNavigationAction
              value='/Account'
              label='Account'
              icon={<AccountCircle />}
              classes={{
                root: classes.floatingNavRoot,
                selected: classes.selectedBottom,
              }}
              style={{
                borderTopRightRadius: "1.75em",
                borderBottomRightRadius: "1.75em",
              }}
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
          <Toolbar>
            <div className={classes.title}>
              <img src={logo} alt='Venuefy' height='35px' width='110px' />
            </div>
            <BottomNavigation showLabels={true} style={{ height: "unset" }}>
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
            showLabels={true}
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
