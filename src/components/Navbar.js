import { useSelector } from 'react-redux';
import { todoSeclector } from '../store/reducers/todosReducer';
function Navbar() {
    const todos = useSelector(todoSeclector);

    return (
        <div className="navbar">
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total Todos: {todos.length}</li>
            </ul>
        </div>
    );
}

export default Navbar;
