import Ad from "./Ad";
import styles from "./AdPanel.module.css";

const AdPanel = (props) => {
  return (
    <div className={styles.container} style={{ marginTop: props.marginTop }}>
      {props.longAd && <Ad size={"wide"} />}
      {!props.longAd && (
        <div className={styles.doubleSmallAdDiv}>
          <Ad size={"small"} /> <Ad size={"small"} />
        </div>
      )}
    </div>
  );
};

export default AdPanel;
