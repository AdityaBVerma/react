import { useState } from 'react'

function App() {
  const [color, setColor] = useState("cyan")

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center fixed top-0 left-0 transition-all duration-300" style={{ backgroundColor: color }}>
      <div className="space-x-4 bg-slate-200 p-3 rounded-xl">
        <button
          onClick={() => setColor("red")}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded shadow-md transform transition-transform duration-300 hover:scale-110 active:scale-95 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-md transform transition-transform duration-300 hover:scale-110 active:scale-95 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-6 py-3 bg-purple-500 text-white font-semibold rounded shadow-md transform transition-transform duration-300 hover:scale-110 active:scale-95 hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded shadow-md transform transition-transform duration-300 hover:scale-110 active:scale-95 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-6 py-3 bg-black text-white font-semibold rounded shadow-md transform transition-transform duration-300 hover:scale-110 active:scale-95 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Black
        </button>
      </div>
    </div>
  )
  
  
}

export default App
