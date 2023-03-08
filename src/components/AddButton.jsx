export default function AddButton({ text, setText, setItems }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          const newItem = { text, id: new Date().getTime().toString() };
          text !== "" &&
            setItems((items) => {
              return [...items, newItem];
            });
          setText("");
          return;
        }}
      >
        +
      </button>
    </>
  );
}
