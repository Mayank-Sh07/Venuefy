import React from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
const Header = React.lazy(() => import("./Header"));
const HeaderMobile = React.lazy(() => import("./HeaderMobile"));

export default function Navbar() {
  const location = useLocation();
  return window.innerWidth < 600 ? (
    <React.Suspense fallback={<Skeleton height={120} width={"100%"} />}>
      <HeaderMobile currentPath={location.pathname} />
    </React.Suspense>
  ) : (
    <React.Suspense fallback={<Skeleton height={92} width={"100%"} />}>
      <Header currentPath={location.pathname} />
    </React.Suspense>
  );
}
