import React from "react";

export default function CPlus() {
  return (
    <div className="flex flex-col items-center text-center gap-6 text-white dark:text-gray-200">

      <h1 className="text-5xl font-extrabold text-amber-300 drop-shadow-md mt-4">
      ⚔️ C++ Course
      </h1>
      <p className="text-xl text-white/90 dark:text-gray-300">
        What you'll learn:
      </p>

      <ul className="text-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 w-full max-w-2xl shadow-lg list-disc list-inside space-y-2 text-left">
      <li>All C basics + Object-Oriented Programming</li>
        <li>Classes, inheritance, polymorphism</li>
        <li>Exception handling</li>
        <li>Lambda expressions</li>
      </ul>

      <p className="text-sm text-white/80 dark:text-gray-400 italic mt-4">
        Master the fundamentals of Python and build a strong foundation in programming.
      </p>
    </div>
  );
}