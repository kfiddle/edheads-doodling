import { useState, useEffect } from "react";

import AccordionPanel from "./accordionPanel/AccordionPanel";

import styles from "./FAQ.module.css";

const FAQ = (props) => {
  return (
    <div className={styles.FAQContainer}>
      <div className={styles.AccordionContainer}>
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
      </div>
    </div>
  );
};

export default FAQ;
