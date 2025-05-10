import React from 'react'
import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className='flex flex-col w-3/12 gap-5 ml-5'>
      <h1 className='mt-5 text-xl'>Welcome to the Coodinfg School</h1>
      <NavLink to="/Courses" className='border-1 rounded-2xl px-4 text-2xl bg-amber-50 border-gray-400 hover:bg-emerald-200 dark:text-black'>Go To Courses</NavLink>
      <NavLink to="/server-courses" className='border-1 rounded-2xl px-4 text-2xl bg-amber-50 border-gray-400 hover:bg-emerald-200 dark:text-black'>Courses from Server</NavLink>
    </div>
  )
}
