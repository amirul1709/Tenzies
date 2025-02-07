export default function Die(props) {
  return (
    <button className={props.isHeld ? "held-die" : undefined}>
      {props.value}
    </button>
  );
}
