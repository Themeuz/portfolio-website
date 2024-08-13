"use client";
import React from 'react';


const HeroSection = () => {
  return (
    <section className="z-30 bg-[#f3efe8] md:mt-44 px-10 py-20 md:px-44 md:py-40 rounded-xl">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#025a4e]">
            Colaborações e comprometimentos!
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-[#025e4e] mt-8">
            Antes de entrar no mundo do desenvolvimento, entrei de cabeça nos estudos para tentar entrar no mercado de dados. Eu estudava e me dedicava à análise de dados, aos projetos sobre dados e tudo que nele envolvia. Gostei muito de mexer com Python e me interessei mais pelo desenvolvimento de software a partir daí, me chamou mais atenção do que a análise de dados de fato.
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl text-[#025e4e] mt-8">
            Automatizar tarefas, codificar produtos e programas de fácil acesso, era tudo que eu aprendi estudando sobre dados resolver problemas, porém de uma forma que eu entendia com muita facilidade. Carreguei e mantive o frescor na minha mente para produzir e até mesmo inventar, criar ideias de projetos surpreendentes dos quais um dia gostaria muito de poder exercer, quem sabe.
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl text-[#025e4e] mt-8">
            Atualmente, estou focado em ser um Full Stack JavaScript, mesmo tendo boas práticas com Python, me identifiquei bastante com o JS, sobretudo com Node, React, NextJS.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="px-8 py-3 bg-[#185541] hover:bg-[#154435] text-[#ede7de] font-bold rounded-md">
              Saiba mais →
            </button>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex flex-col gap-8 items-end">
          <div className="relative w-full">
            <img
              className='w-full h-auto z-10'
              src="/images/DrawKit Vector Illustration Project Manager (16).png"
              alt="Project Manager"
              width={560}
              height={400}
            />
          </div>
          <div className="bg-[#025e4e] rounded-full px-8 py-3 font-bold text-center text-[#ede7de]">
            <div className="text-xl">Python Development</div>
            <div className="text-sm text-[#d4ede4]">Freelance — 501 Tech (6M)</div>
          </div>
          <div className="bg-[#025e4e] rounded-full px-8 py-3 font-bold text-center text-[#ede7de]">
            <div className="text-xl">Python Development</div>
            <div className="text-sm text-[#d4ede4]">Freelance — (2M)</div>
          </div>
          <div className="bg-[#025e4e] rounded-full px-8 py-3 font-bold text-center text-[#ede7de]">
            <div className="text-xl">Montagem e manutenção</div>
            <div className="text-sm text-[#d4ede4]">Auxiliar — (7M)</div>
          </div>
          <div className="bg-[#025e4e] rounded-full px-8 py-3 font-bold text-center text-[#ede7de]">
            <div className="text-xl">JavaScript Development</div>
            <div className="text-sm text-[#d4ede4]">Front-End — Thais Rosenau Lawfirm (3M)</div>
          </div>
          <div className="bg-[#025e4e] rounded-full px-8 py-3 font-bold text-center text-[#ede7de]">
            <div className="text-xl">JavaScript Project</div>
            <div className="text-sm text-[#d4ede4]">E-commerce App</div>
          </div>
          <div className="bg-[#025e4e] rounded-full px-8 py-3 font-bold text-center text-[#ede7de]">
            <div className="text-xl">Full Stack JS Project</div>
            <div className="text-sm text-[#d4ede4]">Food Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
