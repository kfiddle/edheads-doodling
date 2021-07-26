import { useState, useEffect } from "react";

import MenuItem from "./menuItem/MenuItem";

import styles from "./SecondaryNavBar.module.css";

const SecondaryNavBar = (props) => {
  const [placement, setPlacement] = useState(-10);

  useEffect(() => {
    setTimeout(() => {
      setPlacement(0);
    }, 700 );
  }, []);

  const clickedChoice = (title) => {
    props.clickedChoice(title)
  }


  return (
    <div
      className={styles.secondaryNavBar}
      style={{ transform: `translateY(${placement}vh)` }}
    >
      <div className={styles.innerContainer}>
        <MenuItem title={"Terms of Use"}  locked={false} />
        <MenuItem title={"FAQ"} clickedChoice={clickedChoice} locked={false} />
        <MenuItem title={"Partners"} locked={false} />
        <MenuItem title={"Awards"} locked={false} />
        <MenuItem title={"Activity Help"} locked={false} />
      </div>

      
    </div>
  );
};

export default SecondaryNavBar;