import { useState } from "react";

import { TodoItem } from "./types";

export function useToDoItem(todo: TodoItem) {
  const [checked, setChecked] = useState<boolean>(todo.completed || false);

  return {
    checked,
    setChecked,
  };
}
