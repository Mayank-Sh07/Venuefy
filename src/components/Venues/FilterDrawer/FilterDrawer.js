import React from "react";
import {
  makeStyles,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { Mail, Inbox, Delete, CloseSharp } from "@material-ui/icons";
import FilterSelect from "./FilterSelect";
import FilterSlider from "./FilterSlider";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    height: "86px",
    [theme.breakpoints.only("xs")]: {
      height: "120px",
    },
  },
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "6px",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: `0 0 2px black`,
    fontSize: "1.4rem",
    marginRight: "5px",
  },
  tagBar: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  iconButtonLabel: {
    display: "flex",
    flexDirection: "column",
    minWidth: "36px",
  },
  tinyLabel: {
    fontSize: "0.4em",
  },
}));

export default function FilterDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='relative' elevation={0} className={classes.tagBar}>
        <Toolbar maxWid>
          <Button
            color='inherit'
            onClick={handleDrawerOpen}
            className={classes.menuButton}
            variant='outlined'
          >
            Filter
          </Button>
          <Typography variant='h6' noWrap>
            Filter drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant='h4' className={classes.title}>
            FILTERS
          </Typography>
          <IconButton classes={{ label: classes.iconButtonLabel }} size='small'>
            <Delete />
            <Typography className={classes.tinyLabel}>Clear All</Typography>
          </IconButton>
          <IconButton
            onClick={handleDrawerClose}
            classes={{ label: classes.iconButtonLabel }}
            size='small'
          >
            <CloseSharp />
            <Typography className={classes.tinyLabel}>Hide</Typography>
          </IconButton>
        </div>
        <Divider />
        <FilterSelect />
        <FilterSlider />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
