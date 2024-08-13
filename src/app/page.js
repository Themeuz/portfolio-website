import HeroSection from "./componentes/HeroSection";
import Navbar from "./componentes/Navbar";
import AboutSection from "./componentes/AboutSection";
import Footer from "./componentes/Footer";
import ProjectSection from "./componentes/ProjectSection";
import AboutMe from "./componentes/AboutMe";
import Know from "./componentes/Know";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-row bg-gradient-to-l from-[#e7e4b5] to-[#ede7de]">
        <Navbar/>
      <div className="container mt-32 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection />
        <AboutMe />
        <Know />
        <Footer/>
      </div>
    </main>
  );
}

