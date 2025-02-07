export default function Die(props) {
  function handleClick() {
    return props.hold(props.id);
  }

  return (
    <button
      className={props.isHeld ? "held-die" : undefined}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
}
