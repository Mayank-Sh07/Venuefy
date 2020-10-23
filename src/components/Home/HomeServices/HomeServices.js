import React from "react";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: "2.5em",
  },
  btnRounded: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "2em",
    padding: "8px 12px",
    margin: "auto",
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
    <Container maxWidth={null} style={{ padding: "40px" }}>
      <Grid container alignItems='center' justify='space-evenly' spacing={6}>
        {serviceData.map((service) => (
          <Grid item xs={12} sm={4}>
            <Card className={classes.rounded}>
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
