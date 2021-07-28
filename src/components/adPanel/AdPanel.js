import adPlaceholder728x90 from '../../assets/ AdPlaceholder728x90.jpg';

import adPlaceholder300x250 from "../../assets/AdPlaceholder300x250.jpg";
import styles from "./AdPanel.module.css";

const AdPanel = (props) => {
  return (
    <div className={styles.container} style={{ marginTop: props.marginTop }}>
      {props.longAd && <img src={adPlaceholder728x90}></img>}

      {!props.longAd && (
        <img
          src={adPlaceholder300x250}
          style={{ width: "300px", height: "250px", padding: "2rem" }}
        />
      )}
      {!props.longAd && (
        <img
          src={adPlaceholder300x250}
          style={{ width: "300px", height: "250px", padding: "2rem" }}
        />
      )}
    </div>
  );
};

export default AdPanel;
