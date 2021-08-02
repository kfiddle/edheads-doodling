import { useState } from "react";

import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import SignUpPanel from "./components/signUpPanel/SignUpPanel";
import DonatePanel from "./components/donatePanel/DonatePanel";
import AboutUs from "./components/aboutUsPanel/AboutUsPanel";
import GamesPanel from "./components/games/GamesPanel";
import SingleGame from "./components/games/singleGame/SingleGame";
import SideBar from "./components/sideBar/SideBar";
import AdPanel from "./components/adPanel/AdPanel";
import Footer from "./components/footer/Footer";

import "./App.css";

const gamesList = ["firstGame", "secondGame", "thirdGame", "fourthGame"];

// const adsList =[one:]


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

    console.log(choice);
    console.log(singleGame);
  };

  const gameChosen = (gameTitle) => {
    setChosenGame(gameTitle);
  };

  if (welcome) {
    return (
      <div className="App">
        <Header clickedChoice={chosenPanelHandler} />
        <AdPanel marginTop={"25vh"} longAd={true}/>

        {welcomeScreenOpen && <Welcome gamesClicked={chosenPanelHandler} />}
        {/* <SideBar /> */}
        <AdPanel marginTop={"0vh"} longAd={false}/>
        <SignUpPanel />
        <AdPanel marginTop={"0vh"} longAd={false} />
        <DonatePanel />
        <Footer />
      </div>
    );
  } else if (ourGames) {
    return (
      <div className="App">
        <Header clickedChoice={chosenPanelHandler} />
        <GamesPanel whichGame={gameChosen} gameClicked={chosenPanelHandler} />
        <SideBar />
      </div>
    );
  } else if (singleGame) {
    return <SingleGame gameTitle={chosenGame} />;
  } 
  
  else if (aboutUs) {
    return (
      <div className="App">
        <Header clickedChoice={chosenPanelHandler} />
        <AboutUs />
        <SideBar />
     
      </div>
    );
  }
}

export default App;



// return (







// )