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
    <section id="experience" className="py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
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
              <span>Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight dark:text-gray-100">
              Where I’ve been recently.
            </h2>
          </div>
        </motion.div>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-6 pb-10"
            >
              <span className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-emerald-500" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {exp.role}
              </h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {exp.company} • {exp.location}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {exp.period}
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[3px] rounded-full bg-gray-400 dark:bg-gray-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
