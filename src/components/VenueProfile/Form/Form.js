import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: theme.palette.primary.main,
    order: 2,
    padding: "15px",
    borderRadius: "8px",
    maxWidth: "320px",
    minHeight: "410px",
    transform: `translateY(40px)`,
    margin: "auto",
    [theme.breakpoints.up("lg")]: {
      minHeight: "520px",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "12px",
      minHeight: "400px",
      transform: `translateY(30px)`,
    },
    [theme.breakpoints.down("xs")]: {
      order: 3,
    },
  },
  formItem: {
    margin: theme.spacing(1, 0),
  },
}));

export default function Form({ smDown }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.form}
    >
      <form style={{ display: "contents" }}>
        <TextField
          name='eventDate'
          variant='outlined'
          required
          fullWidth
          id='eventDate'
          label='Event Date'
          InputLabelProps={{ shrink: true }}
          type='date'
          color='secondary'
          size={smDown ? "small" : "medium"}
          className={classes.formItem}
        />
        <TextField
          autoComplete='fname'
          name='firstName'
          variant='outlined'
          required
          fullWidth
          id='firstName'
          label='First Name'
          color='secondary'
          size={smDown ? "small" : "medium"}
          className={classes.formItem}
        />
        <TextField
          variant='outlined'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          color='secondary'
          size={smDown ? "small" : "medium"}
          className={classes.formItem}
        />
        <TextField
          name='phoneNumber'
          variant='outlined'
          required
          fullWidth
          id='phoneNumber'
          label='Phone Number'
          color='secondary'
          size={smDown ? "small" : "medium"}
          className={classes.formItem}
        />
        <Button variant='outlined' size='small'>
          Call Me
        </Button>
      </form>
    </Grid>
  );
}
