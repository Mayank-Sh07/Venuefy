import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";
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
}));

export default function CollapsableList({
  data,
  name,
  control,
  handleCheckBox,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {data.map((item) => (
            <ListItem key={`item-${item.name}`} dense>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <Controller
                  name={item.name}
                  control={control}
                  defaultValue={false}
                  render={(props) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => handleCheckBox(e, props, item.label)}
                          checked={props.value}
                          disableRipple
                        />
                      }
                      label={item.label}
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
