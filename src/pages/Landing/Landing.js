import React from "react";
import { BenefitsSection } from "./components/BenefitsSection";
import { HowSection } from "./components/Content1";
import { HelpSection } from "./components/HelpSection";
import HeroSection from "./components/HeroSection";
import { ReasonsSection } from "./components/ReasonsSection";
import Footer from "./footer";
import NavBar from "./navbar";

const Landing = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HowSection />
      <ReasonsSection />
      <BenefitsSection />
      <HelpSection />
      <Footer />
    </>
  );
};

export default Landing;
