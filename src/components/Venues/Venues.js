import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Drawer,
  Grid,
  Button,
  Hidden,
  Fab,
  Chip,
  Paper,
} from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import FilterForm from "./Filter/FilterForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  filterFloat: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(8),
      right: theme.spacing(1),
    },
  },
  onFilterOpen: {
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create(["padding"], {
        easing: theme.transitions.easing.easeOut,
        duration: 200,
      }),
      paddingLeft: "250px",
    },
  },
  onFilterClose: {
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create(["padding"], {
        easing: theme.transitions.easing.easeOut,
        duration: 195,
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
  actionBar: {
    minHeight: "64px",
    marginTop: "2px",
    padding: "0px 15px",
  },
  tagContainer: {
    display: "flex",
    flexGrow: 1,
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    minHeight: "40px",
    overflow: "auto",
    backgroundColor: "inherit",
  },
  tag: {
    margin: theme.spacing(0.5),
  },
}));

const getData = (setData) => {
  fetch("venueData.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(function (response) {
    response.json().then((data) => setData(data));
  });
};

export default function Venues() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const { handleSubmit, control, reset, getValues } = useForm();
  const [filterOpen, setFilterOpen] = useState(() =>
    Boolean(window.innerWidth > 1000)
  );
  const [fetchCount, triggerFetch] = useState(1);
  const [venueData, setVenueData] = useState([]);
  const [tagData, setTagData] = React.useState([]);

  useEffect(() => {
    console.log(`data fetched ${fetchCount} times`);
    getData(setVenueData);
  }, [fetchCount]);

  // const deleteTag = (tagToDelete) => () => {
  //   setTagData((tags) => tags.filter((tag) => tag.key !== tagToDelete.key));
  // };

  const applyFilters = handleSubmit((data) => {
    console.log(data);
    setTagData([]);
    Object.keys(data).forEach(
      (key) => (data[key] === false || data[key] === "") && delete data[key]
    );
    triggerFetch(fetchCount + 1);
    setTagData(
      Object.keys(data).map((filterName) => ({
        key: uuid(),
        label: filterName,
      }))
    );
  });

  if (venueData === [] || venueData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor='left'
        open={filterOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <FilterForm
          control={control}
          setFilterOpen={setFilterOpen}
          handleSubmit={applyFilters}
          reset={reset}
          getValues={getValues}
        />
      </Drawer>
      <Container
        disableGutters
        maxWidth={false}
        style={{ height: "100vh" }}
        className={clsx({
          [classes.onFilterOpen]: filterOpen,
          [classes.onFilterClose]: !filterOpen,
        })}
      >
        <Hidden mdUp>
          <Fab
            color='secondary'
            size='large'
            className={classes.filterFloat}
            onClick={() => setFilterOpen(true)}
          >
            <FilterList />
          </Fab>
        </Hidden>
        <Grid container alignItems='center' className={classes.actionBar}>
          {!filterOpen && (
            <Hidden smDown>
              <Grid item xs={0} sm={0} md={1}>
                <Button
                  variant='contained'
                  onClick={() => setFilterOpen(true)}
                  fullWidth
                >
                  Filter
                </Button>
              </Grid>
            </Hidden>
          )}
          <Grid item xs={12} sm={12} md={11}>
            <div style={{ width: "100%", height: "45px", overflowY: "hidden" }}>
              <Paper
                component='ul'
                className={classes.tagContainer}
                style={{ paddingBottom: "30px" }}
              >
                {tagData.map((data) => {
                  return (
                    <li key={data.key}>
                      <Chip
                        label={data.label}
                        // onDelete={deleteTag(data)}
                        className={classes.tag}
                      />
                    </li>
                  );
                })}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
