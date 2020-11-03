import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { Scrollbars } from "react-custom-scrollbars";
// import axios from "axios";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Drawer,
  Grid,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Slider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
  ListSubheader,
  Hidden,
  Fab,
  Chip,
  Paper,
} from "@material-ui/core";
import { Delete, ChevronLeft, FilterList } from "@material-ui/icons";
import "./selectOverrides.css";

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
        duration: 225,
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
    overflowY: "hidden",
    overflowX: "scroll",
    [theme.breakpoints.only("xs")]: {
      top: "0px",
    },
  },
  actionBar: {
    backgroundColor: "brown",
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
  },
  tag: {
    margin: theme.spacing(0.5),
  },
  filterForm: {
    height: "inherit",
  },
  drawerHeader: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  iconButton: {
    marginLeft: "6px",
  },
  iconButtonLabel: {
    display: "flex",
    flexDirection: "column",
    minWidth: "36px",
    fontSize: "0.5em",
  },
  selectFormControl: {
    minWidth: 220,
    borderRadius: "2em",
    margin: "15px 0px 25px 10px",
  },
  selectLabel: {
    color: "#FFFFFF !important",
  },
  selectRoot: {
    borderRadius: "2em",
    "&:focus": {
      borderRadius: "2em",
    },
  },
  sliderRoot: {
    width: 220,
    padding: "10px 0px 10px 15px",
  },
  listHeader: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    fontSize: "18px",
  },
  listIcon: {
    minWidth: "0px",
    paddingLeft: "10px",
  },
  listUl: {
    padding: "0px",
  },
}));

const tags = [
  { key: uuid(), label: "test1" },
  { key: uuid(), label: "test2" },
  { key: uuid(), label: "test3" },
  { key: uuid(), label: "test4" },
  { key: uuid(), label: "test5" },
  { key: uuid(), label: "test1" },
  { key: uuid(), label: "test2" },
  { key: uuid(), label: "test3" },
  { key: uuid(), label: "test4" },
  { key: uuid(), label: "test5" },
  { key: uuid(), label: "test1" },
  { key: uuid(), label: "test2" },
  { key: uuid(), label: "test3" },
  { key: uuid(), label: "test4" },
  { key: uuid(), label: "test5" },
  { key: uuid(), label: "test1" },
  { key: uuid(), label: "test2" },
  { key: uuid(), label: "test3" },
  { key: uuid(), label: "test4" },
  { key: uuid(), label: "test5" },
];

const selectMarks = [
  {
    value: 1,
    label: "50",
  },
  {
    value: 2,
    label: "100",
  },
  {
    value: 3,
    label: "200",
  },
  {
    value: 4,
    label: "300",
  },
  {
    value: 5,
    label: "500",
  },
  {
    value: 6,
    label: "1000",
  },
  {
    value: 7,
    label: "1000+",
  },
];

const capacity = (val) => {
  switch (val) {
    case 0:
      return <small style={{ fontSize: "0.7em" }}>0</small>;
    case 1:
      return <small style={{ fontSize: "0.7em" }}>50</small>;
    case 2:
      return <small style={{ fontSize: "0.7em" }}>100</small>;
    case 3:
      return <small style={{ fontSize: "0.7em" }}>200</small>;
    case 4:
      return <small style={{ fontSize: "0.7em" }}>300</small>;
    case 5:
      return <small style={{ fontSize: "0.7em" }}>500</small>;
    case 6:
      return <small style={{ fontSize: "0.7em" }}>1000</small>;
    default:
      return <small style={{ fontSize: "0.7em" }}>1000+</small>;
  }
};

