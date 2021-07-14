import { useState } from "react";

import styles from "./AccordionPanel.module.css";

const AccordionPanel = (props) => {
  const [visible, setVisible] = useState("none");
  const [clicked, setClicked] = useState(false);

  const appear = () => {
    if (!clicked) {
      setVisible("block");
      setClicked(true);
    } else {
      setVisible("none");
      setClicked(false);
    }
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <h3 onClick={appear}>This will be a good question.</h3>
      </div>
      <div style={{ display: visible }}>
        <div>This will be a good answer.</div>
        <div>This will be a good answer.</div>
        <div>This will be a good answer.</div>
        <div>This will be a good answer.</div>
        <div>This will be a good answer.</div>
      </div>
    </div>
  );
};

export default AccordionPanel;
