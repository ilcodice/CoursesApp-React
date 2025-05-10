import React from 'react'
import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Coodinfg School</h1>
           <NavLink to="/Courses" className='border-1 rounded-2xl px-4 text-2xl bg-amber-50 border-gray-400 hover:bg-emerald-200 dark:text-black'>Go To Courses</NavLink>

    </div>
  )
}
