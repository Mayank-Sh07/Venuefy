import React, { memo } from "react";
import { FormContext } from "./FormContext";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  tagBar: {
    minHeight: "64px",
    marginTop: "2px",
  },
  tagContainer: {
    display: "flex",
    flexGrow: 1,
    listStyle: "none",
    padding: theme.spacing(0.5, 2),
    margin: 0,
    minHeight: "40px",
    overflow: "auto",
    backgroundColor: theme.palette.secondary.light,
  },
  tag: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    border: `1.25px solid ${theme.palette.secondary.dark}`,
  },
  deleteIcon: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function TagBar() {
  const classes = useStyles();
  const { tags, deleteTag } = React.useContext(FormContext);
  if (tags.length > 0) {
    return (
      <Grid
        container
        alignItems='center'
        justify='space-evenly'
        className={classes.actionBar}
      >
        <Grid item xs={12}>
          <div component='ul' className={classes.tagContainer}>
            {tags.map((tag) => (
              <li key={`tag-${tag.label}`} style={{ listStyle: "none" }}>
                <Chip
                  label={tag.label}
                  onDelete={() => deleteTag(tag)}
                  className={classes.tag}
                />
              </li>
            ))}
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return <br />;
  }
}

export default memo(TagBar);
