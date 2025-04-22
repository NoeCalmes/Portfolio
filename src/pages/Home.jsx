// src/pages/Home.jsx
import React from "react";
import HeroIntro from "../components/common/HeroIntro";
import ParticleWrapper from "../components/common/ParticleWrapper";
import HomeTabsContent from "../components/common/Cards";

function WorkSection() {
  return (
    <section className="flex justify-center flex-col ">
      <HomeTabsContent
        href="/finvens"
        iconSrc="/icons/finvens.png"
        iconAlt="Finvens Icon"
        title="Alternance chez Finvens"
        gradientTitle="333deg,#323235_73%,#5e5e63"
        tag="Bachelor 3"
        year="2024-2025"
        description="J’ai pris part à la refonte du portail collaborateur et à la migration du back‑end sous Symfony"
        previewSrc="/images/finvens-card.png"
        previewAlt=""
      />
      <HomeTabsContent
        href="/a-qui-est-ce-numero"
        iconSrc="/icons/numero-icon.png"
        iconAlt="Stage"
        title="Création d'une Application web"
        gradientTitle="333deg,#323235_73%,#5e5e63"
        tag="BTS SIO 2"
        year="2024"
        description="Développement d’une plateforme de signalement et d’évaluation des numéros de téléphone"
        previewSrc="/images/numero-card.png"
        previewAlt=""
      />
    </section>
  );
}

function PlaySection() {
  return (
    <section className="flex justify-center flex-col">
      <h2 className="text-2xl font-bold mb-4">Section Play</h2>
      <p>Voici tout le contenu « play » de ta page d’accueil.</p>
    </section>
  );
}

export default function Home({ activeTab }) {
  return (
    <div className="relative pt-[92px] min-h-screen ">
      <HeroIntro activeTab={activeTab} />
      <ParticleWrapper activeTab={activeTab} />
      {activeTab === "work" ? <WorkSection /> : <PlaySection />}
    </div>
  );
}
