import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: "1", text: 'Hello', isEditing: false}],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEditing: false,
            }

            state.todos = Array.isArray(state.todos) ? state.todos : []
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = Array.isArray(state.todos) ? state.todos : []
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const { id, text, isEditing } = action.payload
            
            state.todos = Array.isArray(state.todos) ? state.todos : []
            const todoIndex = state.todos.findIndex((todo) => todo.id === id)
            if (todoIndex !== -1) {
                if (text !== undefined) {
                    state.todos[todoIndex].text = text;
                }
                if (isEditing !== undefined) {
                    state.todos[todoIndex].isEditing = isEditing;
                }
            }
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer