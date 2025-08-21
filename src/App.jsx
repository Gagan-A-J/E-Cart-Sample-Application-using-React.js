import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import UserCart from './components/UserCart'
import UserProfile from './components/UserProfile'
import Nav from './components/Nav'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { useState } from 'react'
import store from './store/EkartStore'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(store.getState().user.isLoggedIn);

  store.subscribe(()=>{
    setIsLoggedIn(store.getState().user.isLoggedIn);
  })
  return (
    <>
    <BrowserRouter>
    {isLoggedIn&&<Nav/>}
      <Routes>
        <Route path='/' element={isLoggedIn?<Home/>:<Login/>}/>
        <Route path='/home' element={isLoggedIn?<Home/>:<Login/>}/>
        <Route path='/login' element={isLoggedIn?<Home/>:<Login/>}/>
        <Route path='/cart' element={isLoggedIn?<UserCart/>:<Login/>}/>
        <Route path='/my-profile' element={isLoggedIn?<UserProfile/>:<Login/>}/>
        <Route path='/about' element={isLoggedIn?<About/>:<Login/>}/>
        <Route path='/contact' element={isLoggedIn?<Contact/>:<Login/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
