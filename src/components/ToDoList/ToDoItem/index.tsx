import { ItemListProps } from "../types";
import { useToDoItem } from "./hooks";

export function ItemList(props: ItemListProps) {
  const { todo, handleDelete } = props;
  const { checked, setChecked } = useToDoItem(todo);

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        id="itemStatus"
      />
      <label htmlFor="itemStatus">{todo.text}</label>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  );
}
