import React from "react";

import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great Quote</h1>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
