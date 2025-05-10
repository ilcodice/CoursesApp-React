import React from "react";
import { useParams } from "react-router-dom";
import Python from "./courses/Python"; 
import JavaScript from "./courses/JavaScript";
import C from "./courses/C";
import CPlus from "./courses/CPlus";
import PHP from "./courses/PHP";
import Java from "./courses/Java"


export default function CoursePage() {
  const { slug } = useParams();
  const courseKey = slug?.toLowerCase(); // Handle case sensitivity

  const courseComponents = {
    python: <Python />,
    javascript: <JavaScript />,
    c: <C />,
    cplus: <CPlus />,
    php: <PHP />,
    java: <Java />,
  };

  // Fallback for unknown slug
  const SelectedCourse = courseComponents[courseKey] || (
    <div className="text-2xl text-red-600 p-10">Course not found</div>
  );

  return (
    <div className="mx-10 my-10">
      {SelectedCourse}
    </div>
  );
}