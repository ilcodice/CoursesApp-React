import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Code2, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/courses", label: "Courses" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="h-20 px-6 flex justify-between items-center bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-gray-700 dark:to-gray-800 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Code2 className="text-amber-100 w-8 h-8" />
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Coding<span className="text-amber-300">School</span>
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 items-center">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative px-3 py-1 text-white font-medium transition-all duration-300 hover:text-amber-200 ${
                isActive ? "text-amber-200" : ""
              }`
            }
          >
            {label}
            {({ isActive }) =>
              isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-amber-300 rounded-full"
                />
              )
            }
          </NavLink>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-all"
        >
          {theme === "dark" ? (
            <>
              <Sun className="w-5 h-5 text-yellow-300" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="w-5 h-5 text-blue-200" />
              <span>Dark</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-gray-700 dark:to-gray-800 shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-40">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:text-amber-200 ${
                  isActive
                    ? "text-amber-200 bg-white/20 dark:bg-gray-800/40"
                    : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Theme toggle inside mobile menu */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-5 h-5 text-yellow-300" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-blue-200" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
