import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

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
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <Todos />
            </div>
          </div>
        </div>
      </div>
</>


  )
}

export default App
