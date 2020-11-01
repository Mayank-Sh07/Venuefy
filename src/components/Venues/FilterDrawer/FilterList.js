import React from "react";
import { Controller } from "react-hook-form";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
  ListSubheader,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    maxHeight: 300,
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

export default function FilterList({ control }) {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {listData.map((section) => (
        <li key={`list-head-${section.header}`} className={classes.listSection}>
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
  );
}
