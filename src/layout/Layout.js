import { Fragment } from "react";
import classes from "./Layout.module.css";

import Header from "../components/header/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
