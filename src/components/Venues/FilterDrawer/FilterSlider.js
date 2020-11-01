import React from "react";
import { Controller } from "react-hook-form";
import { makeStyles, Typography, Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 210,
    padding: "10px 0px 10px 15px",
  },
  tinyLabel: {
    fontSize: "10px",
  },
});

const marks = [
  {
    value: 0,
    label: "50",
  },
  {
    value: 20,
    label: "100",
  },
  {
    value: 40,
    label: "200",
  },
  {
    value: 60,
    label: "300",
  },
  {
    value: 80,
    label: "500",
  },
  {
    value: 100,
    label: "1000+",
  },
];

export default function FilterSlider({ control }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography id='discrete-slider-restrict'>Guest Capacity</Typography>
      <Controller
        name='guest capacity'
        control={control}
        defaultValue={20}
        render={(props) => (
          <Slider
            {...props}
            onChange={(_, value) => {
              props.onChange(value);
            }}
            valueLabelDisplay='auto'
            color='secondary'
            valueLabelFormat={"upto"}
            step={20}
            marks={marks}
            classes={{ markLabel: classes.tinyLabel }}
          />
        )}
      />
    </div>
  );
}
