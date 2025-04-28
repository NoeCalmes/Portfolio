// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import HeroIntro from "../components/common/HeroIntro";
import CursorTrail from "../components/common/CursorTrail";
import ParticleWrapper from "../components/common/ParticleWrapper";
import HomeTabsContent from "../components/common/Cards";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";

function WorkSection() {
  return (
    <section className="flex justify-center flex-col ">
      <HomeTabsContent
        href="/finvens"
        iconSrc="/images/home/finvens-icon.png"
        iconAlt="Finvens Icon"
        title="Alternance chez Finvens"
        gradientTitle="333deg,#323235_73%,#5e5e63"
        tag="Bachelor 3"
        year="2024-2025"
        description="J’ai pris part à la refonte du portail collaborateur et à la migration du back‑end sous Symfony"
        previewSrc="/images/home/finvens-card.png"
        previewAlt=""
      />

      <HomeTabsContent
        href="/concrete-security"
        iconSrc="/images/home/concretesecurity-icon.png"
        iconAlt="ConrecteSecurity"
        title="Réalisation d'une Platforme web"
        gradientTitle="333deg,#323235_73%,#5e5e63"
        tag="projet etude"
        year="2024"
        description="Création d’une plateforme client pour la gestion et le suivi des demandes de services de sécurité"
        previewSrc="/images/home/concretesecurity-card.png"
        previewAlt=""
      />

      <HomeTabsContent
        href="/a-qui-est-ce-numero"
        iconSrc="/images/home/numero-icon.png"
        iconAlt="Stage"
        title="Création d'une Application web"
        gradientTitle="333deg,#323235_73%,#5e5e63"
        tag="STAGE"
        year="2024"
        description="Développement d’une application de signalement et d’évaluation des numéros de téléphone"
        previewSrc="/images/home/numero-card.png"
        previewAlt=""
      />
    </section>
  );
}

