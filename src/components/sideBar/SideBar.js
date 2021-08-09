import { useState, useEffect } from "react";

import Ad from "../adPanel/Ad";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
  const [sideBarPosition, setSideBarPosition] = useState(0);

  return (
    <div className={styles.sideBar} style={{ top: `${sideBarPosition}%` }}>
      <div className={styles.menuContainer}></div>
      <Ad size={"small"} />
      <div>
        <Ad size={"small"} />
      </div>
    </div>
  );
};

export default SideBar;
