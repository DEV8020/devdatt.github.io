import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 px-6 py-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold">Devdatt Datar</h1>

      <div className="space-x-6 font-medium">
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
        <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
        <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </motion.nav>
  );
}
