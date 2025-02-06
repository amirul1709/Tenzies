import Die from "./Die";

export default function () {
  return (
    <main>
      <div className="dice-container">
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
        <Die value={6} />
      </div>
    </main>
  );
}
