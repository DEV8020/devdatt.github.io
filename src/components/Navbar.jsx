import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full border-b border-gray-200 dark:border-gray-800 
                 backdrop-blur bg-white/70 dark:bg-black/60 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-sm tracking-tight dark:text-gray-100">
            Devdatt Datar
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300">
            About
          </a>
          <a href="#skills" className="hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300">
            Skills
          </a>
          <a href="#experience" className="hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300">
            Experience
          </a>
          <a href="#projects" className="hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300">
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="ml-3 flex h-8 w-8 items-center justify-center rounded-full 
                       border border-gray-300 dark:border-gray-700
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
