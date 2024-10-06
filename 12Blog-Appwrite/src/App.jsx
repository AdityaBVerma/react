import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <>
    <Header />
      <h4>Jay Ganesh</h4>
      <h1>This is a blogging platform made with appwrite</h1>
      <main>
        {/* <Outlet /> */}
      </main>
    <Footer />
    </>
  ) : null
}

export default App
