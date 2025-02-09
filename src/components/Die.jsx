export default function Die(props) {
  //passing die id to hold function
  function handleClick() {
    return props.hold(props.id);
  }

  return (
    <button
      className={props.isHeld ? "held-die" : undefined}
      onClick={handleClick}
      aria-label={`Die with value ${props.value}, ${
        props.isHeld ? "Held" : "Not held"
      }`}
    >
      {props.value}
    </button>
  );
}
