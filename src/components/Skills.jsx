import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python", "C/C++"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["ReactJS", "React Native", "Spring Boot", "Angular"],
  },
  {
    title: "Cloud & Data",
    items: ["Azure", "Databricks", "Azure Data Factory", "Delta Lake", "Azure SQL"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Jenkins", "Docker", "CI/CD", "Linux", "JUnit", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
              <span>Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight dark:text-gray-100">
              Tools I work with every day.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 
                         bg-white/70 dark:bg-black/40"
            >
              <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 
                               text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900"
                  >
                    {item}
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
