import adPlaceholder728x90 from "../../assets/ AdPlaceholder728x90.jpg";

import adPlaceholder300x250 from "../../assets/AdPlaceholder300x250.jpg";

import styles from "./Ad.module.css";

const Ad = (props) => {
  if (props.size === "wide") {
    return (
      <div>
        <img src={adPlaceholder728x90} className={styles.adDivWide} />
      </div>
    );
  } else {
    return (
      <div>
        <img src={adPlaceholder300x250} className={styles.adDivSmall} />
      </div>
    );
  }
};

export default Ad;
