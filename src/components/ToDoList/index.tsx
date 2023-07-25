import { useState, useMemo } from "react";

import s from "./toDoList.module.css";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "Learn React", completed: false },
  ]);

  const [filter, setFilter] = useState<string>("");

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => todo.text.includes(filter));
  }, [todos, filter]);

  function handleAddTodo(text: string) {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleDelete(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  console.log(filteredTodos);
  return (
    <div className={s.layout}>
      <div className={s.container}>
        <h2>To-dos:</h2>
        <input
          type="text"
          placeholder="Filter the elements"
          onChange={(e) => setFilter(e.target.value)}
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement; // Type assertion
            const elements = form.elements;
            const text = elements[0];
            const input = text as HTMLInputElement;
            handleAddTodo(input.value);

            input.value = "";
          }}
        >
          <input type="text" placeholder="Add new task" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {filteredTodos.map((todo, i) => (
            <ItemList key={i} todo={todo} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ItemListProps {
  todo: TodoItem;
  handleDelete: (id: number) => void;
}

function ItemList(props: ItemListProps) {
  const { todo, handleDelete } = props;
  const [checked, setChecked] = useState<boolean>(todo.completed || false);

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
