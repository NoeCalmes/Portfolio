// src/pages/About.jsx
import React from "react";
import MagneticDiv from "../components/common/MagneticDiv";

export default function About() {
  return (
    <div className="pt-[92px] min-h-screen overflow-x-hidden">
      {/* Section “cloud” */}
      <MagneticDiv
        strengthX={190}
        strengthY={80}
        className="w-full flex justify-center px-4 sm:px-10 md:px-20"
      >
        <div className="flex items-end justify-center ">
          {/* Trail */}
          <img
            src="images/about/trail.png"
            alt="Trail"
            className="
        relative -top-6 sm:-top-8 md:-top-9
        w-[105px] sm:w-[180px] md:w-[270px]
        h-[140px] sm:h-[270px] md:h-[390px]
        rounded-tl-[12px] rounded-bl-[12px]
        shadow-[0_4px_16px_#00000029]
      "
          />

          {/* Me */}
          <img
            src="images/about/me.png"
            alt="Waterfall"
            className="
        relative top-0
        w-[135px] sm:w-[250px] md:w-[373px]
        h-[180px] sm:h-[360px] md:h-[497px]
        rounded-[12px]
        shadow-[0_8px_24px_#00000029]
        z-20
      "
          />

          {/* Fise */}
          <img
            src="images/about/fise.png"
            alt="Fise"
            className="
        relative -top-10 sm:-top-16 md:-top-[108px]
        w-[113px] sm:w-[240px] md:w-[350px]
        h-[130px] sm:h-[240px] md:h-[330px]
        object-cover
        rounded-tr-[12px] rounded-br-[12px]
        shadow-[0_4px_16px_#00000029]
      "
          />
        </div>
      </MagneticDiv>

      <div className="w-full max-w-[600px] mt-12 mx-auto pt-7 p-6 sm:p-0">
        <h1
          className="
              text-left
              font-extrabold
              text-transparent
              bg-clip-text
              bg-[linear-gradient(141deg,_#adf1e0,_#8075ff_28%,_#ff7171_98%)]
              md:text-[36px] text-[32px] sm:
              inline-block
              relative
              mb-6
            "
        >
          Hi again, I’m Noé.
        </h1>
        <p
          className="
              mb-6 
              md:text-[18px] text-[16px]
              text-[#323235]
              leading-[170%]
            "
        >
          Actuellement en 3ᵉ année de Bachelor FullStack à Toulouse, je
          recherche une alternance pour un Master Developpeur Full Stack. Passionné depuis bientôt
          quatre ans par le développement web, je suis d’abord attiré par le
          back‑end, et j’apprécie de plus en plus le front‑end.
        </p>
        <p
          className="
              mb-6
              md:text-[18px] text-[16px]
              text-[#323235]
              leading-[170%]
            "
        >
          Originaire de Millau, j’ai découvert très tôt la rigueur et la
          persévérance grâce à ma passion pour le breakdance. J’ai ensuite
          nourri mon esprit entrepreneurial en explorant le e-commerce, ce qui
          m’a naturellement poussé à apprendre le code en autodidacte à côté de
          mes études.
        </p>
        <p
          className="
              mb-6
              md:text-[18px] text-[16px]
              text-[#323235]
              leading-[170%]
            "
        >
          Mon BTS SIO m’a permis de développer une plateforme de signalement de
          numéros de téléphone et de réaliser divers projets stimulants.
          Poursuivant ma route, j’ai intégré Finvens en alternance pour ma 3ᵉ
          année de Bachelor FullStack, et je prépare désormais un Master en
          alternance pour approfondir mes compétences et continuer à vivre ma
          passion pour le développement.
        </p>
        <p
          className="
              mb-6
              md:text-[18px] text-[16px]
              text-[#323235]
              leading-[170%]
            "
        >
          En dehors du clavier, je cours régulièrement et pratique le VTT
          descente (DH), toujours en quête de ce petit frisson qui me pousse à
          me surpasser.
        </p>
        <p
          className="
              mb-15
              md:text-[18px] text-[16px]
              text-[#323235]
              leading-[170%]
            "
        >
          Si vous souhaitez discuter, n'hésitez pas à{" "}
          <a
            href="https://www.linkedin.com/in/noe-calmes/"
            className="cursor-pointer inline-block px-[1px] shadow-[inset_0_-3px_0_0_#bdbdc5] transition-[box-shadow,color,border-radius] duration-150 ease-[cubic-bezier(.215,.61,.355,1)] hover:text-[#0e0e0f] hover:rounded-md hover:shadow-[inset_0_-40px_#e5e5e7,0_0_0_0.1px_#e5e5e7]"
          >
            me contacter.
          </a>
        </p>
        <div className="h-[80px]"></div>
      </div>
    </div>
  );
}
