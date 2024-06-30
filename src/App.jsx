import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [res, setRes] = useState("");
  const [cpChoice, setCpChoice] = useState("");

  const choices = ["rock", "paper", "scissor"];

  function checkWinner(playerChoice) {
    setCpChoice((prev) => {
      const newCpChoice = choices[Math.floor(Math.random() * 3)];

      if (playerChoice === newCpChoice) {
        setRes("It's a tie");
      } else {
        switch (playerChoice) {
          case "rock":
            setRes(newCpChoice === "scissor" ? "you win" : "computer win");
            break;
          case "paper":
            setRes(newCpChoice === "rock" ? "you win" : "computer win");
            break;
          case "scissor":
            setRes(newCpChoice === "paper" ? "you win" : "computer win");
            break;
        }
      }
      return newCpChoice;
    });
  }

  return (
    <div>
      <h1>
        It's time play <br /> ROCK-PAPER-SCISSOR
      </h1>
      <h2>CHOOSE YOUR MOVE</h2>
      <div className="user">
        <div className="options">
          <button onClick={() => checkWinner("rock")}>🪨</button>
          <button onClick={() => checkWinner("paper")}>🧻</button>
          <button onClick={() => checkWinner("scissor")}>✂️</button>
        </div>
        <div className="choose">
          <h2>computer chose: {cpChoice} </h2>
          <h2>WINNER : {res}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
