import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";
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

export default function FilterSelect({ control }) {
  const classes = useStyles();

  return (
    <div className={classes.selectContainer}>
      <FormControl
        size='small'
        variant='outlined'
        classes={{ root: classes.formControl }}
      >
        <InputLabel className={classes.labelProps}>Location</InputLabel>
        <Controller
          as={
            <Select
              classes={{ root: classes.selectRoot }}
              inputProps={{
                style: { borderRadius: "2em" },
              }}
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
  );
}
