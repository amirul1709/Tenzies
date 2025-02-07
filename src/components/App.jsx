import Die from "./Die";
import React from "react";

export default function App() {
  function generateAllNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = { value: Math.ceil(Math.random() * 6), isHeld: false };
      dice.push(diceObj);
    }
    return dice;
  }

  const [diceArray, setDiceArray] = React.useState(generateAllNewDice);

  const diceElements = diceArray.map((obj) => <Die value={obj.value} />);

  function handleClick() {
    setDiceArray(generateAllNewDice);
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-button" onClick={handleClick}>
        Roll
      </button>
    </main>
  );
}
