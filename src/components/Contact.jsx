import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950"
    >
      <div className="max-w-3xl mx-auto">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            inline-flex items-center gap-2 
            rounded-full border border-gray-200 dark:border-gray-800 
            px-3 py-1 text-xs text-gray-500 dark:text-gray-400 
            mb-4 mx-auto
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>Contact</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl font-bold text-center mb-6
            bg-gradient-to-r from-blue-600 to-indigo-600 
            bg-clip-text text-transparent
            dark:from-blue-400 dark:to-indigo-300
          "
        >
          Let’s work on something meaningful.
        </motion.h2>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            p-8 rounded-2xl mt-8
            bg-white/60 dark:bg-white/5 
            backdrop-blur-md
            border border-gray-200/60 dark:border-gray-800/60
            shadow-sm text-center
          "
        >
          {/* Summary */}
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            I’m open to roles in full-stack development, cloud data engineering, and 
            impactful digital health products. Whether it’s an opportunity, 
            collaboration, or a tech chat — I’d love to connect.
          </p>

          {/* PRIMARY ACTION BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:datardevdatt8020@gmail.com"
            className="
              inline-flex items-center gap-2 
              px-6 py-3 rounded-lg font-medium text-sm
              text-white dark:text-black
              bg-gradient-to-r from-blue-600 to-indigo-600
              dark:from-gray-200 dark:to-white
              shadow-lg shadow-blue-500/20
              hover:shadow-xl transition
            "
          >
            <FiMail className="text-lg" />
            Email Me
          </motion.a>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 mt-8 text-gray-600 dark:text-gray-300">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com/in/devdatt-datar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiLinkedin className="text-xl" />
              <span className="text-sm">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/DEV8020"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-black dark:hover:text-white"
            >
              <FiGithub className="text-xl" />
              <span className="text-sm">GitHub</span>
            </motion.a>
          </div>

          {/* FOOTNOTE */}
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
            Based in Bangalore, India • Open to remote & relocation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
