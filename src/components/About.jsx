import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-3xl mx-auto text-gray-600 text-center"
      >
        I am a Full-Stack Developer and Cloud Data Engineer with expertise in 
        React Native, ReactJS, Spring Boot, Azure, and DevOps tools. I’ve worked 
        on government-scale digital health platforms at NIMHANS, building secure 
        APIs, scalable UI components, and cloud-powered data infrastructure.
      </motion.p>
    </section>
  );
}
