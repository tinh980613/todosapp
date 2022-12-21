import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../store/reducers/todosReducer';

function TodoForm() {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodos(title));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={title}></input>
            <input type="submit" value="Add"></input>
        </form>
    );
}

export default TodoForm;
