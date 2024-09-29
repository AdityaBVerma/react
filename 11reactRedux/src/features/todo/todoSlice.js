import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=> {
            state.todos = state.todos.filter( (todo) => ( todo.id !== action.payload ) )
        },
        updateTodo: (state, action ) => {
            state.todos = state.todos.map((todo)=> ( todo.id === action.payload.id?{...todo, text : action.payload.text }: todo ))
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map((todo)=> (todo.id===action.payload? {...todo,completed: !todo.completed }: todo))
        },
        setTodo: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const  {addTodo, removeTodo, updateTodo, toggleCompleted, setTodo } = todoSlice.actions

export default todoSlice.reducer