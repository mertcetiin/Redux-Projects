import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

function ListForm() {
    const { todos } = useSelector((state) => state.todos);

    const dispatch = useDispatch()

    const handleDelete = (todo) => {
        dispatch(deleteTodo(todo))
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <p>{todo}</p>
                    <button onClick={() => handleDelete(todo)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ListForm;
