import { useState } from "react";

import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import SignUpPanel from "./components/signUpPanel/SignUpPanel";
import DonatePanel from "./components/donatePanel/DonatePanel";
import AboutUs from "./components/aboutUsPanel/AboutUsPanel";
import GamesPanel from "./components/games/GamesPanel";
import SingleGame from "./components/games/singleGame/SingleGame";
import SideBar from "./components/sideBar/SideBar";
import InfoGraphic from "./components/infoGraphic/InfoGraphic";
import Footer from "./components/footer/Footer";

import "./App.css";

const gamesList = ["firstGame", "secondGame", "thirdGame", "fourthGame"];

function App() {
  const [choice, setChoice] = useState("Welcome");
  const [chosenGame, setChosenGame] = useState("");

  const welcome = choice === "Welcome";
  const aboutUs = choice === "About Us";
  const ourGames = choice === "Our Games";
  const exploreGames = choice === "Explore Games";
  const gamesPanel = choice === "Games Panel";
  const singleGame = choice === "Single Game";

  const sideBarOpen = aboutUs || ourGames;
  const welcomeScreenOpen = welcome || aboutUs;

  const chosenPanelHandler = (choice) => {
    if (choice === "Explore Games") {
      setTimeout(() => {
        setChoice("Our Games");
      }, 5000);
    } else {
      setChoice(choice);
    }

    console.log(choice)
    console.log(singleGame)
  };

  const gameChosen = (gameTitle) => {
    setChosenGame(gameTitle);
    
  };

  if (!ourGames) {
    return (
      <div className="App">
        <Header clickedChoice={chosenPanelHandler} />
        {welcomeScreenOpen && <Welcome gamesClicked={chosenPanelHandler} />}
        {aboutUs && <AboutUs />}
        {sideBarOpen && <SideBar />}
        <InfoGraphic words={"InfoGraphic will live here..."} />
        <SignUpPanel />
        <InfoGraphic words={"Quotes and testimony will live here..."} />
        <DonatePanel />
        <Footer />
      </div>
    );
  } else if (ourGames) {
    return (
      <div>
        <Header clickedChoice={chosenPanelHandler} />
        <GamesPanel whichGame={gameChosen} gameClicked={chosenPanelHandler}  />
        <SideBar />
      </div>
    );
  } else if (singleGame) {
    return <SingleGame gameTitle={chosenGame} />;
  }
}

export default App;
