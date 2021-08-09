import { useState } from "react";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [highlighted, setHighlighted] = useState(false);

  const chosenOne = props.chosen === "" || props.title === props.chosen;

  const hoverHandler = (onOrOff) => {
    if (!props.locked) {
      onOrOff === "on" ? setHighlighted(true) : setHighlighted(false);
    }
  };

  const sendUpChoice = () => {
    props.clickedChoice(props.index);
    
  };

  return (
    <div
      className={`${styles.navItemDiv} ${highlighted && styles.hovered}`}
      onMouseEnter={() => {
        hoverHandler("on");
      }}
      onMouseLeave={() => {
        hoverHandler("off");
      }}
      onClick={sendUpChoice}
    >
      <p
        className={`${styles.navBarItem} ${highlighted && styles.hoveredText} `}
      >
        {props.title}{" "}
      </p>
    </div>
  );
};

export default MenuItem;
