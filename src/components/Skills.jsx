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
      className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100
      dark:bg-gradient-to-br dark:to-black dark:via-gray-950 dark:from-gray-900 "
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
          <span>Skills</span>
        </motion.div>

        {/* Heading */}
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
          Tools & technologies I work with every day.
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="
                p-6 rounded-2xl
                bg-white/60 dark:bg-white/5 
                backdrop-blur-md
                border border-gray-200/60 dark:border-gray-800/60
                shadow-sm
              "
            >
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4 uppercase tracking-wide">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="
                      text-xs px-3 py-1.5 rounded-full
                      bg-gray-100 dark:bg-gray-900
                      border border-gray-300 dark:border-gray-700
                      text-gray-700 dark:text-gray-300
                      shadow-sm
                    "
                  >
                    {item}
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
