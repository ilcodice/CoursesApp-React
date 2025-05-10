import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from './CoursesQuery';

export default function Courses() {
  const { data, status } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>Error fetching data</p>;
  }
  if (!data || !Array.isArray(data)) { 
    return <p>No valid data found</p>;
  }

  return (
    <div>
      <h1 className='text-2xl text-center m-5 text-amber-500'>Our Courses</h1>

      <div className='grid grid-cols-3 gap-5'>
      {data.map((course) => (
        <div key={course.id} className="p-5 border-1 rounded-2xl">
          <p className='text-2xl text-center text-amber-300'>{course.title}</p>
          <p>Description: {course.description}</p>
          <p>Deuration: {course.duration}</p>
        </div>
      ))}
    </div>

    </div>

  );
}