const listData = [
  {
    header: "Venue Type",
    checkboxes: [
      { label: "Banquet Hall", name: "Banquet_Hall" },
      { label: "Pub", name: "Pubs" },
      { label: "Resort", name: "Resorts" },
      { label: "Hotel Banquet", name: "Hotel_Banquet" },
      { label: "Rooftop", name: "Rooftop" },
      { label: "Open Space", name: "Open_Area" },
    ],
  },
  {
    header: "Venue Features",
    checkboxes: [
      { label: "Only Veg", name: "Only_veg" },
      { label: "Pool side", name: "Pool_side" },
      { label: "Roof Top", name: "Roof_top" },
      { label: "Open Space", name: "Open_Space" },
      { label: "Indoor", name: "Indoor" },
      { label: "Lawn", name: "Lawn" },
      { label: "Parking Available", name: "Parking_available" },
      { label: "Air Conditioner", name: "Air_conditioner" },
      { label: "Alcohol", name: "Alcohol" },
    ],
  },
];

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
  const { handleSubmit, control, reset } = useForm();
  const [filterOpen, setFilterOpen] = useState(false);
  const [fetchCount, triggerFetch] = useState(1);
  const [venueData, setVenueData] = useState([]);
  const [tagData, setTagData] = React.useState(tags);

  useEffect(() => {
    console.log(`data fetched ${fetchCount} times`);
    getData(setVenueData);
  }, [fetchCount]);

  const deleteTag = (tagToDelete) => () => {
    setTagData((tags) => tags.filter((tag) => tag.key !== tagToDelete.key));
  };

  const filterForm = (
    <form
      noValidate
      className={classes.filterForm}
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
        triggerFetch(fetchCount + 1);
      })}
    >
      <div className={classes.drawerHeader}>
        <Button variant='outlined' color='secondary' fullWidth type='submit'>
          Apply
        </Button>
        <IconButton
          classes={{ label: classes.iconButtonLabel }}
          className={classes.iconButton}
        >
          <Delete />
          <div>Clear All</div>
        </IconButton>
        <IconButton
          classes={{ label: classes.iconButtonLabel }}
          className={classes.iconButton}
          onClick={() => setFilterOpen(false)}
        >
          <ChevronLeft />
          <div>Hide</div>
        </IconButton>
      </div>
      <Scrollbars width={240}>
        <div id='FILTER--SELECT'>
          <FormControl
            size='small'
            variant='outlined'
            classes={{ root: classes.selectFormControl }}
          >
            <InputLabel className={classes.selectLabel}>Location</InputLabel>
            <Controller
              as={
                <Select
                  classes={{ root: classes.selectRoot }}
                  inputProps={{ style: { borderRadius: "2em" } }}
                >
                  <MenuItem value={"Delhi"}>Delhi</MenuItem>
                  <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
                </Select>
              }
              name='location'
              control={control}
            />
          </FormControl>
        </div>
        <div id='FILTER--SLIDER' className={classes.sliderRoot}>
          <Typography>Guest Capacity</Typography>
          <Controller
            name='Guest capacity'
            control={control}
            defaultValue={[0, 7]}
            render={(props) => (
              <Slider
                {...props}
                onChange={(_, value) => {
                  props.onChange(value);
                }}
                valueLabelDisplay='auto'
                color='secondary'
                valueLabelFormat={(val) => capacity(val)}
                step={1}
                max={7}
                marks={selectMarks}
                classes={{ markLabel: classes.iconButtonLabel }}
              />
            )}
          />
        </div>
        <div key='FILTER--LIST'>
          <List subheader={<li />}>
            {listData.map((section) => (
              <li
                key={`list-head-${section.header}`}
                className={classes.listSection}
              >
                <ul className={classes.listUl}>
                  <ListSubheader className={classes.listHeader}>
                    {section.header}
                  </ListSubheader>
                  {section.checkboxes.map((checkbox) => (
                    <ListItem
                      key={`item-${section.header}-${checkbox.name}`}
                      dense
                      button
                    >
                      <ListItemIcon classes={{ root: classes.listIcon }}>
                        <Controller
                          name={checkbox.name}
                          control={control}
                          render={(props) => (
                            <Checkbox
                              onChange={(e) => props.onChange(e.target.checked)}
                              checked={props.value}
                              disableRipple
                            />
                          )}
                        />
                      </ListItemIcon>
                      <ListItemText primary={checkbox.label} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </div>
      </Scrollbars>
    </form>
  );

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
        {filterForm}
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
          <Hidden smDown>
            <Grid item xs={1}>
              <Button
                variant='contained'
                onClick={() => setFilterOpen(true)}
                fullWidth
              >
                Filter
              </Button>
            </Grid>
          </Hidden>
          <Grid item xs={11}>
            <div style={{ width: "100%", height: "45px", overflowY: "hidden" }}>
              <Paper
                component='ul'
                className={clsx(classes.tagContainer)}
                style={{ paddingBottom: "30px" }}
              >
                {tagData.map((data) => {
                  return (
                    <li key={data.key}>
                      <Chip
                        label={data.label}
                        onDelete={deleteTag(data)}
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
