import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Header from "./Header/Header";
import HeaderMobile from "./Header/HeaderMobile";
import { useLocation } from "react-router-dom";

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
