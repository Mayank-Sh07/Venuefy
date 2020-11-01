import React, { useState } from "react";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import { Scrollbars } from "react-custom-scrollbars";
import {
  makeStyles,
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
} from "@material-ui/core";
import { Delete, ChevronLeft } from "@material-ui/icons";
import "./selectOverrides.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
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
    overflowX: "hidden",
    overflowY: "auto",
  },
  tagContainer: {
    backgroundColor: "brown",
    minHeight: "64px",
    marginTop: "2px",
  },
  drawerHeader: {
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
  listRoot: {
    width: "100%",
  },
  listHeader: {
    color: theme.palette.secondary.main,
    fontSize: "18px",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  liIcon: {
    minWidth: "0px",
    paddingLeft: "10px",
  },
}));

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
      { label: "Banquet Hall", name: "Banquet Hall" },
      { label: "Pub", name: "Pubs" },
      { label: "Resort", name: "Resorts" },
      { label: "Hotel Banquet", name: "Hotel Banquet" },
      { label: "Rooftop", name: "Rooftop" },
      { label: "Open Space", name: "Open Area" },
    ],
  },
  {
    header: "Venue Features",
    checkboxes: [
      { label: "Banquet Hall", name: "Banquet Hall2" },
      { label: "Pub", name: "Pubs2" },
      { label: "Resort", name: "Resorts2" },
      { label: "Hotel Banquet", name: "Hotel Banquet2" },
      { label: "Rooftop", name: "Rooftop2" },
      { label: "Open Space", name: "Open Area2" },
    ],
  },
];

export default function Venues() {
  const classes = useStyles();
  const { handleSubmit, control, reset } = useForm();
  const [filterOpen, setFilterOpen] = useState(false);

  const filterForm = (
    <form
      noValidate
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
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
          name='guestCapacity'
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
        <List className={classes.listRoot} subheader={<li />}>
          {listData.map((section) => (
            <li
              key={`list-head-${section.header}`}
              className={classes.listSection}
            >
              <ul className={classes.ul}>
                <ListSubheader className={classes.listHeader}>
                  {section.header}
                </ListSubheader>
                {section.checkboxes.map((checkbox) => (
                  <ListItem
                    key={`item-${section.header}-${checkbox.name}`}
                    dense
                    button
                  >
                    <ListItemIcon classes={{ root: classes.liIcon }}>
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
    </form>
  );

  return (
    <div className={classes.root}>
      <Drawer
        variant='persistent'
        anchor='left'
        open={filterOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <Scrollbars width={240}>{filterForm}</Scrollbars>
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
        <Grid container alignItems='center' className={classes.tagContainer}>
          <Grid item>
            <Button variant='contained' onClick={() => setFilterOpen(true)}>
              Filter
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
