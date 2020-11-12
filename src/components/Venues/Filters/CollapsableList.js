import React from "react";
import { FormContext } from "./FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";
import { v4 as uuid } from "uuid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(3),
  },
  listIcon: {
    minWidth: "0px",
    paddingLeft: "10px",
  },
}));

export default function CollapsableList({ checkboxes, name }) {
  const { control, handleCheckbox } = React.useContext(FormContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem key={uuid()} button onClick={toggleExpand}>
        <ListItemText primary={name} />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <List component='div' disablePadding className={classes.nested}>
          {checkboxes.map((box) => (
            <ListItem key={`box-${box.name}`} dense>
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
          ))}
        </List>
      </Collapse>
    </>
  );
}
