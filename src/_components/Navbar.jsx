import React from 'react'
import { NavLink } from 'react-router'
import { useTheme } from './ThemeContext' // make sure the path is correct

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <div className='h-20 bg-blue-300 flex justify-between items-center px-4'>
      <h1 className='text-2xl text-red-500 font-extrabold'>Coding School</h1>
      <div className='flex gap-2'>
        <NavLink to="/" className='border-1 rounded-2xl px-3 bg-amber-50 border-gray-400 hover:bg-emerald-300'>Home</NavLink>
        <NavLink to="/About" className='border-1 rounded-2xl px-3 bg-amber-50 border-gray-400 hover:bg-emerald-200'>About</NavLink>
        <button
          onClick={toggleTheme}
          className='ml-4 px-3 py-1 rounded-2xl bg-gray-700 text-white hover:bg-gray-600 transition'
        >
          Change Mode
        </button>
      </div>
    </div>
  )
}
