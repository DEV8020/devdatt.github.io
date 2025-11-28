import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-4"
      >
        Hi, I'm <span className="text-blue-600">Devdatt Datar</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-600"
      >
        Full-Stack Developer • Cloud Data Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-xl text-gray-500"
      >
        I build scalable, secure, and high-performance applications across mobile, 
        web, and cloud platforms.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
