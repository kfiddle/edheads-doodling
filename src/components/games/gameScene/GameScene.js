import styles from "./GameScene.module.css";

const GameScene = props => {
  return <div className={styles.gameSceneContainer}>
    <img src={props.scene} className={styles.sceneImage}></img>
    <h2>{props.gameTitle}</h2>
  </div>;
};

export default GameScene;
