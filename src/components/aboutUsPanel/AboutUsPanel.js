import { useState, useEffect, Fragment } from "react";

import SecondaryNavBar from "../secondaryNavBar/SecondaryNavBar";

import AboutUsBasic from "./aboutUsBasic/AboutUsBasic";
import TermsOfUse from "./termsOfUse/TermsOfUse";
import FAQ from "./faq/FAQ";
import Partners from "./partners/Partners";
import Awards from "./awards/Awards";
import ActivityHelp from "./activityHelp/ActivityHelp";
import styles from "./AboutUsPanel.module.css";

const choicesList = [<AboutUsBasic />, <TermsOfUse />, <FAQ />, <Partners />  ,<Awards />, <ActivityHelp />];
const choiceTitles = ["About Us", 'Terms Of Use', "FAQ", "Partners", "Awards", "Activity Help"]

const AboutUsPanel = (props) => {
  const [renderedPanel, setRenderedPanel] = useState(choicesList[0]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const clickHandler = (chosenComponentIndex) => {
    setRenderedPanel(choicesList[chosenComponentIndex]);
    setHighlightedIndex(chosenComponentIndex);
  };

  return (
    <div className={styles.outermostDiv} style={{ transform: `translateY(0)` }}>
      <SecondaryNavBar clickedChoice={clickHandler} choices={choiceTitles} highlightedIndex={highlightedIndex} />
      {renderedPanel}
    </div>
  );
};

export default AboutUsPanel;
