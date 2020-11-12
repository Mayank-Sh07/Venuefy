import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Hidden from "@material-ui/core/Hidden";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <Hidden smUp>
        <HeaderMobile currentPath={location.pathname} />
      </Hidden>
      <Hidden xsDown>
        <Header currentPath={location.pathname} />
      </Hidden>
    </>
  );
}
