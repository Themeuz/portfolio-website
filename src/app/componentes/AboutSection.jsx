"use client";
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import Image from 'next/image';

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <ul className='list-disc pl-5'>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Node.js</li>
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
    title: "Certificados",
    id: "certificados",
    content: (
      <ul className='list-disc pl-5'>
        <li>Sistemas de Informação - 3/8</li>
        <li>Transformando Dados em Informação</li>
        <li>Excel Avançado</li>
        <li>Power BI para Dados</li>
        <li>Python Avançado</li>
        <li>Full Stack Devs VIVO Bootcamp</li>
        <li>JavaScript Orientado a Objetos</li>
        <li>Ruby Performático</li>
        <li>JQuery Limpo</li>
        <li>Boas Práticas com C#</li>
      </ul>
    )
  },
  {
    title: "Experiências",
    id: "experiencias",
    content: (
      <ul className='list-disc pl-5'>
        <li>Desenvolvedor Python – Freelancer</li>
        <li>Desenvolvedor Front-End – Freelancer</li>
        <li>Desenvolvedor Python – Freelancer</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#025a4e]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/DrawKit Vector Illustration Project Manager (18).png"
          width={500}
          height={500}
          alt="Ilustração sobre mim"
          className="w-full h-auto"
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#025a4e] mb-4">
            Sobre mim ––
          </h2>
          <p className="text-[#025a4e] text-base sm:text-lg mb-7 lg:text-3xl font-extralight">
            Eu atualmente estou estudando <a className="underline decoration-[#194e1c]">Sistemas de Informação</a> e estou no terceiro semestre.
            Tenho pouca experiência profissional como programador, atuando mais como freelancer <a className="underline decoration-[#194e1c]">Desenvolvedor Python</a> e melhorando meus conhecimentos em <a className="underline decoration-[#194e1c]">Node.js, React, Next.js, JavaScript e PHP</a>. Pretendo me especializar como Full-Stack, embora já tenha tentado a área de dados no passado.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className='mt-4'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
