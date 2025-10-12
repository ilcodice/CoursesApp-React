import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-500 dark:from-gray-800 dark:to-gray-900 p-6">
      
      <div className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-3xl text-center transition-all">
        <h1 className="text-4xl font-extrabold text-white dark:text-amber-300 mb-6">
          About <span className="text-amber-300">Coding School</span>
        </h1>

        <p className="text-white/90 dark:text-gray-300 mb-4">
          At Coding School, we are passionate about empowering aspiring developers
          with the skills and knowledge they need to succeed in the tech industry.
          Our courses are carefully designed to combine theory with practical projects.
        </p>

        <p className="text-white/90 dark:text-gray-300 mb-6">
          Whether you are starting from scratch or looking to advance your programming
          skills, our curriculum covers a wide range of languages and technologies,
          including Python, JavaScript, C, C++, PHP, and Java.
        </p>

        <p className="text-white/90 dark:text-gray-300 mb-6">
          Join our community of learners and start your coding journey today!
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/courses"
            className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold hover:bg-amber-300 hover:text-black transition-all"
          >
            View Courses
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold hover:bg-emerald-300 hover:text-black transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
}
