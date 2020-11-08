import React, { useState } from "react";
import { UserContext } from "../../../UserContext";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import LocationCity from "@material-ui/icons/LocationCity";
import MyLocation from "@material-ui/icons/MyLocation";
import Search from "@material-ui/icons/Search";
import background from "./HomeTagBg.jpg";

const useStyles = makeStyles((theme) => ({
  taglineContainer: {
    backgroundImage: `url(${background})`,
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
    margin: "4px 14px",
    height: "28px",
    width: "1px",
  },
  tagIcon: {
    marginleft: "2px",
    [theme.breakpoints.only("xs")]: {
      padding: "4px",
    },
  },
  linkStyles: {
    textDecoration: "none",
    width: "100%",
  },
}));

const cities = ["Kolkata"];

function HomeTagSection() {
  const classes = useStyles();
  const { location } = React.useContext(UserContext);
  const [selectedCity, setSelectedCity] = useState(null);
  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
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
              onChange={handleSelectChange}
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
            <div className={classes.divider} />
          </Grid>
          <Grid item xs={4} className={classes.topBarGI}>
            <Link
              className={classes.linkStyles}
              to={{
                pathname: "/Venues",
                state: { city: selectedCity },
              }}
            >
              <Button fullWidth startIcon={<Search />}>
                SEARCH
              </Button>
            </Link>
            <div className={classes.divider} />
          </Grid>
          <Grid item xs={3} className={classes.topBarGI}>
            <Link
              className={classes.linkStyles}
              to={{
                pathname: "/Venues",
                state: { city: selectedCity },
              }}
            >
              <Button
                startIcon={<MyLocation />}
                style={{ marginleft: "16px" }}
                fullWidth
              >
                NEARBY
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default HomeTagSection;

// <Grid item xs={5} sm={5} md={5} className={classes.topBarGI}>
//       <TextField
//         id='area-inp-field'
//         select
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position='start'>
//               <Map />
//             </InputAdornment>
//           ),
//         }}
//         fullWidth
//         defaultValue='detected-area'
//       >
//         <MenuItem value='detected-area'>{location.area}</MenuItem>
//         {cities.map((city) => (
//           <MenuItem key={uuid()} value={city}>
//             {city}
//           </MenuItem>
//         ))}
//       </TextField>
//       <Divider
//         variant='middle'
//         orientation='vertical'
//         flexItem
//         component='div'
//         className={classes.divider}
//       />
//     </Grid>
