import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "MindNotes",
      tech: "React Native, Spring Boot, Firebase, Azure Blob",
      desc: "A self-help mental wellness app under NIMHANS. 1L+ downloads."
    },
    {
      name: "Push-D",
      tech: "ReactJS, Spring Boot, Azure",
      desc: "Depression self-help system with therapist portal."
    },
    {
      name: "AgroBidz",
      tech: "ReactJS, Jenkins, Docker",
      desc: "Real-time auction platform for farmers."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow rounded-lg"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-blue-600">{p.tech}</p>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
