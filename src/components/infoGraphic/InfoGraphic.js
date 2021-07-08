import styles from "./InfoGraphic.module.css";

const InfoGraphic = (props) => {
  return (
    <div className={styles.container}>
      <h2 style={{ color: "#d2d063", fontWeight: "bold", fontSize: "3rem" }}>
        {props.words}
      </h2>
    </div>
  );
};

export default InfoGraphic;