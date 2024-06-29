import Image from "next/image";
import HeroSection from "./componentes/HeroSection";
import Navbar from "./componentes/Navbar";
import AboutSection from "./componentes/AboutSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#252629]">
        <Navbar/>
      <div className="container mt-32 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
      </div>
    </main>
  );
}

