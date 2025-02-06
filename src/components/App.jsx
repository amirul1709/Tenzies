import Die from "./Die";

export default function () {
  function generateAllNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const ranNum = Math.ceil(Math.random() * 6);
      dice.push(ranNum);
    }
    return dice;
  }

  return (
    <main>
      <div className="dice-container">
        <Die value={2} />
        <Die value={1} />
        <Die value={4} />
        <Die value={5} />
        <Die value={3} />
        <Die value={3} />
        <Die value={2} />
        <Die value={6} />
        <Die value={5} />
        <Die value={1} />
      </div>
    </main>
  );
}
