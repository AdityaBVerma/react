import { useState } from "react"
import { useTodo } from "../context/TodoContext"

export default function TodoForm () {
    const [todo, setTodo ] = useState("")

    const {addTodo} = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!todo) return
        addTodo(todo)
        setTodo("")
    }

    return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <div className="flex items-center space-x-4">
            <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new task..."
            className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
            >
            Add
            </button>
        </div>
    </form>
    )
}