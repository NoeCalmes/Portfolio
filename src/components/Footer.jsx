// src/components/Footer.jsx
import React from "react";
import MagneticDiv from "./common/MagneticDiv";

export default function Footer() {
  return (
    <footer className="footer py-12 px-6 pb-9 text-center bg-[#f1f1f1]">
      <div className="flex justify-center gap-2 mb-6">
        {/* Phone */}
        <MagneticDiv
          strengthX={8}
          strengthY={8}
          className="w-[44px] h-[44px] mx-3 rounded-[9px] bg-transparent hover:bg-white"
        >
          <a href="tel:+33658308210" className="w-full h-full block">
            <img
              src="/images/footer/tel.svg"
              alt="Téléphone"
              className="w-full h-full object-contain pointer-events-none"
            />
          </a>
        </MagneticDiv>

        {/* LinkedIn */}
        <MagneticDiv
          strengthX={8}
          strengthY={8}
          className="w-[44px] h-[44px] mx-3 rounded-[9px] bg-transparent hover:bg-white"
        >
          <a
            href="https://www.linkedin.com/in/noe-calmes/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <img
              src="/images/footer/linkedin.svg"
              alt="LinkedIn"
              className="w-full h-full object-contain pointer-events-none"
            />
          </a>
        </MagneticDiv>

        {/* CV */}
        <MagneticDiv
          strengthX={8}
          strengthY={8}
          className="w-[44px] h-[44px] mx-3 rounded-[9px] bg-transparent hover:bg-white"
        >
          <a
            href="cv-noecalmes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <img
              src="/images/footer/cv.svg"
              alt="Télécharger le CV"
              className="w-full h-full object-contain pointer-events-none"
            />
          </a>
        </MagneticDiv>
      </div>
      <div className="text-center text-[#6c6c6c] max-w-[600px] mx-auto  px-2 text-sm leading-5 font-medium pb-3">
        Portfolio réalisé avec React JS
      </div>
      <div className="text-center text-[#6c6c6c] max-w-[600px] mb-3 mx-auto pb-3 px-2 text-sm leading-5 font-bold">
        Copyright © 2025 Noé Calmes. Tous droits réservés.
      </div>
    </footer>
  );
}
