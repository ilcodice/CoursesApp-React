import React from 'react';
import { Linkedin, Github, Globe, Mail, Smartphone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-500 dark:from-gray-700/40 dark:to-gray-900 p-6">
      
      <div className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md rounded-2xl shadow-lg p-10 w-full max-w-md text-center transition-all">
        <h1 className="text-4xl font-extrabold text-white dark:text-amber-300 mb-6">
          Contact <span className="text-amber-300">Me</span>
        </h1>

        <p className="text-white/90 dark:text-gray-300 mb-6">
          Feel free to reach out through any of the following channels:
        </p>

        <div className="flex flex-col gap-5 text-left">
          {/* Mobile */}
          <p className="text-white/90 dark:text-gray-300 flex items-center gap-3 text-lg">
            <Smartphone className="w-6 h-6 text-green-400" />
            <a href="tel:+4915901605307" className="underline hover:text-amber-300">
              015901605307
            </a>
          </p>

          {/* Email */}
          <p className="text-white/90 dark:text-gray-300 flex items-center gap-3 text-lg">
            <Mail className="w-6 h-6 text-red-400" />
            <a href="mailto:d.delshadseyda@gmail.com" className="underline hover:text-amber-300">
              d.delshadseyda@gmail.com
            </a>
          </p>

          {/* LinkedIn */}
          <p className="text-white/90 dark:text-gray-300 flex items-center gap-3 text-lg">
            <Linkedin className="w-6 h-6 text-blue-400" />
            <a href="https://linkedin.com/in/delshad-ibrahim-delo" target="_blank" rel="noreferrer" className="underline hover:text-amber-300">
              LinkedIn
            </a>
          </p>

          {/* GitHub */}
          <p className="text-white/90 dark:text-gray-300 flex items-center gap-3 text-lg">
            <Github className="w-6 h-6 text-white" />
            <a href="https://github.com/ilcodice" target="_blank" rel="noreferrer" className="underline hover:text-amber-300">
              GitHub
            </a>
          </p>

          {/* Portfolio */}
          <p className="text-white/90 dark:text-gray-300 flex items-center gap-3 text-lg">
            <Globe className="w-6 h-6 text-amber-300" />
            <a href="https://delshad-portfolio.netlify.app/" target="_blank" rel="noreferrer" className="underline hover:text-amber-300">
              Portfolio
            </a>
          </p>
        </div>
      </div>

    </div>
  );
}
