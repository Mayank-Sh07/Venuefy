import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingVenues() {
  return (
    <div style={{ textAlign: "center", padding: "40px 0px" }}>
      <CircularProgress color='secondary' style={{ margin: "auto" }} />
      <h4>Loading Venues...</h4>
    </div>
  );
}
