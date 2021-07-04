import styles from "./SingleGame.module.css";

const GameScene = props => {
  return <div>
    <img src={props.scene}></img>
  </div>;
};

export default GameScene;
