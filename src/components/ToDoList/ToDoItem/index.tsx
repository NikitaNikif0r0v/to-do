import { ItemListProps } from '../types';

export function ItemList(props: ItemListProps) {
    const { todo, handleDelete, completeTodoTask } = props;

    return (
        <li key={todo.id}>
            <input type='checkbox' checked={todo.completed} onChange={() => completeTodoTask(todo)} id='itemStatus' />
            <label htmlFor='itemStatus'>{todo.text}</label>
            <button onClick={() => handleDelete}>Delete</button>
        </li>
    );
}
