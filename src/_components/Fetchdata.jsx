import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from './CoursesQuery';

export default function Courses() {
  const { data, status } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-gray-700/40 dark:to-gray-900">
        <p className="text-white text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-gray-700/40 dark:to-gray-900">
        <p className="text-red-500 text-xl">Error fetching data</p>
      </div>
    );
  }

  if (!Array.isArray(data)) { 
    console.log("Fetched data:", data);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-gray-700/40 dark:to-gray-900">
        <p className="text-white text-xl">No valid data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-emerald-900 to-teal-500 dark:from-gray-700/40 dark:to-gray-900">
      <h1 className='text-4xl font-extrabold text-center text-white dark:text-amber-300 mb-10'>
        Our Courses
      </h1>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
        {data.map((course) => (
          <div
            key={course.id}
            className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <p className='text-2xl font-bold text-amber-300 mb-2'>{course.title}</p>
            <p className='text-white/90 dark:text-gray-300 mb-2'>{course.description}</p>
            <p className='text-white/70 dark:text-gray-400'>Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
