import React from 'react';
import data from '../data.json';
import { useParams } from 'react-router';
import { NavLink } from 'react-router';

export default function Home() {
    let { slug } = useParams();
    console.log(slug)


    const pythonCourse = data[0];
    const javaCourse = data[1];
    const javaScriptcourse = data[2];
    const cCourse = data[3];
    const cplusCourse = data[4];
    const phpCourse = data[5];

  return (
    <div className='mx-20'>
      <h1 className='text-6xl' >Courses</h1>
        <div className='grid grid-cols-3 gap-5'>
            <div className=" p-5 border-1 rounded-2xl">
                <img className='w-[80px]' src={pythonCourse.logo} alt="" />
                <h2 className='text-2xl'>{pythonCourse.name}</h2>
                <p>{pythonCourse.description}</p>
                <p>{pythonCourse.startDate}</p>
                <NavLink to={`/courses/${ slug }`} className='border-1 border-blue-800 p-1 rounded-2xl '>Go to course</NavLink>
            </div>
            <div className=" p-5 border-1 rounded-2xl">
                <img className='w-[80px]' src={javaCourse.logo} alt="" />
                <h2 className='text-2xl'>{javaCourse.name}</h2>
                <p>{javaCourse.description}</p>
                <p>{javaCourse.startDate}</p>
                <NavLink to={`/courses/${ slug }`}  className='border-1 border-blue-800 p-1 rounded-2xl '>Go to course</NavLink>
            </div>
            <div className=" p-5 border-1 rounded-2xl">
                <img className='w-[80px]' src={javaScriptcourse.logo} alt="" />
                <h2 className='text-2xl'>{javaScriptcourse.name}</h2>
                <p>{javaScriptcourse.description}</p>
                <p>{javaScriptcourse.startDate}</p>
                <NavLink to={`/courses/${ slug }`}  className='border-1 border-blue-800 p-1 rounded-2xl '>Go to course</NavLink>
            </div>
            <div className=" p-5 border-1 rounded-2xl">
                <img className='w-[80px]' src={cCourse.logo} alt="" />
                <h2 className='text-2xl'>{cCourse.name}</h2>
                <p>{cCourse.description}</p>
                <p>{cCourse.startDate}</p>
                <NavLink to={`/courses/${ slug }`}  className='border-1 border-blue-800 p-1 rounded-2xl '>Go to course</NavLink>
            </div>
            <div className=" p-5 border-1 rounded-2xl">
                <img className='w-[80px]' src={cplusCourse.logo} alt="" />
                <h2 className='text-2xl'>{cplusCourse.name}</h2>
                <p>{cplusCourse.description}</p>
                <p>{cplusCourse.startDate}</p>
                <NavLink to={`/courses/${ slug }`}  className='border-1 border-blue-800 p-1 rounded-2xl '>Go to course</NavLink>
            </div>
            
            <div className=" p-5 border-1 rounded-2xl">
                <img className='w-[80px]' src={phpCourse.logo} alt="" />
                <h2 className='text-2xl'>{phpCourse.name}</h2>
                <p>{phpCourse.description}</p>
                <p>{phpCourse.startDate}</p>
                <NavLink to={`/courses/${ slug }`}  className='border-1 border-blue-800 p-1 rounded-2xl '>Go to course</NavLink>
            </div>

        </div>
    </div>
  );
}
