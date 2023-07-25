export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export interface ItemListProps {
  todo: TodoItem;
  handleDelete: (id: number) => void;
}

export interface UseToDoData {
  todos: TodoItem[];
  filter: string;
  setFilter: (filter: string) => void;
  handleAddTodo: (text: string) => void;
  handleDelete: (id: number) => void;
  newItemText: string;
  newItemTextChangeNahdler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
