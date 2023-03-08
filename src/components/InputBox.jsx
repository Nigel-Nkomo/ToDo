import AddButton from "./AddButton";

export default function InputBox({ text, setText, setItems }) {
  return (
    <>
      <section className="create-todo">
        <input
          className="create-todo__input"
          type="text"
          placeholder="e.g. walk dog"
          value={text}
          onChange={(event) => {
            const { value } = event.target;
            setText(value);
          }}
        />
        <AddButton text={text} setItems={setItems} setText={setText} />
      </section>
    </>
  );
}
