import { useMemo, useState } from "react";
import { TodoItem, UseToDoData } from "./types";

const DEFAULT_TODO_DATA: TodoItem[] = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn TypeScript", completed: false },
  { id: 3, text: "Learn Next.js", completed: false },
];

export function useTodos(): UseToDoData {
  const [todos, setTodos] = useState(DEFAULT_TODO_DATA);
  const [filter, setFilter] = useState("");
  const [newItemText, setNewItemText] = useState<string>("");

  function newItemTextChangeNahdler(e: React.ChangeEvent<HTMLInputElement>) {
    setNewItemText(e.target.value);
  }

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);

  function handleAddTodo(text: string) {
    setTodos((prevTodos) => {
      const newTodo = {
        id: uuid(),
        text: text,
        completed: false,
      };
      setNewItemText("");
      return [...prevTodos, newTodo];
    });
  }

  function handleDelete(id: number) {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo.id !== id);
      return newTodos;
    });
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo(newItemText);
    }
  };

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    handleAddTodo,
    handleDelete,
    newItemText,
    newItemTextChangeNahdler,
    handleInputKeyPress,
  };
}

export function uuid() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  const id = `${timestamp}${random}`;
  return parseInt(id);
}
