// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Finvens from "./pages/Finvens";
import Numero from "./pages/Numero";
import ScrollToTop from "./components/common/ScrollToTop";
import Concretesecurity from "./pages/Concretesecurity";

export default function App() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <Layout>
      {/* on passe activeTab et setActiveTab */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home activeTab={activeTab} />} />
        <Route path="/about" element={<About />} />
        <Route path="/finvens" element={<Finvens />} />
        <Route path="/concrete-security" element={<Concretesecurity />} />
        <Route path="/a-qui-est-ce-numero" element={<Numero />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
