import styles from "./GameScene.module.css";

const GameScene = (props) => {
  const { scene, gameTitle, description } = props.gameObject;

  return (
    <div className={styles.gameSceneContainer}>
      <img src={scene} className={styles.sceneImage}></img>
      <h2 className={styles.gameTitle}>{gameTitle}</h2>
      <p>{description} 
      <p className={styles.learnMoreLink}>Learn more ></p>
      </p>
    </div>
  );
};

export default GameScene;
