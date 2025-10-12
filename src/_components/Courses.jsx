import React from 'react';
import data from '../data.json';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-emerald-900 to-teal-500 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-6xl font-extrabold text-white dark:text-amber-300 mb-10 text-center">
        Courses
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {data.map((course) => (
          <div
            key={course.slug}
            className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:scale-105"
          >
            <img className="w-20 h-20 mb-4" src={course.logo} alt={course.name} />
            <h2 className="text-2xl font-bold text-white dark:text-amber-300 mb-2">
              {course.name}
            </h2>
            <p className="text-white/90 dark:text-gray-300 mb-2">{course.description}</p>
            <p className="text-white/70 dark:text-gray-400 mb-4">{course.startDate}</p>
            <NavLink
              to={`/courses/${course.name.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-white/20 text-white font-semibold hover:bg-amber-300 hover:text-black transition-all"
            >
              Go to course
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
