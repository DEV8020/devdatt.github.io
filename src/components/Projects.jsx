import { motion } from "framer-motion";

const projects = [
  {
    name: "MindNotes",
    role: "Full-Stack Developer",
    tech: ["React Native", "Spring Boot", "Firebase", "Azure Blob Storage"],
    summary:
      "Self-help mental wellness app under NIMHANS with 1L+ downloads, enabling users to track and manage day-to-day mental health.",
  },
  {
    name: "Push-D",
    role: "Full-Stack + Cloud",
    tech: ["ReactJS", "React Native", "Spring Boot", "Azure SQL", "JWT"],
    summary:
      "Universal self-help platform for depression with patient modules, diagnosis flows, progress tracking and a dedicated therapist portal.",
  },
  {
    name: "AgroBidz",
    role: "Backend & DevOps",
    tech: ["ReactJS", "Spring Boot", "Docker", "Jenkins"],
    summary:
      "Farmer-centric real-time auction platform with microservices and CI/CD for faster, reliable deployments.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-[#050505] dark:to-black"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
                     px-3 py-1 text-xs text-gray-500 dark:text-gray-400 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>Projects</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl font-bold mb-12
            bg-gradient-to-r from-blue-600 to-indigo-600 
            bg-clip-text text-transparent
            dark:from-blue-400 dark:to-indigo-300
          "
        >
          Some things I’ve shipped.
        </motion.h2>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="
                p-6 rounded-2xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-md 
                shadow-sm border border-gray-200/60 dark:border-gray-800/60
                hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700
                transition-all duration-300 flex flex-col justify-between
              "
            >
              <div>
                {/* Role */}
                <div className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  {project.role}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-gray-100">
                  {project.name}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + i * 0.03 }}
                    className="
                      text-[11px] px-2.5 py-1 rounded-full 
                      bg-gray-100 dark:bg-gray-900
                      text-gray-700 dark:text-gray-200
                      border border-gray-200 dark:border-gray-700
                      shadow-sm
                    "
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
