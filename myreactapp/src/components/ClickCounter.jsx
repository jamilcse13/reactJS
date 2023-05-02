export default function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} Times
      </button>
    </div>
  );
}
