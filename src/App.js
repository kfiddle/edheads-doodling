import { useState } from "react";

import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import SignUpPanel from "./components/signUpPanel/SignUpPanel";
import DonatePanel from "./components/donatePanel/DonatePanel";
import AboutUs from "./components/aboutUsPanel/AboutUsPanel";
import GamesPanel from "./components/games/GamesPanel";
import SideBar from "./components/sideBar/SideBar";
import InfoGraphic from "./components/infoGraphic/InfoGraphic";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  const [choice, setChoice] = useState("Welcome");

  const welcome = choice === "Welcome";
  const aboutUs = choice === "About Us";
  const ourGames = choice === "Our Games";
  const exploreGames = choice === "Explore Games";
  const gamesPanel = choice === "Games Panel";

  const sideBarOpen = aboutUs || ourGames;

  const chosenPanelHandler = (choice) => {
    if (choice === "Explore Games") {
      setTimeout(() => {
        setChoice("Our Games");
      }, 5000);
    } else {
      setChoice(choice);
    }
  };

  return (
    <div className="App">
      <Header clickedChoice={chosenPanelHandler} />
      <Welcome gamesClicked={chosenPanelHandler} />
      {aboutUs && <AboutUs />}
      {ourGames && <GamesPanel />}
      {/* {sideBarOpen && <SideBar />} */}

      <InfoGraphic words={"InfoGraphic will live here..."} />
      <SignUpPanel />
      <InfoGraphic words={"Quotes and testimony will live here..."} />
      <DonatePanel />
      <Footer />
    </div>
  );
}

export default App;
