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

  const courseComponents = {
    python: <Python />,
    javascript: <JavaScript />,
    c: <C />,
    cplus: <CPlus />,
    php: <PHP/>,
    java: <Java/>

  };

  return courseComponents[slug]; 
}
