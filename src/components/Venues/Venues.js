import React from "react";
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import { Container } from "@material-ui/core";

export default function Venues() {
  return (
    <Container disableGutters>
      <FilterDrawer />
    </Container>
  );
}
