import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        pt-24 pb-24 px-6
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-black
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            inline-flex items-center gap-2 
            rounded-full px-3 py-1
            border border-gray-200 dark:border-gray-800 
            text-xs text-gray-500 dark:text-gray-400 
            mb-6
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>About Me</span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
    text-3xl md:text-4xl font-bold mb-10 
    bg-gradient-to-r from-blue-600 to-indigo-600 
    bg-clip-text text-transparent 
    dark:from-blue-400 dark:to-indigo-300
    leading-snug md:leading-relaxed
  "
        >
          Crafting secure, scalable digital health & cloud solutions.
        </motion.h2>


        {/* TWO COLUMN GRID */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-[2fr,1fr]"
        >

          {/* LEFT CONTENT */}
          <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              I’m a Full-Stack Developer and Cloud Data Engineer experienced in building
              production-grade systems across web, mobile, and cloud environments. My work
              spans React, React Native, Spring Boot, and Azure cloud technologies.
            </p>

            <br />

            <p>
              At NIMHANS (E-Health Research Center), I develop secure digital health
              platforms—including <span className="font-semibold">MindNotes</span> and
              <span className="font-semibold"> Push-D</span>—used to deliver real-world
              mental health support at scale.
            </p>

            <br />

            <p>
              I enjoy taking ideas from concept to deployment: API design, cloud architecture,
              frontend engineering, and building scalable backend systems with strong security
              principles.
            </p>
          </div>

          {/* RIGHT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="
              p-6 rounded-2xl
              bg-white/50 dark:bg-gray-900/40
              backdrop-blur-md shadow-lg
              border border-gray-200/40 dark:border-gray-800/40
              text-sm space-y-4
            "
          >
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">
                Current Role
              </div>
              <div className="font-medium text-gray-700 dark:text-gray-200">
                Full-Stack Developer @EHRC (E-Health Research Center) IIIT Bangalore
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">
                Location
              </div>
              <div className="font-medium text-gray-700 dark:text-gray-200">
                Bangalore, India
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">
                Education
              </div>
              <div className="font-medium text-gray-700 dark:text-gray-200">
                M.Tech CS — IIIT Bangalore
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400">
                Focus Areas
              </div>
              <div className="font-medium text-gray-700 dark:text-gray-200">
                Digital Health, Cloud Data, Secure Backends
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
