import React from "react";
import clsx from "clsx";
import { FormContext } from "./FormContext";
import { fade, makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import FilterList from "@material-ui/icons/FilterList";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 56,
  },
  actionBar: {
    backgroundColor: theme.palette.secondary.light,
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: "2em",
    backgroundColor: fade(theme.palette.primary.main, 0.92),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 1),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "34ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
  filterBtn: {
    borderRadius: "2em",
    maxHeight: 30,
    backgroundColor: theme.palette.secondary.main,
    marginRight: theme.spacing(0.25),
    marginLeft: theme.spacing(1),
  },
  filterFloat: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: "3000",
    transition: theme.transitions.create(["all"], {
      easing: theme.transitions.easing.easeOut,
      duration: 200,
    }),
  },
  filterFloatNavOpen: {
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(9),
      right: theme.spacing(1),
    },
  },
  filterFloatNavClosed: {
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const { isFilterOpen, openFilter } = React.useContext(FormContext);
  const trigger = useScrollTrigger();
  return (
    <div className={classes.root} direction='down'>
      <Hidden mdUp>
        <Fab
          color='secondary'
          size='large'
          className={clsx(classes.filterFloat, {
            [classes.filterFloatNavOpen]: !trigger,
            [classes.filterFloatNavClosed]: trigger,
          })}
          onClick={openFilter}
          style={{}}
        >
          <FilterList />
        </Fab>
      </Hidden>
      <AppBar position='static' className={classes.actionBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.search}>
            <InputBase
              color='primary'
              placeholder='Search'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div hidden={isFilterOpen}>
              <Hidden smDown>
                <Button
                  variant='contained'
                  onClick={openFilter}
                  className={classes.filterBtn}
                  startIcon={<FilterList />}
                >
                  FILTER
                </Button>
              </Hidden>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
