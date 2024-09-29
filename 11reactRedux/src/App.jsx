import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useEffect } from 'react'
import { setTodo } from './features/todo/todoSlice'

function App() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"))
    if (todo && todo.length > 0) {
      dispatch(setTodo(todo))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-gray-800 p-10 rounded-lg shadow-lg space-y-10">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            Todo App
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <AddTodo />
            </div>
              {todos.map((todo) =>
                <div key={todo.id} className="bg-gray-700 p-6 rounded-lg shadow">
                <Todos todo={todo} />
                </div>)
              }            
          </div>
        </div>
      </div>
</>


  )
}

export default App
