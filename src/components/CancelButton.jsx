export default function CancelButton({ setItems }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setItems([]);
        }}
      >
        x
      </button>
    </>
  );
}
