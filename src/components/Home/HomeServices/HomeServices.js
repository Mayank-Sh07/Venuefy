import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Hidden,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    backgroundColor: theme.palette.secondary.main,
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
  },
  sectionHead: {
    padding: "20px 20px 20px 75px",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      padding: "15px 0px",
    },
  },
}));

const serviceData = [
  { imagePath: "/imgs/Venue_Services.jpg", serviceName: "Venue Services" },
  {
    imagePath: "/imgs/Non_Venue_Services.jpg",
    serviceName: "Non-Venue Services",
  },
  { imagePath: "/imgs/Premium_Services.jpg", serviceName: "Premium Services" },
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
                image={service.imagePath}
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
