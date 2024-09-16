import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [isNumberAllowed, setIsNumberAllowed ] = useState(false)
  const [isCharAllowed, setIsCharAllowed ] = useState(false)
  const [length, setLength ] = useState(8)
  const passwordRef = useRef(undefined)

  const handleCopy = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(passwordRef.current.value)
  }, [length, isNumberAllowed, isCharAllowed, setPassword])

  const handleChange = useCallback(()=>{
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    let pass = ""
    if (isNumberAllowed) str+="123456789"
    if (isCharAllowed) str+="!@#$"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, isNumberAllowed, isCharAllowed, setPassword])

  useEffect(()=>{handleChange()}, [length, isNumberAllowed, isCharAllowed])

  return (
    <>
  <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto mt-10">
    {/* Password Input and Copy Button */}
    <div className="flex items-center space-x-3">
      <input
        type="text"
        placeholder="Password"
        value={password}
        readOnly
        ref={passwordRef}
        className="border border-gray-300 bg-white text-gray-700 rounded-lg px-4 py-2 w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      />
      <button
        onClick={handleCopy}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Copy
      </button>
    </div>

    {/* Range Input and Labels */}
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center w-full">
        <input
          type="range"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label className="text-gray-700 mt-2 font-medium">Length: {length}</label>
      </div>

      {/* Checkbox Options */}
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isNumberAllowed}
            onChange={() => setIsNumberAllowed(prev => !prev)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition"
          />
          <label className="text-gray-700 font-medium">Number</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isCharAllowed}
            onChange={() => setIsCharAllowed(prev => !prev)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition"
          />
          <label className="text-gray-700 font-medium">Character</label>
        </div>
      </div>
    </div>
  </div>
</>



  )
}

export default App
