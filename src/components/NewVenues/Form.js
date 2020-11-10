import React from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Delete from "@material-ui/icons/Delete";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import CollapsableList from "./CollapsableList";
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
      { label: "Banquet Halls", name: "Banquet Hall" },
      { label: "Resorts", name: "Resorts" },
      {
        label: "Other Venues",
        name: "Other",
        collapsable: true,
        subs: [
          { label: "Banks", name: "mlem" },
          { label: "News", name: "nyan" },
        ],
      },
      { label: "Hotel Banquets", name: "Hotel Banquet" },
      { label: "Rooftop Venues", name: "Rooftop" },
    ],
    reset: {
      "Banquet Hall": false,
      Resorts: false,
      "Hotel Banquet": false,
      Rooftop: false,
    },
  },
  // {
  //   header: "Venue Features",
  //   checkboxes: [
  //     { label: "Multiple Event Areas", name: "Banquet Hall" },
  //     { label: "Resorts", name: "Resorts" },
  //     { label: "Hotel Banquets", name: "Hotel Banquet" },
  //     { label: "Rooftop Venues", name: "Rooftop" },
  //   ],
  //   reset: {
  //     "Banquet Hall": false,
  //     "Resorts": false,
  //     "Hotel Banquet": false,
  //     "Rooftop": false,
  //   },
  // },
];

export default function Form({ dispatch }) {
  const classes = useStyles();
  const { control, getValues, reset, handleSubmit, setValue } = useForm();

  const handleCheckBox = (e, props, label) => {
    props.onChange(e.target.checked);
    if (e.target.checked) {
      dispatch({
        type: "CHECKED",
        payload: {
          label: label,
          resetVal: () => {
            setValue(props.name, false);
          },
        },
      });
    } else dispatch({ type: "UNCHECKED", payload: label });
  };

  const handleSelect = (e) => {
    if (!!e.target && !!e.target.value) {
      dispatch({
        type: "SELECTED",
        payload: {
          type: e.target.name,
          label: e.target.value,
          resetVal: () => {
            setValue(e.target.name, "Unspecified");
          },
        },
      });
    }
  };

  return (
    <form
      noValidate
      className={classes.filterForm}
      onSubmit={handleSubmit((data) =>
        dispatch({ type: "SUBMIT", payload: data })
      )}
    >
      <div className={classes.drawerHeader}>
        <Button variant='outlined' color='secondary' fullWidth type='submit'>
          Apply
        </Button>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          className={classes.iconButton}
          //   onClick={() => reset({})}
          //   type={"reset"}
        >
          <Delete />
          <div>Clear All</div>
        </IconButton>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          className={classes.iconButton}
          onClick={() => dispatch({ type: "CLOSE_FILTER" })}
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
              defaultValue={"Unspecified"}
              control={control}
              as={
                <Select
                  classes={{ root: classes.selectRoot }}
                  inputProps={{ style: { borderRadius: "2em" } }}
                  onClick={(e) => handleSelect(e)}
                >
                  <MenuItem value={"Unspecified"}>Unspecified</MenuItem>
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
                        //   let vals = getValues();
                        //   let resVals = section.reset;
                        //   reset({ ...vals, ...resVals });
                      }}
                    >
                      <Delete />
                      <div>Clear</div>
                    </IconButton>
                  </ListSubheader>
                  {section.checkboxes.map((checkbox) => {
                    if (checkbox.collapsable === true) {
                      return (
                        <CollapsableList
                          data={checkbox.subs}
                          name={checkbox.label}
                          control={control}
                          handleCheckBox={handleCheckBox}
                        />
                      );
                    } else
                      return (
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
                                        handleCheckBox(e, props, checkbox.label)
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
                      );
                  })}
                </ul>
              </li>
            ))}
          </List>
        </div>
      </div>
    </form>
  );
}
