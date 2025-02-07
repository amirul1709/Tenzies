import Die from "./Die";
import React from "react";

export default function App() {
  function generateAllNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const ranNum = Math.ceil(Math.random() * 6);
      dice.push(ranNum);
    }
    return dice;
  }

  const [diceArray, setDiceArray] = React.useState(generateAllNewDice);

  const diceComponent = diceArray.map((value) => <Die value={value} />);

  return (
    <main>
      <div className="dice-container">{diceComponent}</div>
    </main>
  );
}
