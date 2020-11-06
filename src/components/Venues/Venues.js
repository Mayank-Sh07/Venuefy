import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import ImageGallery from "react-image-gallery";
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
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FilterList, Favorite } from "@material-ui/icons";
import FilterForm from "./Filter/FilterForm";
import "./image-gallery.scss";

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
  venueContainer: {
    padding: "15px",
  },
  imageCarousel: {
    overflow: "hidden",
  },
  divider: {
    height: "3px",
    backgroundColor: "black",
    width: "100%",
    margin: "8px 0px 16px 0px",
  },
  venueDetails: {
    padding: "0px 10px",
    color: "black",
  },
  iconEmpty: {
    color: `rgba(0,0,0,0.5)`,
  },
}));

const photoSet = (baseURL, size) => {
  baseURL = baseURL.replaceAll("<s>", "/");
  let srcArr = [...Array(size).keys()].map((indx) => ({
    original: baseURL + indx + "%40lb.jpeg",
    thumbnail: baseURL + indx + "%40ps.jpeg",
  }));
  return srcArr;
};

const getData = (setData) => {
  fetch("venueData.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(function (response) {
    response.json().then((data) => {
      data = data[0].table.map((venue) => ({
        ...venue,
        photos: photoSet(venue.photos, venue.nphotos),
      }));
      setData(data);
    });
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
        <Grid container className={classes.venueContainer}>
          {venueData.map((venue) => (
            <>
              <div className={classes.divider} />
              <Grid item xs={12} sm={6} className={classes.imageCarousel}>
                <ImageGallery
                  items={venue.photos}
                  showFullscreenButton={false}
                  showPlayButton={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.venueDetails}>
                <Card
                  elevation={0}
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <CardHeader
                    title={venue.name}
                    subheader={venue.area + ", " + venue.city}
                    subheaderTypographyProps={{ style: { color: "black" } }}
                    action={
                      <IconButton>
                        <Favorite style={{ color: "red" }} />
                      </IconButton>
                    }
                  />
                  <div
                    style={{
                      maxWidth: "80%",
                      margin: "auto",
                      maxHeight: 130,
                      overflow: "hidden",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={9}
                        sm={9}
                        container
                        justify={"space-around"}
                        alignItems={"center"}
                      >
                        {[
                          ...venue.amme,
                          "xyz",
                          "abx",
                          "xae",
                          "lol",
                          "rapq",
                          "faqu",
                        ].map((ammenity) => (
                          <Grid item xs={6} style={{ paddingRight: 10 }}>
                            <Typography variant='subtitle1' gutterBottom noWrap>
                              {ammenity}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sm={3}
                        container
                        justify='center'
                        alignItems='center'
                      >
                        more...
                      </Grid>
                    </Grid>
                  </div>
                  <CardContent
                    style={{
                      maxHeight: 130,
                      paddingBottom: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component='fieldset'
                      mb={1}
                      borderColor='transparent'
                      style={{ display: "flex", paddingLeft: 0 }}
                    >
                      Rating:
                      <Rating
                        name='read-only'
                        value={4}
                        readOnly
                        classes={{ iconEmpty: classes.iconEmpty }}
                      />
                    </Box>
                    <Typography variant={"subtitle1"}>
                      <b>{`Starting from ₹${venue.starting_price}`}</b> per
                      person
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                      }}
                    >
                      <Button color='primary' variant='outlined'>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
