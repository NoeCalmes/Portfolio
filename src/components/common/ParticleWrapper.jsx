// src/components/common/ParticleWrapper.jsx
import React, { useState, useEffect } from "react";

const playColors = [
  "#f4717d", // p8
  "#8474f9", // p7
  "#55a5ff", // p6
  "#8474f9", // p5
  "#f4717d", // p4
  "#55a5ff", // p3
  "#f4717d", // p2
  "#8474f9"  // p1
];

export default function ParticleWrapper({ activeTab }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => {
      const cx = window.innerWidth / 2,
            cy = window.innerHeight / 2,
            strength = 70;
      setOffset({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const particles = [
    { top:111, right:64,  size:11, br:3,  op:0.15, tx:-1.97, ty:-3.03, rz:-49 },
    { top:213, right:104, size:9,  br:2,  op:0.2,  tx:-1.46, ty:-5.25, rz:-26 },
    { top:251, right:262, size:12, br:4,  op:0.2,  tx:-1.47, ty:-8.03, rz:23 },
    { top:203, right:448, size:12, br:4,  op:0.2,  tx:1.02,  ty:-5.25, rz:35 },
    { top:64,  right:428, size:15, br:5,  op:0.2,  tx:0.52,  ty:-2.33, rz:20 },
    { top:94,  right:624, size:9,  br:2,  op:0.4,  tx:2.03,  ty:-3.10, rz:17 },
    { top:200, right:600, size:24, br:6,  op:0.3,  tx:3.08,  ty:-16.71, rz:-26 },
    { top:90,  right:159, size:20, br:6,  op:0.4,  tx:3.08,  ty:-9.61, rz:20 }
  ];

  return (
    <div
      className="hidden xl:block absolute left-1/2 top-36 sm:w-[700px] h-[310px] pointer-events-none z-0"
      style={{
        transform: `
          translate3d(-50%,0,0)
          translate3d(${offset.x}px,${offset.y}px,0)
          scale3d(1.5,1.5,1)
        `,
        transformStyle: "preserve-3d",
        willChange: "transform,opacity"
      }}
    >
      {particles.map((p,i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${p.top}px`,
            right: `${p.right}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: activeTab === "play" ? "50%" : `${p.br}px`,
            opacity: p.op,
            backgroundColor: activeTab === "play" ? playColors[i] : "#000000",
            transform: `translate3d(${p.tx}px,${p.ty}px,0) rotateZ(${p.rz}deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform"
          }}
        />
      ))}
    </div>
  );
}
