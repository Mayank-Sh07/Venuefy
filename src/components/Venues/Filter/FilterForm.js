import React from "react";
import { Controller } from "react-hook-form";
import {
  makeStyles,
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
  Checkbox,
  ListItemIcon,
  ListSubheader,
  FormControlLabel,
} from "@material-ui/core";
import { Delete, ChevronLeft } from "@material-ui/icons";
import "./cssOverrides.css";

const useStyles = makeStyles((theme) => ({
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
    fontSize: "0.4em",
  },
  hideScrollbar: {
    width: "270px",
    overflowY: "scroll",
    overflowX: "hidden",
    height: `calc(100% - 130px)`,
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
  sliderMarkLabel: {
    fontSize: "0.5rem",
  },
  listHeader: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
  },
  listIcon: {
    minWidth: "0px",
    paddingLeft: "10px",
  },
  listUl: {
    padding: "0px",
  },
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const selectMarks = [
  { value: 1, label: "50" },
  { value: 2, label: "100" },
  { value: 3, label: "200" },
  { value: 4, label: "300" },
  { value: 5, label: "500" },
  { value: 6, label: "1000" },
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
      { label: "Banquet Hall", name: "Banquet Halls" },
      { label: "Resort", name: "Resorts" },
      { label: "Hotel Banquet", name: "Hotel Banquets" },
      { label: "Rooftop", name: "Rooftop" },
      { label: "Open Space", name: "Open Space" },
      { label: "Indoor", name: "Indoor" },
    ],
    reset: {
      "Banquet Halls": false,
      "Hotel Banquets": false,
      Indoor: false,
      "Open Space": false,
      Resorts: false,
      Rooftop: false,
    },
  },
  {
    header: "Venue Features",
    checkboxes: [
      { label: "Only Veg", name: "Only veg" },
      { label: "Pool side", name: "Pool side" },
      { label: "Lawn", name: "Lawn" },
      { label: "Parking Available", name: "Parking Available" },
      { label: "Air Conditioner", name: "AC" },
      { label: "Alcohol", name: "Alcohol" },
    ],
    reset: {
      "Pool side": false,
      Lawn: false,
      "Only veg": false,
      "Parking Available": false,
      AC: false,
      Alcohol: false,
    },
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function FilterForm({
  handleSubmit,
  setFilterOpen,
  control,
  reset,
  getValues,
}) {
  const classes = useStyles();
  return (
    <form noValidate className={classes.filterForm} onSubmit={handleSubmit}>
      <div className={classes.drawerHeader}>
        <Button variant='outlined' color='secondary' fullWidth type='submit'>
          Apply
        </Button>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          className={classes.iconButton}
          onClick={() => reset({})}
          type={"reset"}
        >
          <Delete />
          <div>Clear All</div>
        </IconButton>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          className={classes.iconButton}
          onClick={() => setFilterOpen(false)}
        >
          <ChevronLeft />
          <div>Hide</div>
        </IconButton>
      </div>
      <div className={classes.hideScrollbar}>
        <div id='FILTER--SELECT'>
          <FormControl
            size='small'
            variant='outlined'
            classes={{ root: classes.selectFormControl }}
          >
            <InputLabel className={classes.selectLabel}>Location</InputLabel>
            <Controller
              name='location'
              defaultValue={""}
              control={control}
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
                classes={{ markLabel: classes.sliderMarkLabel }}
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
                    <IconButton
                      size='small'
                      classes={{ label: classes.iconButtonLabel }}
                      className={classes.iconButton}
                      onClick={() => {
                        let vals = getValues();
                        let resVals = section.reset;
                        reset({ ...vals, ...resVals });
                      }}
                    >
                      <Delete />
                      <div>Clear</div>
                    </IconButton>
                  </ListSubheader>
                  {section.checkboxes.map((checkbox) => (
                    <ListItem
                      key={`item-${section.header}-${checkbox.name}`}
                      dense
                    >
                      <ListItemIcon classes={{ root: classes.listIcon }}>
                        <Controller
                          name={checkbox.name}
                          control={control}
                          defaultValue={false}
                          render={(props) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={(e) =>
                                    props.onChange(e.target.checked)
                                  }
                                  checked={props.value}
                                  disableRipple
                                />
                              }
                              label={checkbox.label}
                            ></FormControlLabel>
                          )}
                        />
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </div>
      </div>
    </form>
  );
}