function PlaySection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  {
    [...Array(21)].map((_, i) => <div key={i} className="circle"></div>);
  }

  const languagescode = [
    { name: "Synfony", level: 2, color: "#9dc5eb" },
    { name: "CodeIgniter", level: 2, color: "#827cfd" },
    { name: "React", level: 2, color: "#8574f8" },
    { name: "Vue Js", level: 2, color: "#9b74e0" },
    { name: "Tailwind", level: 3, color: "#a973d0" },
    { name: "Angular", level: 1, color: "#c573b2" },
  ];

  const softSkills = [
    "Travail en équipe",
    "Rigueur",
    "Autonomie",
    "Résolution de problèmes",
  ];

  const languages = [
    { name: "API REST (Monitoring & tests) ", icon: MdArrowForward },
    { name: "Tests unitaires (Vitest, PHPUnit)", icon: MdArrowForward },
    { name: "Analyse statique (PHPStan)", icon: MdArrowForward },
    { name: "Conteneurisation (Docker)", icon: MdArrowForward },
  ];

  const skillData = [
    {
      name: "PHP",
      value: 100,
      text: "4 ans",
      color: "#8788fa",
    },
    {
      name: "JavaScript",
      value: 100,
      text: "3 ans",
      color: "#8f75ef",
    },
    {
      name: "Java",
      value: 100,
      text: "2 ans",
      color: "#ab74cf",
    },
    {
      name: "SQL",
      value: 100,
      text: "4 ans",
      color: "#d673a0",
    },
  ];

  const experiences = [
    {
      title: "Alternance",
      subtitle:
        "Alternant chez FINVENS au sein de mon Bachelor Full-Stack Web & DevOps",
      period: "2024 - Aujourd'hui",
    },
    {
      title: "Stage",
      subtitle:
        "Développement d’un outil de signalement et d’évaluation de numéros durant mon stage du BTS SIO",
      period: "2023 - 2024",
    },
    {
      title: "Autodidacte",
      subtitle:
        "Je me forme en autodidacte au développement web, toujours curieux et passionné par les nouvelles technologies",
      period: "2022 - Aujourd'hui",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-center flex-col mb-15 md:mb-40"
    >
      <div className="overflow-hidden bg-[#eceff1] cursor-hover-target rounded-3xl flex flex-col m-6 mb-3 md:m-auto md:w-230  md:mb-9 p-10 transform transition-transform duration-200 ease-out hover:bg-[#f6f6f6] hover:shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014] hover:scale-[1.02]">
        <div className="flex flex-col mb-9 md:mb-9">
          <h2 className="font-extrabold text-2xl md:text-4xl mb-2 leading-[120%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)]">
            Technos
          </h2>
          <p className="text-[#5e5e63] text-sm font-semibold tracking-widest uppercase">
            Par années d'expérience
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-x-4">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-12 md:mb-13"
            >
              <div className="w-[150px] h-[150px] md:w-[125px] md:h-[125px] opacity-85                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ">
                <CircularProgressbar
                  value={inView ? skill.value : 0}
                  text={inView ? skill.text : ""}
                  strokeWidth={12}
                  styles={buildStyles({
                    pathColor: skill.color,
                    textColor: "#323235",
                    trailColor: "#d6d6d6",
                    textSize: "16px",
                    strokeLinecap: "round",
                  })}
                />
              </div>
              <p className="mt-2 text-center text-lg font-medium text-[#454549]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div>
          <ul className="flex flex-wrap justify-start sm:flex-row sm:flex-wrap sm:justify-start gap-3">
            {languagescode.map((language, index) => (
              <li
                key={index}
                className="inline-flex px-3 bg-white  md:px-4 py-2 rounded-lg  items-center justify-center text-[#3a3a3e]  sm:w-auto"
              >
                {language.name}{" "}
                <span
                  className="bg-[#f6f6f6] rounded-full w-6 h-6 flex items-center justify-center ml-2 text-sm font-medium"
                  style={{ color: language.color }}
                >
                  {language.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col m-auto md:w-230 md:gap-9 ">
        <div className="flex flex-col md:w-1/2 m-6 sm:m-0 sm:md-0">
          <div className="mb-9 md:mb-9">
            <div className="bg-[#eceff1] cursor-hover-target rounded-3xl flex flex-col justify-start items p-10 transform transition-transform duration-200 ease-out hover:bg-[#f6f6f6] hover:shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014] hover:scale-[1.02] ">
              <div className="flex flex-col mb-9">
                <h2 className="font-extrabold text-2xl md:text-4xl leading-[120%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)]">
                  Qualités
                </h2>
              </div>
              <ul className="list-disc list-inside text-[16px] text-[#323235] space-y-1 flex flex-wrap gap-3 items-center">
                {softSkills.map((skill, index) => (
                  <li
                    className="list-none  bg-white rounded-lg px-3 md:px-4 py-2 text-[#3a3a3e]"
                    key={index}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            <div className="bg-[#eceff1] cursor-hover-target rounded-3xl flex flex-col justify-start items p-10 transform transition-transform duration-200 ease-out hover:bg-[#f6f6f6] hover:shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014] hover:scale-[1.02] ">
              <div className="flex flex-col mb-9">
                <h2 className="font-extrabold text-2xl md:text-4xl  leading-[120%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)]">
                  Outils & Pratiques
                </h2>
              </div>
              <div className="flex flex-col">
                {languages.map((lang, index) => (
                  <div className="flex flex-row items-start mb-5" key={index}>
                    {(() => {
                      const Icon = lang.icon;
                      return (
                        <Icon className=" text-[22px] mr-0.5 mt-1 text-[#5e5e63] bg-[#d6e6f8] rounded-full p-[3px]" />
                      );
                    })()}
                    <p className="text-lg px-3  text-[#323235]">{lang.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="m-6 mt-3 md:m-0 md:w-1/2 cursor-hover-target bg-[#eceff1] rounded-3xl flex flex-col transform transition-transform duration-200 ease-out hover:bg-[#f6f6f6] hover:shadow-[0_0_0_0_#e6ebef,0_4px_24px_0_#00000014] hover:scale-[1.02] ">
          <div className="p-10">
            <div className="flex flex-col mb-9">
              <h2 className="font-extrabold text-2xl md:text-4xl leading-[120%] text-transparent bg-clip-text bg-[linear-gradient(333deg,#323235_73%,#5e5e63)]">
                Expériences
              </h2>
            </div>

            <div className="">
              {experiences.map((exp, index) => (
                <div key={index} className="group mb-5 last:mb-0">
                  <div className="flex flex-row justify-between items-center mb-2.5 text-sm font-semibold tracking-widest uppercase ">
                    <div className="flex flex-row items-center bg-white rounded-lg p-1.5">
                      <MdOutlineHomeWork className="text-[24px]  text-[#5e5e63] mr-2 " />
                      <div className="flex flex-row items-center">
                        <p className="text-[#323235] mr-2">{exp.title}</p>
                        <p className="text-[10px] text-[#5e5e63] ">
                          ({exp.period})
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[14px] sm:text-[16px] text-[#5e5e63] leading-[170%] mb-5">
                      {exp.subtitle}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-[#aaaaaa] group-last:hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home({ activeTab }) {
  return (
    <div className="relative pt-[92px] min-h-screen ">
      <CursorTrail />
      <HeroIntro activeTab={activeTab} />
      <ParticleWrapper activeTab={activeTab} />
      {activeTab === "work" ? <WorkSection /> : <PlaySection />}
    </div>
  );
}
