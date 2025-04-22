// src/pages/Finvens.jsx
import React from "react";

export default function Finvens() {
  return (
    <div className="pt-24 min-h-screen max-w-232 flex flex-col items center m-auto">
      <img src="icons/finvens.png" alt="" className="h-9 w-9 rounded-lg mb-4" />
      <h1 className="text-[45px] font-extrabold leading-[140%] mb-3 text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_58%,#5e5e63)]">
        Alternance chez Finvens
      </h1>
      <div className="flex items-center mb-9">
        <p className="text-[#5e5e63] text-sm font-semibold tracking-widest uppercase">
          Bachelor 3<sup className="lowercase">e</sup> année
        </p>
        <span className="text-[#bdbdc5] text-sm px-2">•</span>
        <p className="text-sm text-[#5e5e63] tracking-widest font-semibold">
          2024-2025 (en cours)
        </p>
      </div>

      <div className="flex flex-row justify-center items-start mb-16">
        <div className="flex flex-col mr-16 w-120">
          <p className="text-lg leading-[1.7] text-[#323235] leadin-[150%] mb-8">
            Participer activement au développement, à l’amélioration continue et
            à la maintenance des outils numériques internes de l’entreprise,
            notamment les plateformes métiers (ERP), les sites web statiques
            dédiés à la collecte de leads ainsi que les portails internes utilisés quotidiennement
            par les collaborateurs.
          </p>
        </div>
        <div className="flex flex-col mr-8">
          <div className="mb-8">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              Rôle
            </p>
            <p className="text-[16px] text-[#323235]">Alternant </p>
          </div>
          <div className="">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              Responsabilités
            </p>
            <ul className="text-[16px] text-[#323235]">
              <li> • Support</li>
              <li> • Back-end</li>
              <li> • Front-end</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="font-extrabold text-sm mb-2 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
              TEAM
            </p>
            <p className="text-[16px] text-[#323235]">1 CTO - 3 Product Owner - 11 Developpeurs Web  </p>
          </div>
        </div>
      </div>

      <div className="w-150 m-auto mb-8">
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

      <div className="w-150 m-auto mb-20">
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

      <div className="flex flex-row justify-center items-center mb-16">
        <div className="flex flex-col mr-8 w-120">
          <p className="font-extrabold text-xl mb-3 leading-[160%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)] uppercase">
            Présentation Diaporama
          </p>
          <p className="text-lg text-[#323235]">
            Ces diapositives illustrent les différentes étapes du processus de
            conception et de développement, mettant en avant les choix de
            design, l'intégration de fonctionnalités et l'optimisation de
            l'expérience utilisateur.
          </p>
        </div>
        <div className="flex flex-col mr-8">
          <iframe
            width="550"
            height="350"
            src="https://view.genially.com/65f1f2024f8e2d0014643e9e"
            frameborder="0"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
