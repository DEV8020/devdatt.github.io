import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-br from-blue-50 via-white to-blue-100 
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black">

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <img
          src={profile}
          alt="Devdatt Profile"
          className="w-40 h-40 object-cover rounded-full shadow-xl ring-4 ring-blue-500/30 dark:ring-blue-400/40"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 
        dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
      >
        Hi, I'm Devdatt Datar
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-semibold text-gray-700 dark:text-gray-300"
      >
        Full-Stack Developer • Cloud Data Engineer
      </motion.h2>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        I build scalable, secure, and high-performance applications across mobile, web, 
        and cloud platforms. Passionate about modern development, Cloud Architecture, 
        and crafting seamless user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg text-white font-semibold 
          bg-gradient-to-r from-blue-600 to-indigo-600 
          hover:shadow-lg hover:scale-105 transition transform shadow-md"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 
          dark:border-blue-400 dark:text-blue-300
          hover:bg-blue-50 dark:hover:bg-gray-800
          transition shadow-sm hover:shadow-md hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
