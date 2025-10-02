import React from "react";
import { motion } from "framer-motion";

export default function About({ mode }) {
  return (
    <motion.div
      className={`min-h-screen p-6 transition-colors duration-500 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h2
        className={`text-4xl font-bold mb-4 ${
          mode === "dark" ? "text-indigo-400" : "text-gray-900"
        }`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className={`text-lg mb-8 ${
          mode === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I’m an aspiring developer passionate about building modern,
        user-friendly, and efficient digital solutions. Skilled in{" "}
        <span className="font-semibold text-indigo-500">HTML</span>,{" "}
        <span className="font-semibold text-indigo-500">CSS</span>,{" "}
        <span className="font-semibold text-indigo-500">Tailwind</span>,{" "}
        <span className="font-semibold text-indigo-500">JavaScript</span>, and{" "}
        <span className="font-semibold text-indigo-500">React</span>. Currently,
        I’m exploring{" "}
        <span className="font-semibold text-indigo-500">
          Artificial Intelligence
        </span>{" "}
        and how intelligent systems can shape the future of technology.
      </motion.p>

      {/* Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 cursor-pointer">
        {[
          {
            title: "💻 Web Dev",
            desc: "Building responsive websites using React, Tailwind CSS, and modern JavaScript frameworks.",
          },
          {
            title: "🚀 AI Aspirant",
            desc: "Exploring AI and machine learning concepts to create smarter solutions.",
          },
          {
            title: "🤝 Collaborator",
            desc: "Always eager to learn, collaborate, and contribute to impactful projects.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl ${
              mode === "dark"
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-50 text-gray-700"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                mode === "dark" ? "text-indigo-400" : "text-gray-900"
              }`}
            >
              {card.title}
            </h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
