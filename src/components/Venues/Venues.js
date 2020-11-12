import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import FormContextProvider, { FormContext } from "./Filters/FormContext";
import Form from "./Filters/Form";
import ActionBar from "./Filters/ActionBar";

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

function Venues() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const { isFilterOpen, control } = React.useContext(FormContext);
  // React.useEffect(() => {
  //   console.log("FETCHING DATA WITH : ", state.filterParams);
  // }, [state.filterParams]);
  return (
    <div className={classes.root}>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor='left'
        open={isFilterOpen}
        classes={{ paper: classes.drawerPaper }}
        transitionDuration={{ enter: 300, exit: 500 }}
      >
        <Form control={control} />
      </Drawer>
      <Container
        disableGutters
        maxWidth={false}
        className={clsx({
          [classes.onFilterOpen]: isFilterOpen,
          [classes.onFilterClose]: !isFilterOpen,
        })}
      >
        <ActionBar />
      </Container>
    </div>
  );
}

export default () => (
  <FormContextProvider>
    <Venues />
  </FormContextProvider>
);
