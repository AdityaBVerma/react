import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todos: "this is a todo",
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {} 
})

export const useTodo  = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider