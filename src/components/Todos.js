import { useSelector } from 'react-redux';
import { todoSeclector, markCompleted, deleteTodos, todoResponse } from '../store/reducers/todosReducer';
import { useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import { useEffect } from 'react';

function Todos() {
    const todos = useSelector(todoSeclector);
    const ditpatch = useDispatch();

    const handleCheck = (id) => {
        ditpatch(markCompleted(id));
    };

    const handleDelete = (id) => {
        ditpatch(deleteTodos(id));
    };

    useEffect(() => {
        ditpatch(todoResponse());
    }, [ditpatch]);

    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={handleCheck.bind(this, todo.id)}
                        ></input>
                        <button onClick={handleDelete.bind(this, todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
