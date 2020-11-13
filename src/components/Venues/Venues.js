import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import FormContextProvider, { FormContext } from "./Filters/FormContext";
import Form from "./Filters/Form";
import ActionBar from "./Filters/ActionBar";
import VenueList from "./VenueList/VenueList";

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

const perPage = 3;

const stateActions = (state, { type, payload }) => {
  switch (type) {
    case "FETCHING-DATA":
      return { ...state, loading: true };

    case "FETCH-SUCCESS":
      // console.log("DATA : ", payload);
      return {
        ...state,
        data: payload,
        displayData: payload.slice(0, perPage),
        more: Boolean(payload.length > perPage),
        after: perPage,
      };

    case "FETCH-ERROR":
      return { ...state, isError: true };

    case "FETCH-COMPLETED":
      return { ...state, loading: false };

    case "LOAD-MORE":
      const moreData = state.data.slice(state.after, state.after + perPage);
      console.log(moreData);
      return {
        ...state,
        displayData: [...state.displayData, ...moreData],
        loading: false,
        more: Boolean(moreData.length === perPage),
        after: state.after + perPage,
      };

    default:
      return state;
  }
};

const setPhotoURLs = (baseURL, size) => {
  baseURL = baseURL.replaceAll("<s>", "/");
  let srcArr = [...Array(size).keys()].map((indx) => ({
    original: baseURL + indx + "%40lb.jpeg",
    thumbnail: baseURL + indx + "%40ps.jpeg",
  }));
  return srcArr;
};

const FetchData = async (dispatch) => {
  try {
    const JsonData = await fetch("venueData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await JsonData.json();
    const venueData = data[0].table.map((venue) => ({
      ...venue,
      photos: setPhotoURLs(venue.photos, venue.nphotos),
    }));
    dispatch({ type: "FETCH-SUCCESS", payload: venueData });
  } catch (error) {
    dispatch({ type: "FETCH-ERROR" });
  } finally {
    dispatch({ type: "FETCH-COMPLETED" });
  }
};

function Venues() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const [state, dispatch] = React.useReducer(stateActions, {
    data: [],
    loading: false,
    isError: false,
    more: true,
    after: 0,
    displayData: [],
  });
  const { control, isFilterOpen, filterParams } = React.useContext(FormContext);
  const { loading, displayData } = state;
  const [element, setElement] = React.useState(null);
  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const observed = entries[0];
        console.log(observed);
        if (observed.isIntersecting) {
          dispatch({ type: "LOAD-MORE" });
        }
      },
      { threshold: 1 }
    )
  );

  React.useEffect(() => {
    console.log("Fetching Data with Parameters : ", filterParams);
    dispatch({ type: "FETCHING-DATA" });
    FetchData(dispatch);
  }, [filterParams]);

  React.useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  if (loading) return <h1>LOADING DATA</h1>;
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
        style={{ minHeight: "100vh" }}
      >
        <ActionBar />
        <VenueList venueData={displayData} loadTracer={setElement} />
      </Container>
    </div>
  );
}

export default () => (
  <FormContextProvider>
    <Venues />
  </FormContextProvider>
);
