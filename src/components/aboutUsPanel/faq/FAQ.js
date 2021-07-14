import { useState, useEffect } from "react";

import AccordionPanel from './accordionPanel/AccordionPanel';

import styles from "./FAQ.module.css";

const FAQ = (props) => {
  

  return (
    <div className={styles.FAQContainer}>
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
        <AccordionPanel />
    </div>
  );
};

export default FAQ;
