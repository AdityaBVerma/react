import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

export default function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
    <>
    <form onSubmit={handleAddTodo} className="flex flex-col gap-4">
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo..."
        className="w-full p-3 text-white bg-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
    >
        Add Todo
    </button>
    </form>
    </>
    )
}