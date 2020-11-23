import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://www.wdievents.in/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component='main'>
      <CssBaseline />
      <Grid container justify='space-evenly' alignItems='center'>
        <Grid
          item
          xs={12}
          sm={4}
          component='paper'
          style={{ backgroundColor: "red" }}
        >
          L
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          component='paper'
          style={{ backgroundColor: "blue" }}
        >
          O
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          component='paper'
          style={{ backgroundColor: "green" }}
        >
          L
        </Grid>
      </Grid>
    </Container>
  );
}

// <Box mt={5}>
// <Copyright />
// </Box>
