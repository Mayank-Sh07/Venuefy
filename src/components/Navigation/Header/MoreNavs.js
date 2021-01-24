import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BackDrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import TestimonialIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  moreBtn: {
    transform: `translateY(-5px)`,
  },
}));

const actions = [{ icon: <TestimonialIcon />, name: "testimonials" }];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BackDrop open={open} />
      <SpeedDial
        ariaLabel='SpeedDial tooltip example'
        icon={<SpeedDialIcon />}
        className={classes.moreBtn}
        FabProps={{ color: "secondary", size: "small" }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              history.push(action.name);
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </>
  );
}
