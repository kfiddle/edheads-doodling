import GameScene from "./singleGame";

import scene1 from '../../assets/gameScenes/sim mach bathroom (1).jpg';
import scene2 from '../../assets/gameScenes/screen21.jpg';

import styles from "./GamesPanel.module.css";

const GamesPanel = (props) => {
  return (
    <div>

      <GameScene scene={scene1}/>
      <GameScene scene={scene2} />
     
    </div>
  );
};

export default GamesPanel;
