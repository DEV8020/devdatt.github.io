import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-black"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
                         px-3 py-1 text-xs text-gray-500 dark:text-gray-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Contact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 dark:text-gray-100">
            Let’s work on something meaningful.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
            I’m open to roles in full-stack development, cloud data engineering, and 
            impactful digital health projects. Feel free to reach out for opportunities, 
            collaborations, or just a tech chat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="mailto:datardevdatt8020@gmail.com"
              className="px-5 py-2.5 rounded-lg text-sm font-medium 
                         bg-black text-white dark:bg-white dark:text-black
                         hover:opacity-90 transition"
            >
              Email Me
            </a>
            <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
              <a
                href="https://linkedin.com/in/devdatt-datar"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white"
              >
                LinkedIn
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://github.com/DEV8020"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            Based in Bangalore, India • Open to remote & relocation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
