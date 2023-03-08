import CancelButton from "./CancelButton";

export default function Footer({ items, setItems }) {
  return (
    <>
      <footer className="footer">
        <p>
          {items.length} {items.length === 1 ? "todo" : "todos"}
        </p>
        <CancelButton setItems={setItems} />
      </footer>
    </>
  );
}
