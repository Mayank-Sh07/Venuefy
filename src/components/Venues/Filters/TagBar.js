import React, { memo } from "react";
import { FormContext } from "./FormContext";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  console.log("Tag BAR");
  return (
    <Grid
      container
      alignItems='center'
      justify='space-evenly'
      className={classes.actionBar}
    >
      <Grid item xs={12}>
        <div component='ul' className={classes.tagContainer}>
          {tags.length > 0 ? (
            tags.map((tag) => (
              <li key={`tag-${tag.label}`} style={{ listStyle: "none" }}>
                <Chip
                  label={tag.label}
                  onDelete={() => deleteTag(tag)}
                  className={classes.tag}
                />
              </li>
            ))
          ) : (
            <Typography
              variant='h6'
              style={{
                textAlign: "center",
                width: "100%",
                fontWeight: 100,
                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif`,
              }}
            >
              No Filters Selected
            </Typography>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default memo(TagBar);
