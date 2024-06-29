"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title: "habilidades",
    id: "habilidades",
    content: (
      <ul className='list-disc pl-2'>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Node.JS</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Tailwind CSS</li>
        <li>MongoDB</li>
        <li>TypeScript</li>
        <li>Git/GitHub</li>
      </ul>
    )
  },
  {
    title: "certificados",
    id: "certificados",
    content: (
      <ul className='list-disc pl-2'>
        <li>Sistemas de Informação - 3/8</li>
        <li>Transformando Dados em Informação</li>
        <li>Excel Avançado</li>
        <li>Power Bi para Dados</li>
        <li>Python avançado</li>
        <li>Full Stack Devs VIVO Bootcamp</li>
        <li>JavaScript Orientando Objetos</li>
        <li>Ruby performático</li>
        <li>Jquery limpo</li>
        <li>Boas práticas com C#</li>
      </ul>
    )
  },
  {
    title: "experiencias",
    id: "experiencias",
    content: (
      <ul className='list-disc pl-2'>
        <li>Desenvolvedor Python – Freelancer</li>
        <li>Desenvolvedor Front-End – Freelancer</li>
        <li>Desenvolvedor Python – Freelancer</li>
      </ul>
    )
  }
]


const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/ilustrador-about.png"
          width={500}
          height={500}
          alt="Ilustração sobre mim"
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-5xl font-extrabold text-white mb-4">Sobre mim ––</h2>
          <p className="text-[#c1c4ce] text-base sm:text-lg mb-7 lg:text-xl font-extralight">
            Eu atualmente estou estudando <a className="underline decoration-yellow-500">Sistemas de Informação</a> e estou no terceiro semestre.
            Tenho pouca experiência profissional como um programador atuando mais como freelancer <a className="underline decoration-yellow-500">Como Desenvolvedor Python</a> e melhorando meus conhecimentos <a className="underline decoration-yellow-500">Node.JS, React, Next, JavaScript e PHP</a>. Pretendo me especializar como Full-Stack por mais que eu já tenha tentado arriscar na área de dados no passado.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
            selectTab={() => handleTabChange("habilidades")}
            active={tab === "habilidades"}
            >
              {" "}
              Habilidades {" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("certificados")}
            active={tab === "certificados"}
            >
              {" "}
              Certificados {" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("experiencias")}
            active={tab === "experiencias"}
            >
              {" "}
              Experiências {" "}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;