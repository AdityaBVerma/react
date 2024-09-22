import { useState } from "react"
import { useTodo } from "../context/TodoContext"

export default function TodoItem ({todo}) {
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable ] = useState(false)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggle = () => {
        toggleComplete(todo.id)
    }

    return (
    <>
    
        <div
            className={`flex items-center border border-transparent rounded-lg px-4 py-2 gap-x-3 shadow-lg duration-300 transform hover:scale-105 ${
                todo.completed ? "bg-gradient-to-r from-green-200 to-green-300" : "bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"
            }`}
        >
        {/* Checkbox */}
        <input
            type="checkbox"
            className="cursor-pointer w-5 h-5 accent-green-500 rounded-lg transition-transform transform hover:scale-110"
            checked={todo.completed}
            onChange={toggle}
        />

        {/* Todo Text Input */}
        <input
            type="text"
            className={`w-full border-none outline-none bg-transparent rounded-lg font-medium text-gray-800 transition-colors duration-300 ${
                isTodoEditable ? "px-3 py-1 bg-white/70 text-gray-900" : "text-gray-700"
            } ${todo.completed ? "line-through text-gray-400" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />

        {/* Edit, Save Button */}
        <button
            className={`flex items-center justify-center w-9 h-9 rounded-full border border-transparent shadow-md transition-all duration-300 transform hover:scale-110 ${
                todo.completed
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-yellow-400 hover:bg-yellow-500 text-black"
            } disabled:opacity-50`}
            onClick={() => {
                if (todo.completed) return;
                isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
        >
            {isTodoEditable ? "📁" : "✏️"}
        </button>

        {/* Delete Todo Button */}
        <button
            className="flex items-center justify-center w-9 h-9 rounded-full border border-transparent shadow-md bg-red-400 hover:bg-red-500 text-white transition-transform transform hover:scale-110"
            onClick={() => deleteTodo(todo.id)}
        >
            ❌
        </button>
    </div>
</>

    )
}