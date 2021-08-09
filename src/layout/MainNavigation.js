import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          {/* <li><NavLink to={'/all-quotes'}activeClassName={classes.active}>All Quotes</NavLink></li>
          <li><NavLink to={'/all-quotes'}activeClassName={classes.active}>All Quotes</NavLink></li> */}
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
