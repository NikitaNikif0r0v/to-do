import { ItemListProps } from "../types";
import { useToDoItem } from "./hooks";

export function ItemList(props: ItemListProps) {
  const { todo, handleDelete } = props;
  const { checked, completeTodoTask } = useToDoItem(todo);

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => completeTodoTask(todo)}
        id="itemStatus"
      />
      <label htmlFor="itemStatus">{todo.text}</label>
      <button onClick={() => handleDelete}>Delete</button>
    </li>
  );
}
