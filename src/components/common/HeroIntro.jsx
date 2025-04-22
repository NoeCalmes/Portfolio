// src/components/common/HeroIntro.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.6 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroIntro({ activeTab }) {
  const lines = [
    "hi, i'm noé",
    "toulouse, fr",
    <>
      Actuellement en Bachelor FullStack (3ᵉ année) chez{" "}
      <a
        href="https://finvens.fr/"
        className="cursor-pointer inline-block px-[1px] shadow-[inset_0_-3px_0_0_#bdbdc5] transition-[box-shadow,color,border-radius] duration-150 ease-[cubic-bezier(.215,.61,.355,1)] hover:text-[#0e0e0f] hover:rounded-md hover:shadow-[inset_0_-40px_#e5e5e7,0_0_0_0.1px_#e5e5e7]"
      >
        Finvens
      </a>{" "}
      et en recherche d’une alternance pour un Master
    </>,
  ];

  // Choix du gradient selon la tab active
  const gradient =
    activeTab === "work"
      ? "linear-gradient(141deg,#969699,#1e1e22)"
      : "linear-gradient(141deg,#adf1e0,#8075ff 28%,#ff7171 98%)";

  const locationIcon =
    activeTab === "play" ? "/icons/location-play.svg" : "/icons/location.svg";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="flex flex-col items-center text-center space-y-4 mt-40 mb-35"
    >
      {lines.map((text, i) => (
        <motion.div key={i} variants={lineVariant} className="text-gray-800">
          {i === 0 ? (
            <h1
              className="text-[70px] font-black text-transparent bg-clip-text tracking-[-1.25px] inline-block"
              style={{ backgroundImage: gradient }}
            >
              {text}
            </h1>
          ) : i === 1 ? (
            <h2 className="flex items-center text-[18px] font-medium text-[#5e5e63]">
              <img
                src={locationIcon}
                alt="Location"
                className="w-[24px] h-[24px] mr-2 inline-block"
              />
              {text}
            </h2>
          ) : (
            <p className="max-w-lg text-lg font-normal leading-relaxed text-[#5e5e63]">
              {text}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
