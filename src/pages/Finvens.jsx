// src/pages/Numero.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Numero() {
  return (
    <div className="pt-30 min-h-screen max-w-232 flex flex-col  m-auto mb-25 p-6">
      <img
        src="/images/home/finvens-icon.png"
        alt=""
        className="h-9 w-9 rounded-lg mb-4"
      />
      <h1 className="text-[35px] sm:text-[45px] font-extrabold leading-[140%] mb-3 text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_58%,#5e5e63)]">
        Alternance chez Finvens
      </h1>
      <div className="flex items-center mb-8.5">
        <p className="text-[#5e5e63] text-sm font-semibold tracking-widest uppercase">
          Bachelor 3<sup className="lowercase">e</sup> année
        </p>
        <span className="text-[#bdbdc5] text-sm px-2">•</span>
        <p className="text-sm text-[#5e5e63] tracking-widest font-semibold">
          2024- Aujourd'hui
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start mb-6">
        <div className="flex flex-col mr-16 sm:w-120">
          <p className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-8">
            Participer activement au développement, à l’amélioration continue et
            à la maintenance des outils numériques internes de l’entreprise,
            notamment les plateformes métiers (ERP), les sites web statiques
            dédiés à la collecte de leads ainsi que les portails internes
            utilisés quotidiennement par les collaborateurs.
          </p>
        </div>
        <div className="flex flex-col mr-8">
          <div className="mb-8">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              Rôle
            </p>
            <p className="text-[16px] text-[#323235]">Alternant</p>
          </div>
          <div className="">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              RESPONSABILITÉS
            </p>
            <ul className="text-[16px] text-[#323235]">
              <li>• Support</li>
              <li>• Back-end</li>
              <li>• Front-end</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mr-8">
          <div className="mb-8">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              TEAM
            </p>
            <p className="text-[16px] text-[#323235]">
              3 Product Owner - 11 Dev
            </p>
          </div>
          <div className="">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              LANGUAGES (FRAMWORKS)
            </p>
            <ul className="text-[16px] text-[#323235]">
              <li>• PHP / SYMFONY</li>
              <li>• VUE JS / NUXT</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mb-15 overflow-hidden rounded-lg">
        <img
          className="m-auto w-full lg:w-full rounded-md md:h-72 "
          src="/images/finvens/finvens.webp"
          preload="metadata"
          poster="/videos/numero-poster.png"
        ></img>
        <p className="text-left pt-2">Site statique développé par FINVENS</p>
      </div>

      <div className=" sm:w-150 m-auto mb-8">
        <p className="text-xl leading-[1.7] leadin-[150%] mb-3 font-semibold  uppercase text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_67%,#5e5e63)]">
          Description
        </p>
        <p className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-4">
          En tant qu’alternant développeur web chez Finvens, j'interviens au
          cœur de la refonte complète de l'application interne utilisée
          quotidiennement par les équipes commerciales et analystes. Ce projet
          ambitieux vise à faire migrer un ERP développé en PHP 5.3 vers une
          stack moderne :{" "}
          <span className="text-gray-500">
            PHP Symfony 6.4 pour le back-end et Vue.js 3.5.13 + Nuxt pour le
            front-end.
          </span>
        </p>
      </div>

      <div className="  sm:w-150 m-auto mb-14">
        <p className="text-xl leading-[1.7] leadin-[150%] mb-3 font-semibold  uppercase text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_67%,#5e5e63)]">
          Compétences Acquises:
        </p>
        <ul className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-4">
          <li>
            • Participation à une refonte complète d’une application en PHP
            Symfony et Vue.js, de la base de données à l’interface utilisateur.
          </li>
          <li>
            • Maîtrise du framework Symfony 7.3 et du langage PHP et du
            framworks Vue.js + Nuxt pour le développement front-end.
          </li>
          <li>
            • Manipulation de données avec SQL sur des bases MySQL, incluant
            l’écriture de requêtes complexes et la gestion des relations entre
            les données
          </li>
          <li>
            • Collaboration efficace au sein d’une équipe de développeurs, avec
            un suivi quotidien et un travail en présentiel et à distance.
          </li>
        </ul>
      </div>
    </div>
  );
}
