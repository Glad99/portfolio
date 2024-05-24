
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  // const [theme, setTheme] = useState('light')
  // const changeTheme = () => {
  //   setTheme("dark")
  // }

  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Project/>
      <Contact/>

      <Footer/>

      {/* <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes> */}
    </div>
  )
}

export default App
