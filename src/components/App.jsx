import Die from "./Die";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function App() {
  //generating an array with dice objects
  function generateAllNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      };
      dice.push(diceObj);
    }
    return dice;
  }

  //initializing state of dice
  const [diceArray, setDiceArray] = React.useState(generateAllNewDice);

  //holding and highlighting individual die
  function hold(id) {
    setDiceArray((prevDieArray) =>
      prevDieArray.map((dieObj) =>
        dieObj.id === id ? { ...dieObj, isHeld: !dieObj.isHeld } : dieObj
      )
    );
  }

  //dynamically creating the number of dice
  const diceElements = diceArray.map((dieObj) => (
    <Die
      key={dieObj.id}
      id={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
    />
  ));

  //if you win the game new dice are generated, else re-rolling the dice
  function handleClick() {
    gameWon
      ? setDiceArray(generateAllNewDice)
      : setDiceArray((prevDieArray) =>
          prevDieArray.map((dieObj) =>
            dieObj.isHeld
              ? dieObj
              : { ...dieObj, value: Math.ceil(Math.random() * 6) }
          )
        );
  }

  //checking if all dice are being held and have the same value
  let gameWon =
    diceArray.every((dieObj) => dieObj.isHeld) &&
    diceArray.every((dieObj) => dieObj.value === diceArray[0].value);

  //dynamic window sizing for confetti
  const { width, height } = useWindowSize();

  return (
    <main>
      {gameWon && <Confetti width={width} height={height} />}
      <div arial-live="polite" className="screenreader-only">
        {gameWon && <p>Congrats! You won! Press New Game to play again.</p>}
      </div>
      <div className="game-header">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-button" onClick={handleClick}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
