import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../../data/Data'


export const userSlice = createSlice({
    name: 'users',
    initialState: userList,

    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const findInput = state.find((user) => user.id == id)

            if (findInput) {
                findInput.name = name;
                findInput.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const findInput = state.find((user) => user.id == id)

            if (findInput) {
                return state.filter((f) => f.id !== id)
            }
        }
    },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer;