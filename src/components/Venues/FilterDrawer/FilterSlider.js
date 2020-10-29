import React from "react";
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

export default function FilterSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id='discrete-slider-restrict'>Guest Capacity</Typography>
      <Slider
        defaultValue={20}
        color='secondary'
        valueLabelFormat={"upto"}
        step={null}
        valueLabelDisplay='auto'
        marks={marks}
        classes={{ markLabel: classes.tinyLabel }}
      />
    </div>
  );
}
