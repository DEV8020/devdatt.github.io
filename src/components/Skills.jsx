import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Java", "JavaScript", "Python", "C/C++",
    "ReactJS", "React Native", "Spring Boot", "Angular",
    "Azure", "Docker", "Jenkins", "CI/CD"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white shadow rounded-lg text-center font-medium hover:shadow-lg transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
