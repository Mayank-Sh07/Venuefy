import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Form from "./Filters/Form";
// Optimizations pending
import ActionBar from "./ActionBar";
// Optimizations pending
import reducer from "./userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  onFilterOpen: {
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create(["padding"], {
        easing: theme.transitions.easing.easeOut,
        duration: 225,
      }),
      paddingLeft: "250px",
    },
  },
  onFilterClose: {
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create(["padding"], {
        easing: theme.transitions.easing.easeOut,
        duration: 800,
      }),
      padding: 0,
    },
  },
  drawerPaper: {
    width: "250px",
    position: "fixed",
    top: "92px",
    border: `0.2px solid ${theme.palette.secondary.main}`,
    borderLeft: "none",
    overflow: "hidden",
    [theme.breakpoints.only("xs")]: {
      top: "0px",
    },
  },
}));

const initialState = {
  isFilterOpen: Boolean(window.innerWidth > 1000),
  filterParams: {},
  tags: [],
  checkBoxTags: [],
  selectTags: [],
};

export default function Venues() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const { control, reset, getValues, setValue } = useForm();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    console.log("FETCHING DATA WITH : ", state.filterParams);
  }, [state.filterParams]);
  return (
    <div className={classes.root}>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor='left'
        open={state.isFilterOpen}
        classes={{ paper: classes.drawerPaper }}
        transitionDuration={{ enter: 300, exit: 500 }}
      >
        <Form
          dispatch={dispatch}
          control={control}
          reset={reset}
          getValues={getValues}
          setValue={setValue}
        />
      </Drawer>
      <Container
        disableGutters
        maxWidth={false}
        className={clsx({
          [classes.onFilterOpen]: state.isFilterOpen,
          [classes.onFilterClose]: !state.isFilterOpen,
        })}
      >
        <ActionBar
          dispatch={dispatch}
          isFilterOpen={state.isFilterOpen}
          tags={state.tags}
          getValues={getValues}
        />
      </Container>
    </div>
  );
}
