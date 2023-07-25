import { TodoItemData } from './TodoItem/types';

export interface ItemListProps {
    todo: TodoItemData;
    handleDelete: (id: number) => void;
    completeTodoTask: (todo: TodoItemData) => void;
}

export interface UseToDoData {
    todos: TodoItemData[];
    filter: string;
    setFilter: (filter: string) => void;
    handleAddTodo: (text: string) => void;
    handleDelete: (id: number) => void;
    newItemText: string;
    newItemTextChangeNahdler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    completeTodoTask: (todo: TodoItemData) => void;
}
