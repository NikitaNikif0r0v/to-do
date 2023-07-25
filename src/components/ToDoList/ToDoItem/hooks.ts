import { useState } from "react";

import { TodoItem } from "./types";

interface ToDoItemData {
  checked: boolean;
  completeTodoTask: (todo: TodoItem) => void;
}

export function useToDoItem(todo: TodoItem): ToDoItemData {
  const [checked, setChecked] = useState<boolean>(todo.completed || false);

  function completeTodoTask(todo: TodoItem) {
    setChecked((prevState) => !prevState);
  }

  return {
    checked,
    completeTodoTask,
  };
}
