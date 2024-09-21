import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
    <div className="flex justify-between items-center min-h-screen bg-gray-100">
      <div className="w-1/2 flex justify-center">
        <Login />
      </div>
      <div className="w-1/2 flex justify-center">
        <Profile />
      </div>
    </div>
    </UserContextProvider>
  )
}

export default App
