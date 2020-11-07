import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import LocationCity from "@material-ui/icons/LocationCity";
import MyLocation from "@material-ui/icons/MyLocation";
import Search from "@material-ui/icons/Search";
import { v4 as uuid } from "uuid";

// tag-container(height) => md:"400px", lg:"500px"

const useStyles = makeStyles((theme) => ({
  taglineContainer: {
    backgroundImage: `url("imgs/header.jpg")`,
    position: "absolute",
    top: "120px",
    height: "500px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
  },
  tag: {
    textShadow: `0 0 4px black`,
    filter: `progid: DXImageTransform.Microsoft.Glow(Color=#ffffff,Strength=1)`,
    fontWeight: "600",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2em",
    },
  },
  topBar: {
    padding: "10px",
    borderRadius: "2em",
    backgroundColor: theme.palette.primary.main,
    width: "80%",
    maxWidth: "668px",
    margin: "100px auto 0px",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
  },
  topBarGC: {
    padding: "0px 20px",
  },
  topBarGI: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#FFFFFF",
    margin: "0px 14px",
    [theme.breakpoints.only("xs")]: {
      margin: "0px 4px",
    },
  },
  tagIcon: {
    marginleft: "2px",
    [theme.breakpoints.only("xs")]: {
      padding: "4px",
    },
  },
}));

const cities = [
  "Andhra Pradesh",
  "Arunachal Pradesh ",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Lakshadweep",
  "National Capital Territory of Delhi",
  "Puducherry",
];

function HomeTagSection({ location }) {
  const classes = useStyles();
  const refreshPage = (event) => {
    event.preventDefault();
    window.location.reload(false);
  };
  return (
    <Container
      disableGutters
      className={classes.taglineContainer}
      maxWidth={false}
      aria-label='ABSOLUTE CONTAINER TOP'
    >
      <Typography variant='h2' className={classes.tag}>
        #Venuefy your venue
      </Typography>
      <Paper className={classes.topBar}>
        <Hidden xsDown>
          <form noValidate autoComplete='off'>
            <Grid
              container
              justify='space-evenly'
              alignItems='center'
              className={classes.topBarGC}
            >
              <Grid item xs={5} className={classes.topBarGI}>
                <TextField
                  id='city-inp-field'
                  select
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationCity />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  defaultValue='detected-city'
                >
                  <MenuItem value='detected-city'>{location.city}</MenuItem>
                  {cities.map((city) => (
                    <MenuItem key={uuid()} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </TextField>
                <Divider
                  variant='middle'
                  orientation='vertical'
                  flexItem
                  component='div'
                  className={classes.divider}
                />
              </Grid>
              {/* <Grid item xs={5} sm={5} md={5} className={classes.topBarGI}>
                <TextField
                  id='area-inp-field'
                  select
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Map />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  defaultValue='detected-area'
                >
                  <MenuItem value='detected-area'>{location.area}</MenuItem>
                  {cities.map((city) => (
                    <MenuItem key={uuid()} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </TextField>
                <Divider
                  variant='middle'
                  orientation='vertical'
                  flexItem
                  component='div'
                  className={classes.divider}
                />
              </Grid> */}
              <Grid item xs={7} className={classes.topBarGI}>
                <Button fullWidth startIcon={<Search />}>
                  SEARCH
                </Button>
                <Button
                  startIcon={<MyLocation />}
                  style={{ marginleft: "16px" }}
                  onClick={refreshPage}
                  fullWidth
                >
                  NEARBY
                </Button>
              </Grid>
            </Grid>
          </form>
        </Hidden>
      </Paper>
    </Container>
  );
}

export default HomeTagSection;
