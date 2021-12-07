import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/quotes"
            className={({ isActive }) => (isActive ? `${classes.active}` : " ")}
          >
            All quotes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/new-quote"
            className={({ isActive }) => (isActive ? `${classes.active}` : " ")}
          >
            Add a Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
