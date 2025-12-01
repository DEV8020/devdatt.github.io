import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "E-Health Research Center, NIMHANS",
    location: "Bangalore, India",
    period: "Jul 2024 – Present",
    bullets: [
      "Building MindNotes and Push-D digital mental health platforms.",
      "Developing React Native and ReactJS frontends for patients and therapists.",
      "Designing Spring Boot microservices with secure authentication and HTTPS.",
      "Integrating Azure services for storage, data and deployment.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Thorogood Associates",
    location: "Bangalore, India",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Developed ETL pipelines with Azure Data Factory and Databricks.",
      "Integrated multiple data sources and ensured data quality and reliability.",
      "Collaborated with ML teams to deploy models into BI systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
                     px-3 py-1 text-xs text-gray-500 dark:text-gray-400 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>Experience</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl font-bold mb-16
            bg-gradient-to-r from-blue-600 to-indigo-600 
            bg-clip-text text-transparent 
            dark:from-blue-400 dark:to-indigo-300
          "
        >
          Where I’ve been recently.
        </motion.h2>

        {/* Vertical Timeline */}
        <div className="relative border-l border-gray-300/60 dark:border-gray-800 ml-4">

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-8 pb-14"
            >
              {/* Glowing Timeline Dot */}
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="
                  absolute -left-[10px] top-1
                  w-4 h-4 rounded-full 
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  shadow-[0_0_12px_rgba(99,102,241,0.5)]
                "
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                  p-6 rounded-xl
                  bg-white/60 dark:bg-white/5 
                  backdrop-blur-md
                  border border-gray-200/60 dark:border-gray-800/60
                  shadow-sm
                "
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role}
                </h3>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {exp.company} • {exp.location}
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {exp.period}
                </div>

                {/* Bullet List */}
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
