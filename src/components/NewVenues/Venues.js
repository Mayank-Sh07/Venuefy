import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Form from "./Form";
import ActionBar from "./ActionBar";

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
  fetchWithParams: 1,
  tags: [],
  venueData: [],
  checkBoxTags: [],
  selectTags: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "OPEN_FILTER":
      return { ...state, isFilterOpen: true };

    case "CLOSE_FILTER":
      return { ...state, isFilterOpen: false };

    case "CHECKED": {
      return { ...state, checkBoxTags: [...state.checkBoxTags, payload] };
    }

    case "UNCHECKED": {
      return {
        ...state,
        checkBoxTags: state.checkBoxTags.filter((tag) => tag.label !== payload),
      };
    }

    case "SELECTED": {
      const selectTags = state.selectTags;
      let found = false;
      selectTags.forEach((tag) => {
        if (tag.type === payload.type) {
          found = true;
          tag.label = payload.label;
          tag.resetVal = payload.resetVal;
        }
      });

      return {
        ...state,
        selectTags: found
          ? selectTags
          : [
              ...state.selectTags,
              {
                label: payload.label,
                resetVal: payload.resetVal,
                type: payload.type,
              },
            ],
      };
    }

    case "SUBMIT": {
      console.log(payload);
      let selectTags = Object.values(state.selectTags).filter(
        (tag) => tag.label !== "Unspecified"
      );
      return {
        ...state,
        tags: [...state.checkBoxTags, ...selectTags],
      };
    }

    case "DELETE_TAG": {
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.label !== payload),
        checkBoxTags: state.checkBoxTags.filter((tag) => tag.label !== payload),
        selectTags: state.selectTags.filter((tag) => tag.label !== payload),
      };
    }

    default:
      return state;
  }
};

export default function Venues() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // console.log("SELECT OBJECT: ", state.selectTags);
  // console.log("CHECKBOX ARRAY: ", state.checkBoxTags);
  // console.log("TAGS ARRAY: ", state.tags);
  return (
    <div className={classes.root}>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor='left'
        open={state.isFilterOpen}
        classes={{ paper: classes.drawerPaper }}
        transitionDuration={{ exit: 500 }}
      >
        <Form dispatch={dispatch} />
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
        />
      </Container>
    </div>
  );
}
