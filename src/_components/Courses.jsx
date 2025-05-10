import React from 'react';
import data from '../data.json';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='mx-20'>
      <h1 className='text-6xl'>Courses</h1>
      

      <div className='grid grid-cols-3 gap-5'>
        {data.map((course) => (
          <div key={course.slug} className="p-5 border-1 rounded-2xl">
            <img className='w-[80px]' src={course.logo} alt={course.name} />
            <h2 className='text-2xl'>{course.name}</h2>
            <p>{course.description}</p>
            <p>{course.startDate}</p>
            <NavLink 
              to={`/courses/${course.name.toLowerCase()}`} 
              className='border-1 border-blue-800 p-1 rounded-2xl'
            >
              Go to course
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
