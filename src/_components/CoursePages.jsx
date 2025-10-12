import React from "react";
import { useParams } from "react-router-dom";
import Python from "./courses/Python"; 
import JavaScript from "./courses/JavaScript";
import C from "./courses/C";
import CPlus from "./courses/CPlus";
import PHP from "./courses/PHP";
import Java from "./courses/Java";

export default function CoursePage() {
  const { slug } = useParams();
  const courseKey = slug?.toLowerCase();

  const courseComponents = {
    python: <Python />,
    javascript: <JavaScript />,
    c: <C />,
    cplus: <CPlus />,
    php: <PHP />,
    java: <Java />,
  };

  const SelectedCourse = courseComponents[courseKey] || (
    <div className="text-2xl text-red-600 p-10 text-center">
      Course not found
    </div>
  );

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-emerald-900 to-teal-500 dark:from-gray-800 dark:to-gray-900 p-6">
      <div className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md rounded-2xl shadow-lg w-full md:w-4/5 p-8 transition-all">
        {SelectedCourse}
      </div>
    </div>
  );
}
