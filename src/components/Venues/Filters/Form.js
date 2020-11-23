import React, { memo } from "react";
import { FormContext } from "./FormContext";
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

const locations = ["Kolkata", "Chennai", "Delhi", "Allahabad"];

const sliderMarks = [
  { value: 1, label: "50" },
  { value: 2, label: "100" },
  { value: 3, label: "200" },
  { value: 4, label: "300" },
  { value: 5, label: "500" },
  { value: 6, label: "1000" },
];

const capacity = {
  0: "0",
  1: "50",
  2: "100",
  3: "200",
  4: "300",
  5: "500",
  6: "1000",
  7: "1000+",
};

const listData = [
  {
    header: "Venue Type",
    checkboxes: [
      { label: "Banquet Halls", name: "bnqt_hl" },
      { label: "Resorts", name: "rsrt" },
      { label: "Hotel Banquets", name: "hotl_bnqt" },
    ],
  },
  {
    header: "Venue Features",
    checkboxes: [
      { label: "Only Veg", name: "veg_only" },
      { label: "Multiple Event Areas", name: "mea" },
      { label: "Venuefied", name: "venuefied" },
      { label: "Air Conditioning", name: "air_cond" },
      { label: "Changing Rooms", name: "chng_rms" },
      {
        label: "Space Type",
        name: "spc_typ",
        collapsable: true,
        checkboxes: [
          { label: "Pool Side", name: "st_1" },
          { label: "Rooftop", name: "st_2" },
          { label: "Open Space", name: "st_3" },
          { label: "Indoor", name: "st_4" },
          { label: "Lawn", name: "st_5" },
        ],
      },
      {
        label: "Parking",
        name: "prk_typ",
        collapsable: true,
        checkboxes: [
          { label: "Valet Parking", name: "pt_valet" },
          { label: "upto 20 vehicles", name: "pt_1" },
          { label: "20-50 vehicles", name: "pt_2" },
          { label: "50-100 vehicles", name: "pt_3" },
          { label: "100-500 vehicles", name: "pt_4" },
          { label: "500+ vehicles", name: "pt_5" },
        ],
      },
      {
        label: "Catering",
        name: "cat_typ",
        collapsable: true,
        checkboxes: [
          { label: "Inhouse Catering", name: "cat_1" },
          { label: "Outside Catering", name: "cat_2" },
        ],
      },
      {
        label: "Decoration",
        name: "dec_typ",
        collapsable: true,
        checkboxes: [
          { label: "Inhouse Decoration", name: "dec_1" },
          { label: "Outside Decoration", name: "dec_2" },
        ],
      },
      {
        label: "Permissions",
        name: "perm_typ",
        collapsable: true,
        checkboxes: [
          { label: "Late Night Music", name: "perm_1" },
          { label: "Late Night Wedding", name: "perm_2" },
          { label: "Barat Allowed", name: "perm_3" },
          { label: "Hawan Allowed", name: "perm_4" },
          { label: "Fire-Crackers Allowed", name: "perm_5" },
          { label: "Multiple Wedding", name: "perm_6" },
        ],
      },
    ],
  },
];

function Form() {
  const classes = useStyles();
  const {
    control,
    closeFilter,
    handleSelect,
    handleCheckbox,
    handleReset,
    handleSubmit,
  } = React.useContext(FormContext);

  console.log("FORM");

  return (
    <form noValidate className={classes.filterForm}>
      <div className={classes.drawerHeader}>
        <Button
          variant='outlined'
          color='secondary'
          fullWidth
          onClick={handleSubmit}
        >
          Apply
        </Button>
        <IconButton
          size='small'
          classes={{ label: classes.iconButtonLabel }}
          style={{ backgroundColor: "transparent" }}
          className={classes.iconButton}
          onClick={handleReset}
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
          onClick={closeFilter}
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
            defaultValue={false}
            control={control}
            as={
              <Select
                classes={{ root: classes.selectRoot }}
                inputProps={{ style: { borderRadius: "2em" } }}
                onClick={handleSelect}
              >
                <MenuItem value={false}>Unspecified</MenuItem>
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
            defaultValue={[0, 4]}
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
                marks={sliderMarks}
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
                        key={`collapse-${box.label}`}
                        checkboxes={box.checkboxes}
                        name={box.label}
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
                                    onChange={(e) => {
                                      props.onChange(e.target.checked);
                                      handleCheckbox(e, box);
                                    }}
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

export default memo(Form);
