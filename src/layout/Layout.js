import { Fragment } from "react";
import classes from "./Layout.module.css";
// import MainNavigation from "./MainNavigation";

import Header from "../components/header/Header";
// import SideBar from "../components/sideBar/SideBar";




const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
