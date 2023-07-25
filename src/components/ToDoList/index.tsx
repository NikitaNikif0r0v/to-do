import s from "./toDoList.module.css";
import { TodoItem } from "./types";
import { useTodos } from "./hooks";

import { ItemList } from "../ToDoItem";

export function TodoList() {
  const {
    todos,
    setFilter,
    handleAddTodo,
    handleDelete,
    newItemText,
    newItemTextChangeNahdler,
    handleInputKeyPress,
  } = useTodos();

  return (
    <div className={s.layout}>
      <div className={s.container}>
        <h2>To-dos:</h2>
        <input
          type="text"
          placeholder="Filter the elements"
          onChange={(e) => setFilter(e.target.value)}
        />

        <input
          onChange={(e) => newItemTextChangeNahdler(e)}
          type="text"
          placeholder="Add new task"
          value={newItemText}
          onKeyDown={handleInputKeyPress}
        />
        <button onClick={() => handleAddTodo(newItemText)} type="submit">
          Add
        </button>

        <ul>
          {todos.map((todo: TodoItem) => (
            <ItemList key={todo.id} todo={todo} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}
