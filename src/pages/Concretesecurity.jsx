import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Concretesecurity() {
  return (
    <div className="pt-30 min-h-screen max-w-232 flex flex-col m-auto mb-10 sm:mb-25 p-6">
      <img
        src="images/home/concretesecurity-icon.png"
        alt=""
        className="h-9 w-9 rounded-lg mb-4"
      />
      <h1 className="text-[35px] sm:text-[45px] font-extrabold leading-[140%] mb-3 text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_58%,#5e5e63)]">
        Platforme web
      </h1>
      <div className="flex items-center mb-8.5">
        <p className="text-[#5e5e63] text-sm font-semibold tracking-widest uppercase">
          projet étude
        </p>
        <span className="text-[#bdbdc5] text-sm px-2">•</span>
        <p className="text-sm text-[#5e5e63] tracking-widest font-semibold">
          2024
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start mb-6">
        <div className="flex flex-col mr-16 sm:w-120">
          <p className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-8">
            Développer une plateforme interactive permettant aux utilisateurs de
            signaler et d'évaluer des numéros de téléphone, avec pour objectif
            de fournir une base de données fiable et exhaustive pour aider les
            utilisateurs à identifier les appels et messages indésirables ou
            utiles.
          </p>
        </div>
        <div className="flex flex-col mr-8">
          <div className="mb-8">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              Rôle
            </p>
            <p className="text-[16px] text-[#323235]">Responsable du projet</p>
          </div>
          <div className="">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              LANGUAGES (FRAMWORKS)
            </p>
            <p className="text-[16px] text-[#323235]">• CodeIgniter</p>
            <p className="text-[16px] text-[#323235]">• ORM Eloquente</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              TEAM
            </p>
            <p className="text-[16px] text-[#323235] mb-2">Raphael Fourquet</p>
            <p className="text-[16px] text-[#323235]">Noé Calmes</p>
          </div>
        </div>
      </div>

      <div className="w-full mb-15 overflow-hidden rounded-lg">
        <img
          className="m-auto w-full lg:w-full rounded-md md:h-72 "
          src="/images/concretesecurity/acceuil.png"
        ></img>
      </div>

      <div className=" sm:w-150 m-auto mb-8">
        <p className="text-xl leading-[1.7] leadin-[150%] mb-3 font-semibold  uppercase text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_67%,#5e5e63)]">
          Description
        </p>
        <p className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-4">
          Création d'un paltforme web pour gérer les demandes de services en
          ligne. Les clients soumettent et personnalisent leurs demandes, et
          suivent leurs contrats. Les administrateurs gèrent les demandes via un
          tableau de bord. L’objectif est d’améliorer la réactivité et la
          satisfaction client tout en optimisant la gestion.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-4 ">
        <div className="flex flex-col  mb-2 sm:mb-7 bg-[#f6fre6f6] shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014] rounded-xl">
          <img
            className="sm:w-150 sm:h-100 rounded-xl"
            src="/images/concretesecurity/mcd.png"
          ></img>
        </div>
      </div>

      <div className="sm:w-150 m-auto mb-6 sm:mb-13">
        <p className="text-xl leading-[1.7] leadin-[150%] mb-3 font-semibold  uppercase text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_67%,#5e5e63)]">
          Compétences Acquises:
        </p>
        <ul className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-4">
          <li>• Conception et développement d'une plateforme de A à Z.</li>
          <li>
            • Maitrise de PHP, du framework CodeIgniter ainsi de MySQL pour la
            gestion des données et la logique métier.
          </li>
          <li>
            • Développement d'une plateforme avec deux sections distinctes : une
            pour les administrateurs et une pour les clients.
          </li>
          <li>• Gestion du temps et des ressources dans un contexte serré.</li>
        </ul>
      </div>

      <div className="flex flex-col justify-start m-auto sm:w-150 ">
        <a
          href="https://github.com/NoeCalmes/ConcreteSecurity"
          className="cursor-pointer bg-white py-2 px-2 flex items-center border-2 border-[#fafafa] rounded-lg mb-1.5  hover:bg-[#f6f6f6] hover:border-2 hover:border-white transition duration-200  sm:w-99"
        >
          <FaGithub className="w-6 h-6 mr-3 text-[#323235]" />
          <p className="font-normal text-[14px] sm:text-[16px] text-transparent bg-clip-text bg-[linear-gradient(107deg,#74747a,#323235)] [-webkit-text-fill-color:transparent] ">
            Acceder au projet sur mon repository Github
          </p>
        </a>
      </div>
    </div>



  );
}
