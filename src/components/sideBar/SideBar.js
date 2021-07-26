import { useState, useEffect } from "react";

import whiteDots from "../../assets/whiteDots.png";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
  const [sideBarPosition, setSideBarPosition] = useState(0);
  const [sideBarLocked, setSideBarLock] = useState(false);

  // useEffect(() => {
  //   const slideTimer = setTimeout(() => {
  //     setSideBarPosition(0);
  //   }, 1400);
  // }, []);

  return (
    <div
      className={styles.sideBar}
      style={{ top: `${sideBarPosition}%` }}
    >
      <div className={styles.menuContainer}>
        <h3 className={styles.newsHeader}>Latest News</h3>
        <p className={styles.newsSummaryText}>
          Parent and Teachers: Read Dan Edwards' blog posts to learn more about
          how to raise a STEM-oriented, critically thinking child!
        </p>
      </div>
      <div className={styles.adOrVideoContainer}>Media Container</div>
      <div className={styles.adOrVideoContainer}>Media Container</div>
    </div>
  );
};

export default SideBar;
