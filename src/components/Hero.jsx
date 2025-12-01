import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import TypingSequence from "./TypingSequence";

export default function Hero() {
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (phase === "divider") {
      const t = setTimeout(() => setPhase("layout"), 700);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <section className="
      min-h-screen flex items-center justify-center 
      px-6 md:px-24 
      bg-gradient-to-bl from-blue-50 via-white to-blue-100
      dark:bg-gradient-to-bl dark:from-gray-900 dark:via-gray-950 dark:to-black
    ">


      {/* ============================
          PHASE 1 — CENTER TYPING
      ============================== */}
      {phase === "typing" && (
        <div className="max-w-4xl w-full flex justify-center">
          <TypingSequence
            speed={22}
            onComplete={() => setPhase("divider")}
            lines={[
              {
                text: "Hi, I'm Devdatt Datar",
                className:
                  "text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              },
              {
                text: "Full-Stack Developer • Cloud Data Engineer",
                className: "text-xl md:text-2xl font-semibold text-gray-300"
              },
              {
                text: "I build secure, scalable, high-performance applications.",
                className: "text-lg md:text-xl text-gray-400 leading-relaxed"
              }
            ]}
          />
        </div>
      )}



      {/* ============================
          PHASE 2 — DIVIDER APPEARS
      ============================== */}
      {phase === "divider" && (
        <div className="flex justify-center items-center text-center">

          {/* Text stays centered */}
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hi, I'm Devdatt Datar
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-300">
              Full-Stack Developer • Cloud Data Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto">
              I build secure, scalable, high-performance applications.
            </p>
          </div>

          {/* Divider only on desktop */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="hidden md:flex origin-top ml-4"
          >
            <div className="w-[3px] h-40 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
          </motion.div>
        </div>
      )}



      {/* ============================
          PHASE 3 — FINAL LAYOUT
          (slide left + image pop)
      ============================== */}
      {phase === "layout" && (
        <div
          className="
      max-w-6xl w-full
      flex flex-col md:flex-row
      items-center
      justify-center md:justify-between
      gap-10
      text-center md:text-left
    "
        >

          {/* TEXT + DIVIDER GROUP */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: window.innerWidth >= 768 ? -20 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
        flex
        flex-col md:flex-row
        items-center md:items-center
        gap-6
      "
          >

            {/* TEXT */}
            <div
              className="
          space-y-2
          text-center md:text-right
          w-full md:w-fit
        "
            >
              <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hi, I'm Devdatt Datar
              </p>

              <p className="text-xl md:text-2xl font-semibold text-gray-300">
                Full-Stack Developer • Cloud Data Engineer
              </p>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                I build secure, scalable, high-performance applications.
              </p>
            </div>

            {/* Divider — ONLY DESKTOP */}
            <div className="hidden md:flex">
              <div className="w-[3px] h-60 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth >= 768 ? 120 : 0, scale: 0.95 }}
            animate={{ opacity: 1, x: window.innerWidth >= 768 ? -120 : 0 , scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
        flex justify-center
        w-full md:w-auto
        mt-6 md:mt-0
      "
          >
            <ProfileCard img={profile} />
          </motion.div>

        </div>
      )}


    </section>
  );
}



function ProfileCard({ img }) {
  return (
    <div className="
      relative 
      w-60 h-60 sm:w-72 sm:h-72 
      rounded-3xl overflow-hidden shadow-2xl
      bg-white dark:bg-gray-900 
      border border-gray-300 dark:border-gray-700
    ">
      <img
        src={img}
        className="w-full h-full object-cover rounded-3xl"
        alt="profile"
      />
    </div>
  );
}
