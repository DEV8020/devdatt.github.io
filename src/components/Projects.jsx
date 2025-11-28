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
      className="py-16 px-4 bg-gray-50 dark:bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
                           px-3 py-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight dark:text-gray-100">
              Some things I’ve shipped.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 
                         bg-white/80 dark:bg-black/40 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-400">
                  {project.role}
                </div>
                <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-gray-100">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {project.summary}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-900 
                               text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
