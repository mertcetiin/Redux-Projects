import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    text: '',
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        setText: (state, action) => {
            state.text = action.payload
        },

        addTodo: (state) => {
            state.todos.push(state.text);
            state.text = '';
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo !== action.payload)
        }
    },
});

export const { setText, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
