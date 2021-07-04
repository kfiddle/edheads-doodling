import GameScene from "./gameScene/GameScene";

import scene1 from '../../assets/gameScenes/simp mach bedroom.jpg';
import scene2 from '../../assets/gameScenes/simp mach tool shed.jpg';
import scene3 from '../../assets/gameScenes/simp mach garage.jpg';
import scene4 from '../../assets/gameScenes/simp mach kitchen.jpg';

import styles from "./GamesPanel.module.css";

const gamesObjects = [{
  scene: scene1,
  gameTitle: 'First Game',
  description: 'This is a pretty decent game, blah blah blah blah Lorem Ipsum Etc...'
}, {
  scene: scene2,
  gameTitle: 'Second Game',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
}, {
  scene: scene3,
  gameTitle: 'Third Game',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

}, {
  scene: scene4,
  gameTitle: 'Fourth Game',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'


}]





const GamesPanel = (props) => {
  return (
    <div className={styles.outermostContainer}>
      <div className={styles.innerContainer}>

      <GameScene gameObject={gamesObjects[0]} />
      <GameScene gameObject={gamesObjects[1]} />
      <GameScene gameObject={gamesObjects[2]}/>
      <GameScene gameObject={gamesObjects[3]}/>
      </div>
     
    </div>
  );
};

export default GamesPanel;
