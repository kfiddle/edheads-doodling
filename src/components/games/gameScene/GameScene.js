import styles from "./GameScene.module.css";

const GameScene = (props) => {
  const { scene, gameTitle, description } = props.gameObject;

  const gameClicked = () => {
    props.gameChosen(gameTitle);
  };

  return (
    <div className={styles.gameSceneContainer}>
      <img src={scene} className={styles.sceneImage}></img>
      <div className={styles.basicTextDiv}>
        <h2 className={styles.gameTitle}>{gameTitle}</h2>
        {description}
        <a onClick={gameClicked}>
          <span className={styles.learnMoreLink}>Learn more ></span>
        </a>
      </div>
    </div>
  );
};

export default GameScene;
