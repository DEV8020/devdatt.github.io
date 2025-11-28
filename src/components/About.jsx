import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="pt-28 pb-16 px-4 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
                     px-3 py-1 text-xs text-gray-500 dark:text-gray-400 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>About</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 dark:text-gray-100"
        >
          Building secure and scalable digital health & cloud solutions.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-[2fr,1fr]"
        >
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            I’m a Full-Stack Developer and Cloud Data Engineer with experience building 
            production-ready systems using React, React Native, Spring Boot and Azure.
            I currently work at NIMHANS (E-Health Research Center) on large-scale mental 
            health platforms like <span className="font-medium">MindNotes</span> and 
            <span className="font-medium"> Push-D</span>.
            <br /><br />
            I enjoy taking products from idea to deployment — designing APIs, modeling data,
            implementing frontend experiences, and deploying secure, scalable services.
          </p>

          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Current Role</div>
              <div>Full-Stack Developer @ NIMHANS</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Location</div>
              <div>Bangalore, India</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Education</div>
              <div>M.Tech CS — IIIT Bangalore</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Focus Areas</div>
              <div>Digital Health, Cloud Data, Secure Backends</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
