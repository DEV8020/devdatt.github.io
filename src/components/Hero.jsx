import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import TypingSequence from "./TypingSequence";

export default function Hero() {
  const [phase, setPhase] = useState("typing");  // FIXED

  useEffect(() => {
    if (phase === "divider") {
      const t = setTimeout(() => setPhase("layout"), 1000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const TextBlock = ({ align = "center" }) => (
    <div className={`space-y-2 ${align === "center" ? "text-center" : "text-right"}`}>
      <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Hi, I'm Devdatt Datar
      </p>
      <p className="text-xl md:text-2xl font-semibold text-gray-300">
        Full-Stack Developer • Cloud Data Engineer
      </p>
      <p className={`text-lg md:text-xl text-gray-400 leading-relaxed ${align === "right" ? "" : "max-w-lg mx-auto"}`}>
        I build secure, scalable, high-performance applications.
      </p>
    </div>
  );

  return (
    <section
      className="
        min-h-screen flex items-center justify-center 
        px-6 md:px-24 
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black
      "
    >

      {/* TYPING PHASE */}
      {phase === "typing" && (
        <div className="max-w-4xl w-full flex justify-center">
          <TypingSequence
            speed={20}
            onComplete={() => setPhase("divider")}
            lines={[
              {
                text: "Hi, I'm Devdatt Datar",
                className:
                  "text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
              },
              {
                text: "Full-Stack Developer • Cloud Data Engineer",
                className: "text-xl md:text-2xl font-semibold text-gray-300",
              },
              {
                text: "I build secure, scalable, high-performance applications.",
                className: "text-lg md:text-xl text-gray-400 leading-relaxed",
              },
            ]}
          />
        </div>
      )}

      {/* DIVIDER APPEARING PHASE */}
      {phase === "divider" && (
        <div className="flex justify-center items-center">
          <TextBlock align="center" />
          <motion.div
            initial={{ scaleY: 0, opacity: 0, x: -8 }}
            animate={{ scaleY: 1, opacity: 1, x: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden md:block origin-top"
          >
            <div className="w-[3px] h-40 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
          </motion.div>
        </div>
      )}

      {/* FINAL SLIDE + IMAGE PHASE */}
      {phase === "layout" && (
        <div className="max-w-6xl w-4/6 flex items-center justify-between gap-8">

          <motion.div
            initial={{ x: 0, opacity: 1, transformOrigin: "50% 50%" }}
            animate={{ x: -20, transformOrigin: "100% 50%" }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="flex items-center"
          >
            <motion.div
              initial={{ x: 0, textAlign: "center" }}
              animate={{ x: -40, textAlign: "right" }}
              transition={{ duration: 10, ease: "easeOut" }}
              className="space-y-2 w-fit"
            >
              <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
               Hi, I'm Devdatt Datar
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-300">
                Full-Stack Developer • Cloud Data Engineer
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                I build secure, scalable, high-performance applications.
              </p>
            </motion.div>

            {/* Divider touching text */}
            <motion.div
              initial={{ x: 0, textAlign: "center" }}
              animate={{ x: -20, textAlign: "right" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="hidden md:flex">
              <div className="w-[3px] h-60 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full ml-4" />
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 160, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="hidden md:block"
          >
            <ProfileCard img={profile} />
          </motion.div>
        </div>
      )}
    </section>
  );
}

/* FIXED — no TypeScript */
function ProfileCard({ img }) {
  return (
    <div
      className="
        relative 
        w-60 h-60 sm:w-72 sm:h-72 
        rounded-3xl overflow-hidden shadow-2xl
        bg-white dark:bg-gray-900 
        border border-gray-300 dark:border-gray-700
      "
    >
      <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-500 rounded-tl-xl"></span>
      <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-indigo-500 rounded-br-xl"></span>

      <img
        src={img}
        className="w-full h-full object-cover rounded-3xl"
        alt="profile"
      />
    </div>
  );
}
