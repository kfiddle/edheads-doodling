import { useState } from "react";

import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import SignUpPanel from "./components/signUpPanel/SignUpPanel";
import DonatePanel from "./components/donatePanel/DonatePanel";

import AboutUs from "./components/aboutUsPanel/AboutUsPanel";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  const [choice, setChoice] = useState("Welcome");

  const welcome = choice === "Welcome";
  const aboutUs = choice === "About Us";
  const ourGames = choice === "Our Games";

  const chosenPanelHandler = (choice) => {
    if (choice === "Our Games") {
      setTimeout(() => {
        setChoice(choice);
      }, 5000);
    } else {
      setChoice(choice);
    }
  };

  return (
    <div className="App">
      <Header clickedChoice={chosenPanelHandler} />
      {welcome && <Welcome gamesClicked={chosenPanelHandler} />}
      {aboutUs && <AboutUs />}
      <div
        style={{
          width: "100vw",
          height: "25vh",
          background: "wheat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#d2d063", fontWeight: "bold", fontSize: "3rem" }}>
          InfoGraphic will live here...
        </h2>
      </div>
      <SignUpPanel />
      <div
        style={{
          width: "100vw",
          height: "35vh",
          background: "wheat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#d2d063", fontWeight: "bold", fontSize: "3rem" }}>
          Quotes and testimony will live here...
        </h2>
      </div>
      <DonatePanel />
      <Footer />
    </div>
  );
}

export default App;
