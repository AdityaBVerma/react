import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

export default function () {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
                
                <input 
                value={username} 
                type="text" 
                onChange={(e)=>setUserName(e.target.value)} 
                placeholder="User Name" 
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <input 
                value={password} 
                type="password" 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder="Password" 
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <button 
                type="submit" 
                onClick={handleSubmit} 
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                >
                Login
                </button>
            </div>
            </div>
        </>
    )
}