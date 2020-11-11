import React from "react";
import { Controller } from "react-hook-form";
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
import {
  selectMarks,
  capacity,
  listData,
  locations,
  resetParams,
} from "./formUtils";
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
    [theme.breakpoints.only("xs")]: {
      height: `calc(100% - 40px)`,
    },
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

export default function Form({
  dispatch,
  control,
  getValues,
  setValue,
  reset,
}) {
  const classes = useStyles();

  const handleCheckBox = (e, props, label) => {
    props.onChange(e.target.checked);
    if (e.target.checked) {
      dispatch({
        type: "CHECK-CHECKBOX",
        payload: {
          label: label,
          resetVal: () => {
            setValue(props.name, false);
          },
        },
      });
    } else dispatch({ type: "UNCHECK-CHECKBOX", payload: label });
  };

  const handleSelect = (e) => {
    if (!!e.target && !!e.target.value) {
      dispatch({
        type: "FILTER-SELECTED",
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

  const resetAll = () => {
    reset(resetParams);
    dispatch({ type: "RESET" });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT", payload: getValues() });
  };

  return (
    <form noValidate className={classes.filterForm}>
      <div className={classes.drawerHeader}>
        <Button
          variant='outlined'
          color='secondary'
          fullWidth
          onClick={() => handleSubmit()}
        >
          Apply
        </Button>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          style={{ backgroundColor: "transparent" }}
          className={classes.iconButton}
          onClick={() => resetAll()}
          type='reset'
        >
          <Delete />
          <div>Clear All</div>
        </IconButton>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          style={{ backgroundColor: "transparent" }}
          className={classes.iconButton}
          onClick={() => dispatch({ type: "CLOSE-FILTER" })}
        >
          <ChevronLeft />
          <div>Hide</div>
        </IconButton>
      </div>
      <div className={classes.hideScrollbar}>
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
                <MenuItem value={"Unspecified"} key='unspecified'>
                  Unspecified
                </MenuItem>
                {locations.map((location) => (
                  <MenuItem value={location} key={`loc-${location}`}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            }
          />
        </FormControl>
        <div className={classes.sliderRoot}>
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
                valueLabelFormat={(val) => (
                  <p style={{ fontSize: "0.7em" }}>{capacity[val]}</p>
                )}
                step={1}
                max={7}
                marks={selectMarks}
                classes={{ markLabel: classes.sliderMarkLabel }}
              />
            )}
          />
        </div>
        <List subheader={<li />} style={{ maxWidth: 248 }}>
          {listData.map((section) => (
            <li key={`li-${section.header}`} className={classes.listSection}>
              <ul className={classes.listUl}>
                <ListSubheader
                  key={`li-head-${section.header}`}
                  className={classes.listHeader}
                >
                  {section.header}
                </ListSubheader>
                {section.checkboxes.map((box) => {
                  if (box.collapsable === true) {
                    return (
                      <CollapsableList
                        checkboxes={box.checkboxes}
                        name={box.label}
                        control={control}
                        handleCheckBox={handleCheckBox}
                      />
                    );
                  } else
                    return (
                      <ListItem key={`item-${box.name}`} dense>
                        <ListItemIcon classes={{ root: classes.listIcon }}>
                          <Controller
                            name={box.name}
                            control={control}
                            defaultValue={false}
                            render={(props) => (
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    onChange={(e) =>
                                      handleCheckBox(e, props, box.label)
                                    }
                                    checked={props.value}
                                    disableRipple
                                  />
                                }
                                label={box.label}
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
    </form>
  );
}
