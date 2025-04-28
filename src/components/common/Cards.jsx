// src/components/HomeTabsContent.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HomeTabsContent({
  href = "#",
  iconSrc,
  iconAlt = "",
  title,
  tag,
  year,
  description,
  previewSrc,
  previewAlt = ""
}) {
  return (
    <Link
      to={href}
      className="
        bg-[#eceff1] rounded-3xl cursor-pointer flex flex-col md:flex-row justify-center
        md:m-auto md:w-230 m-6 p-7 md:mb-24 md:pl-16 md:pt-23 transform transition-transform
        duration-200 ease-out hover:scale-[1.02] hover:bg-[#f6f6f6]
        hover:shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014]
      "
    >
      <div className="max-w-86 mb-8 md:mb-0">
        {/* Logo  */}
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-7 h-7 md:w-8 md:h-8 mr-2 rounded-lg mb-4"
        />

        {/* Title */}
        <h2
          className={`
            font-extrabold  text-2xl sm:text-4xl mb-3 leading-[120%]
            text-transparent bg-clip-text
            bg-[linear-gradient(333deg,#323235_73%,#5e5e63)]
          `}
        >
          {title}
        </h2>

        {/* Tag  */}
        <div className="flex items-center mb-4">
          <p className="text-[#5e5e63] text-sm font-semibold tracking-widest uppercase">
            {tag}
          </p>
          <span className="text-[#bdbdc5] text-sm px-2">•</span>
          <p className="text-sm text-[#5e5e63] tracking-widest font-semibold">
            {year}
          </p>
        </div>

        {/* Description */}
        <p className="sm:mr-6 text-[16px] sm:text-lg text-[#5e5e63] leading-[170%] mb-6">
          {description}
        </p>

        {/* Button */}
        <div className="group flex justify-center items-center bg-white  w-36 h-11 sm:w-45 sm:h-14 rounded-xl hover:bg-[#f6f6f6] border-2 border-white">
          <p
            className="
              font-normal text-[16px] sm:text-lg text-transparent bg-clip-text
              bg-[linear-gradient(107deg,#74747a,#323235)]
              [-webkit-text-fill-color:transparent]
            "
          >
            Voir plus
          </p>
          <img src="icons/arrow.svg" className="text-[#5e5e63] ml-2.5 h-6 w-6 transform transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </div>
      </div>

      {/* Image preview */}
      <img
        src={previewSrc}
        alt={previewAlt}
        className="h-auto max-w-full w-full sm:h-100 sm:max-w-120 "
      />
    </Link>
  );
}
