import { useState } from 'react'
import { Route, Routes} from "react-router";
import './App.css'
import Home from './_components/Home'
import Navbar from './_components/Navbar'
import About from './_components/About'
import Courses from './_components/Courses'
import CoursePage from './_components/CoursePages';
import { useTheme } from './_components/ThemeContext'
import Fetchdata from './_components/Fetchdata'


function App() {
  const { theme } = useTheme(); // Get the theme from context


  return (
    <>


    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path="/courses/:slug" element={<CoursePage />}/>
        <Route path="/server-courses" element={<Fetchdata />}/>


      </Routes>
        

    </div>
  
    </>
  )
}

export default App
