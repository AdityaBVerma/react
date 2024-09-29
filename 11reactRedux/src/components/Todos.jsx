import { useDispatch, useSelector } from "react-redux"
import { removeTodo, toggleCompleted, updateTodo } from "../features/todo/todoSlice"
import { useState } from "react"

export default function Todos ({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [updatedText, setUpdatedText ] = useState(todo.text)

    const dispatch = useDispatch()
    const updateHandler = ()=> {
        dispatch(updateTodo({ id: todo.id, text: updatedText }))
        setUpdatedText('')
        setIsTodoEditable(prev => !prev)
    }
    return (
    <>
        <div className={`flex items-center justify-between p-4 rounded-lg ${
                todo.completed ? "bg-gradient-to-r from-green-200 to-green-300" : " bg-gray-900"
            } shadow mb-4`}>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleCompleted(todo.id))}
                    className="mr-4 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <input
                    type="text"
                    readOnly={!isTodoEditable}
                    value={isTodoEditable ? updatedText : todo.text}
                    onChange={(e) => setUpdatedText(e.target.value)}
                    className={`border border-gray-300 p-2 rounded-lg ${todo.completed ? "line-through text-gray-400" : ""} focus:outline-none focus:ring-2 ${isTodoEditable ? "bg-white" : "bg-gray-800 text-white"}`}
                    placeholder="Enter todo text..."
                />
            </div>
            <div className="flex items-center ml-4">
                <button
                    onClick={() => {
                        if (todo.completed) return;
                        isTodoEditable ? updateHandler() : setIsTodoEditable(prev => !prev);
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${isTodoEditable ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                >
                    {isTodoEditable ? "Save" : "Edit"}
                </button>
                <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="ml-2 text-red-500 hover:text-red-600 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </>
    )
}