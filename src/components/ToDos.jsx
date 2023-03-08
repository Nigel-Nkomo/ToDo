import { MdDelete } from "react-icons/md";

export default function ToDos({ items, deleteItem }) {
  return (
    <>
      <section className="todos">
        {items.map(({ text, id }) => {
          return (
            <div key={id} id={id} className="todos__todo">
              <p className="todos__text">{text}</p>
              <MdDelete
                className="todos__delete"
                onClick={() => deleteItem(id)}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
