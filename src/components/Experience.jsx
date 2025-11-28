import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      role: "Full-Stack Developer",
      company: "NIMHANS (E-Health Research Center)",
      period: "Jul 2024 – Present",
      desc: [
        "Developing MindNotes (1L+ downloads).",
        "Developing Push-D self-help platform.",
        "Spring Boot backend + Firebase auth.",
        "React Native UI + Azure Blob Storage."
      ]
    },
    {
      role: "Data Engineer",
      company: "Thorogood Associates",
      period: "Jan 2024 – Jun 2024",
      desc: [
        "Built ETL pipelines using ADF & Databricks.",
        "Integrated multi-source data pipelines.",
        "Supported ML model deployment pipeline."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {items.map((job) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 bg-white shadow rounded-lg"
          >
            <h3 className="text-xl font-bold">{job.role}</h3>
            <p className="text-blue-600 font-medium">{job.company}</p>
            <p className="text-gray-500 mb-3">{job.period}</p>
            <ul className="list-disc ml-6 text-gray-600">
              {job.desc.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
