import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  YouTube,
  Twitter,
  LinkedIn,
} from "@material-ui/icons";
import TreeViewList from "../TreeView/TreeView";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: "40px",
    [theme.breakpoints.only("xs")]: {
      padding: "10px",
    },
  },
}));

const list1 = {
  head: "Venue Types",
  nodes: ["banquets", "resorts", "pubs", "hotels"],
};

const list2 = {
  head: "Premium Services",
  nodes: ["private jets", "cruise ships", "yatchs"],
};

const list3 = {
  head: "Services Provided",
  nodes: [
    "disc jockey (DJ)",
    "photographers",
    "make-up artists",
    "mehandi artists",
    "florists",
    "decorators",
    "caterers",
    "+ more...",
  ],
};

function HomeServices() {
  const classes = useStyles();
  return (
    <Container maxWidth={null} className={classes.footerContainer}>
      <Grid
        container
        alignItems='flex-start'
        justify='space-evenly'
        spacing={6}
      >
        <Grid item xs={12} sm={4}>
          <TreeViewList listData={list1} />
          <TreeViewList listData={list2} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TreeViewList listData={list3} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid item container direction='column' alignItems='center'>
            <Grid item xs={12}>
              <img src='imgs/vflogo.PNG' alt='Venuefy' />
            </Grid>
            <Grid item xs={12}>
              <Button startIcon={<Mail />}>info@venuefy.in</Button>
            </Grid>
            <Grid item xs={12}>
              <Button startIcon={<Phone />}>+91 90079-67777</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify='space-between'>
          <Grid item xs={12} sm={5} align='center'>
            <img
              src='https://static.wixstatic.com/media/0cbda3_6d68eb4cafc241d08c837a2bfd5021b4~mv2.jpg/v1/fill/w_364,h_89,al_c,q_80,usm_0.66_1.00_0.01/0001%2520(3)_edited.webp'
              alt='WDI Events'
              height='70px'
              width='180px'
            />
          </Grid>
          <Grid item xs={12} sm={7} align='end'>
            <IconButton>
              <Avatar>
                <Facebook />
              </Avatar>
            </IconButton>
            <IconButton>
              <Avatar>
                <Instagram />
              </Avatar>
            </IconButton>
            <IconButton>
              <Avatar>
                <LinkedIn />
              </Avatar>
            </IconButton>
            <IconButton>
              <Avatar>
                <YouTube />
              </Avatar>
            </IconButton>
            <IconButton>
              <Avatar>
                <Twitter />
              </Avatar>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeServices;
