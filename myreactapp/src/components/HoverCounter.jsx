export default function HoverCounter({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
    </div>
  );
}
