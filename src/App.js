//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [home, setHome] = useState(0);
  let [away, setAway] = useState(0);

  // Touchdowns
  const touchHome = point => {
    setHome(home + 7);
  };
  const touchAway = point => {
    setAway(away + 7);
  };

  // Field Goals
  const goalHome = point => {
    setHome(home + 3);
  };
  const goalAway = point => {
    setAway(away + 3);
  };


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={goalHome}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={touchAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={goalAway}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
