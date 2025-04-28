// src/pages/Numero.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Numero() {
  return (
    <div className="pt-30 min-h-screen max-w-232 flex flex-col m-auto mb-10 sm:mb-25 p-6">
      <img
        src="images/home/numero-icon.png"
        alt=""
        className="h-9 w-9 rounded-lg mb-4"
      />
      <h1 className=" text-[35px] sm:text-[45px] font-extrabold leading-[140%] mb-3 text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_58%,#5e5e63)]">
        Application web
      </h1>
      <div className="flex items-center mb-8.5">
        <p className="text-[#5e5e63] text-sm font-semibold tracking-widest uppercase">
          BTS 2<sup className="lowercase">e</sup> année
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
            <p className="text-[16px] text-[#323235]">
              Responsable du projet <br></br>de A à Z
            </p>
          </div>
          <div className="">
            <p className="whitespace-nowrap font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              LANGUAGES FRAMWORKS
            </p>
            <p className="text-[16px] text-[#323235]">• CodeIgniter</p>
            <p className="text-[16px] text-[#323235]">• ORM Eloquente</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              TEAM
            </p>
            <p className="text-[16px] text-[#323235] mb-2">Maxime PO</p>
            <p className="text-[16px] text-[#323235]">Noé Calmes Stagiaire</p>
          </div>
          <div className="">
            <p className="whitespace-nowrap font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              durée
            </p>
            <p className="text-[16px] text-[#323235]">6 semaines (Stage)</p>
          </div>
        </div>
      </div>

      <div className="w-full mb-15 overflow-hidden rounded-lg">
        <video
          className="m-auto w-full lg:w-full rounded-md md:h-72 "
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/numero-poster.png"
        >
          <source src="/videos/numero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className=" sm:w-150 m-auto mb-8">
        <p className="text-xl leading-[1.7] leadin-[150%] mb-3 font-semibold  uppercase text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_67%,#5e5e63)]">
          Description
        </p>
        <p className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-4">
          A-qui-est-ce-numéro ? est une plateforme conçue pour permettre aux
          utilisateurs de signaler et d'évaluer les numéros de téléphone
          associés à des activités indésirables ou utiles. Le projet vise à
          offrir une interface intuitive et conviviale permettant aux
          utilisateurs de saisir des numéros de téléphone, de consulter les avis
          associés, et de contribuer à l'enrichissement de la base de données.
        </p>
      </div>

      <div className="sm:w-150 m-auto mb-6 sm:mb-13">
        <p className="text-xl leading-[1.7] leadin-[150%] mb-3 font-semibold  uppercase text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_67%,#5e5e63)]">
          Compétences Acquises:
        </p>
        <ul className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-4">
          <li>
            • Gestion de projet de A à Z, incluant la conception, le
            développement et le déploiement du site web.
          </li>
          <li>
            • Maîtrise des langages de programmation web tels que PHP et
            JavaScript, ainsi que des Frameworks comme CodeIgniter et l'ORM
            Eloquente.
          </li>
          <li>
            • Manipulation de bases de données MySQL et utilisation d'outils de
            gestion comme PhpMyAdmin.
          </li>
          <li>
            • Développement de compétences en communication et travail à
            distance, avec un suivi quotidien assuré par une équipe de
            développeurs.
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center mb-6 ">
        <div className=" flex flex-col  mb-12 bg-[#f6f6f6] shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014]">
          <iframe
            src="https://view.genially.com/65f1f2024f8e2d0014643e9e"
            frameborder="0"
            className="rounded-xl sm:w-150 sm:h-100"
          ></iframe>
        </div>

        <div className="flex flex-col mr-4 sm:w-150">
          <p className="font-extrabold text-xl mb-3 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
            Présentation Diaporama
          </p>
          <p className="text-lg text-[#323235]">
            Ces diapositives présentent les différentes phases de conception et
            de développement du projet, en mettant en lumière le contexte, les
            choix technologiques ainsi que le déroulement global du projet.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start m-auto sm:w-150 ">
        <a
          href="https://github.com/NoeCalmes/a-qui-est-ce-numero"
          className="cursor-pointer bg-white py-2 px-2 flex items-center border-2 border-[#fafafa] rounded-lg mb-1.5  hover:bg-[#f6f6f6] hover:border-2 hover:border-white transition duration-200  sm:w-99"
        >
          <FaGithub className="w-6 h-6 mr-3 text-[#323235]" />
          <p className="font-normal text-[14px] sm:text-[16px] text-transparent bg-clip-text bg-[linear-gradient(107deg,#74747a,#323235)] [-webkit-text-fill-color:transparent]">
            Acceder au projet sur mon repository Github
          </p>
        </a>

        <a
          href="https://a-qui-est-ce-numero.com/numero/0270255888"
          className="cursor-pointer bg-white p-2 flex items-center border-2 border-[#fafafa] rounded-lg mb-1.5  hover:bg-[#f6f6f6] hover:border-2 hover:border-white sm:w-95"
        >
          <FaExternalLinkAlt className="w-6 h-6 mr-3 text-[#323235]" />
          <p className="font-normal text-[14px] sm:text-[16px] text-transparent bg-clip-text bg-[linear-gradient(107deg,#74747a,#323235)] [-webkit-text-fill-color:transparent] ">
            Acceder a l'application web
          </p>
        </a>
      </div>
    </div>
  );
}
