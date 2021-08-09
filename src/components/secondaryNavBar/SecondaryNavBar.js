import { useState, useEffect, useRef } from "react";

import MenuItem from "./menuItem/MenuItem";

import styles from "./SecondaryNavBar.module.css";

const SecondaryNavBar = (props) => {
  const [placement, setPlacement] = useState(0);

  const navBarHeight = useRef();

  useEffect(() => {
    setTimeout(() => {
      setPlacement(navBarHeight.current.offsetHeight);
    }, 700);

    console.log(navBarHeight.current.offsetHeight);
  }, []);

  const clickedChoice = (componentIndex) => {
    props.clickedChoice(componentIndex);
  };

  const listToDisplay = props.choices.map((choice, index) => (
    <MenuItem title={choice} key={Math.random()} clickedChoice={clickedChoice} index={index} />
  ));

  return (
    <div
      className={styles.secondaryNavBar}
      ref={navBarHeight}
      style={{ transform: `translateY(${placement}px)` }}
    >
      <div className={styles.innerContainer}>{listToDisplay}</div>
    </div>
  );
};

export default SecondaryNavBar;
