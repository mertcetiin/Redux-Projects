import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, setText } from '../features/todo/todoSlice'


function TodoForm() {

    const { text } = useSelector((state) => state.text)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setText(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo());
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={text}
                onChange={handleChange} />
            <button type='submit'>Add</button>

        </form>
    )
}

export default TodoForm;