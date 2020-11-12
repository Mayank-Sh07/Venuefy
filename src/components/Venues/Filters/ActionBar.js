import React from "react";
import { FormContext } from "./FormContext";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import FilterList from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({
  filterFloat: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(8),
      right: theme.spacing(1),
    },
  },
  actionBar: {
    minHeight: "64px",
    marginTop: "2px",
  },
  tagContainer: {
    display: "flex",
    flexGrow: 1,
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    minHeight: "40px",
    overflow: "auto",
    backgroundColor: "inherit",
  },
  tag: {
    margin: theme.spacing(0.5),
  },
}));

export default function ActionBar() {
  const classes = useStyles();
  const { isFilterOpen, tags, openFilter, deleteTag } = React.useContext(
    FormContext
  );
  return (
    <>
      <Hidden mdUp>
        <Fab
          color='secondary'
          size='large'
          className={classes.filterFloat}
          onClick={openFilter}
        >
          <FilterList />
        </Fab>
      </Hidden>
      <Grid
        container
        alignItems='center'
        justify='space-evenly'
        className={classes.actionBar}
      >
        <div hidden={isFilterOpen}>
          <Hidden smDown>
            <Grid item md={1}>
              <Button variant='contained' onClick={openFilter} fullWidth>
                Filter
              </Button>
            </Grid>
          </Hidden>
        </div>
        <Grid item xs={12} sm={12} md={isFilterOpen ? 12 : 11}>
          <div style={{ width: "100%", height: "45px", overflowY: "hidden" }}>
            <div
              component='ul'
              className={classes.tagContainer}
              style={{ paddingBottom: "30px" }}
            >
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <li key={`tag-${tag.label}`}>
                    <Chip
                      label={tag.label}
                      onDelete={() => deleteTag(tag)}
                      className={classes.tag}
                    />
                  </li>
                ))
              ) : (
                <Chip label={"No Filters Applied"} className={classes.tag} />
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
