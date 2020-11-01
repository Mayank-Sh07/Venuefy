import React, { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { Scrollbars } from "react-custom-scrollbars";
import {
  makeStyles,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@material-ui/core";
import { Delete, ChevronLeft } from "@material-ui/icons";
import FilterSelect from "./FilterSelect";
import FilterSlider from "./FilterSlider";
import FilterList from "./FilterList";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tagBarShift: {
    [theme.breakpoints.up("lg")]: {
      width: `100%`,
      paddingLeft: drawerWidth,
      transition: theme.transitions.create(["padding", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // position: "absolute",
    overflowX: "hidden",
    [theme.breakpoints.up("lg")]: {
      height: "85vh",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    height: "86px",
    [theme.breakpoints.only("xs")]: {
      height: "120px",
    },
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "6px",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: `0 0 2px black`,
    fontSize: "1.4rem",
    marginRight: "5px",
  },
  tagBar: {
    marginTop: " 86px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create(["padding", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  iconButtonLabel: {
    display: "flex",
    flexDirection: "column",
    minWidth: "36px",
  },
  tinyLabel: {
    fontSize: "0.4em",
  },
}));

export default function FilterDrawer({ open, setOpen }) {
  const classes = useStyles();
  const { handleSubmit, reset, control } = useForm();
  const [sliderVal, setSliderVal] = useState(20);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log(sliderVal);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={clsx(classes.tagBar, { [classes.tagBarShift]: open })}>
        <Toolbar>
          <Button
            color='inherit'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
            variant='outlined'
          >
            Filter
          </Button>
          <Typography variant='h6' noWrap>
            Filter drawer
          </Typography>
        </Toolbar>
      </div>
      <Drawer
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Scrollbars width={240}>
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              alert(JSON.stringify(data));
            })}
          >
            <div className={classes.drawerHeader}>
              <Typography variant='h4' className={classes.title}>
                FILTERS
              </Typography>
              <IconButton
                classes={{ label: classes.iconButtonLabel }}
                size='small'
                onClick={() => reset()}
              >
                <Delete />
                <Typography className={classes.tinyLabel}>Clear All</Typography>
              </IconButton>
              <IconButton
                onClick={handleDrawerClose}
                classes={{ label: classes.iconButtonLabel }}
                size='small'
              >
                <ChevronLeft />
                <Typography className={classes.tinyLabel}>Hide</Typography>
              </IconButton>
            </div>
            <Divider />
            <FilterSelect control={control} />
            <FilterSlider control={control} />
            <Divider />
            <FilterList control={control} />
            <Divider />
          </form>
        </Scrollbars>
      </Drawer>
    </div>
  );
}
