import s from './toDoList.module.css';
import { useTodos } from './hooks';

import { TodoItem } from './TodoItem';
import { TodoItemData } from './TodoItem/types';

export function TodoList() {
    const {
        todos,
        setFilter,
        handleAddTodo,
        handleDelete,
        newItemText,
        newItemTextChangeNahdler,
        handleInputKeyPress,
        completeTodoTask,
    } = useTodos();

    return (
        <div className={s.layout}>
            <div className={s.container}>
                <h2>To-dos:</h2>
                <input type='text' placeholder='Filter the elements' onChange={(e) => setFilter(e.target.value)} />

                <input
                    onChange={(e) => newItemTextChangeNahdler(e)}
                    type='text'
                    placeholder='Add new task'
                    value={newItemText}
                    onKeyDown={handleInputKeyPress}
                />
                <button onClick={() => handleAddTodo(newItemText)} type='submit'>
                    Add
                </button>

                <ul>
                    {todos.map((todo: TodoItemData) => (
                        <TodoItem
                            key={todo.id}
                            completeTodoTask={completeTodoTask}
                            todo={todo}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
