import React from 'react';
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-500 dark:from-gray-800 dark:to-gray-900 p-6">
      
      {/* Hero Section */}
      <div className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md rounded-2xl p-10 shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-white dark:text-amber-300 mb-6">
          Welcome to <span className="text-amber-300">Coding School</span>
        </h1>
        <p className="text-white/90 dark:text-gray-300 mb-8">
          Learn coding with interactive courses and real projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <NavLink
            to="/courses"
            className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold hover:bg-amber-300 hover:text-black transition-all"
          >
            Go To Courses
          </NavLink>
          <NavLink
            to="/server-courses"
            className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold hover:bg-emerald-300 hover:text-black transition-all"
          >
            Courses from Server
          </NavLink>
        </div>
      </div>
    </div>
  );
}
