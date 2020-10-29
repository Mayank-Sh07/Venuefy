import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./overrides.css";

const useStyles = makeStyles((theme) => ({
  selectContainer: {
    margin: "15px 0px 25px 10px",
  },
  formControl: {
    minWidth: 210,
    borderRadius: "2em",
  },
  labelProps: {
    color: "#FFFFFF !important",
  },
  selectRoot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "2em",
    "&:focus": {
      borderRadius: "2em",
    },
  },
}));

export default function FilterSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.selectContainer}>
      <FormControl
        size='small'
        variant='outlined'
        classes={{ root: classes.formControl }}
      >
        <InputLabel className={classes.labelProps}>Age</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={age}
          onChange={handleChange}
          label='Age'
          classes={{ root: classes.selectRoot }}
          inputProps={{
            style: { borderRadius: "2em" },
          }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
