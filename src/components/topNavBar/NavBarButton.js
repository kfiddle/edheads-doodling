import { useState } from "react";

import styles from "./NavBarButton.module.css";


const NavBarButton = (props) => {
  const { title, active } = props.optionObject;
//   const [highlighted, setHighlighted] = useState(false);

  const styling = active
    ? { height: "5rem", fontSize: "1.5rem" }
    : { height: "3rem", fontSize: "1.25rem" };

  const clicked = () => {
    props.clickedChoice(props.optionObject);
    // setHighlighted(true);
  };

  return (

     
    <button className={styles.navButton} onClick={clicked} style={styling}>
      {title}

    </button>

  );
};

export default NavBarButton;
