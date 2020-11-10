import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    backgroundColor: theme.palette.secondary.light,
  },
  serviceCardContainer: {
    maxWidth: theme.breakpoints.width("lg"),
    margin: "auto",
    [theme.breakpoints.only("xs")]: {
      padding: "0px 30px",
    },
  },
  serviceCard: {
    [theme.breakpoints.only("xs")]: {
      margin: "15px 10px",
    },

    [theme.breakpoints.only("sm")]: {
      margin: "10px",
    },

    [theme.breakpoints.only("md")]: {
      margin: "15px 30px",
    },

    [theme.breakpoints.up("lg")]: {
      margin: "20px 50px",
    },
  },
  rounded: {
    borderRadius: "3em",
  },
  btnRounded: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "2em",
    padding: "8px 12px",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
  sectionHead: {
    marginTop: "30px",
    padding: "20px 20px 20px 75px",
    fontWeight: 600,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      padding: "15px 0px",
    },
  },
}));

const serviceData = [
  { image: image1, serviceName: "Venue Services" },
  {
    image: image2,
    serviceName: "Non-Venue Services",
  },
  { image: image3, serviceName: "Premium Services" },
];

function HomeServices() {
  const classes = useStyles();
  return (
    <Container
      maxWidth={null}
      className={classes.serviceContainer}
      disableGutters
    >
      <Grid
        container
        alignItems='center'
        justify='space-around'
        className={classes.serviceCardContainer}
      >
        <Grid item xs={12}>
          <Typography variant='h2' className={classes.sectionHead}>
            Venuefy Services
          </Typography>
        </Grid>
        {serviceData.map((service) => (
          <Grid item xs={12} sm={4}>
            <Card className={clsx(classes.rounded, classes.serviceCard)}>
              <CardMedia
                component='img'
                alt='service image'
                height='240'
                image={service.image}
                className={classes.rounded}
              />
              <CardContent style={{ paddingBottom: "0px" }}>
                <Typography gutterBottom variant='h5' align='center'>
                  {service.serviceName}
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.btnRounded}>Explore</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeServices;
