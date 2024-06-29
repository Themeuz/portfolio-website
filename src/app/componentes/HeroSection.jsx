"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-[#c1c4ce] mb-4 text-6xl font-extralight sm:text-5xl'>Oi, me chamo <strong className=' mb-4 text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFC86B] to-[#6DAFA7]'>Matheus Bicego</strong></h1>
                 <span className='px-6 py-5 text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6DAFA7] to-amber-300'>{""}
                 <TypeAnimation
                    sequence={[
                      'Full Stack Development',
                      1000,
                      'JavaScript Development',
                      1000,
                      'System of Information',
                      1000,
                    ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
                </span>
                <p className='text-[#c1c4ce] text-base sm:text-lg mb-7 lg:text-xl font-extralight'>
                  Oi, que bom ter você aqui! Pode me chamar de Thameus. Eu sou desenvolvedor Full Stack e transformo café em <s>gambiarras</s> códigos muito bem escritos e limpos. :) :) :)
                </p>
                <div>
                  <a href="mailto:matheusbicegodata@gmail.com">
                  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-bl from-[#aad8d3] to-[#e9eb7f] hover:border text-slate-800'>Contato</button>
                  </a>
                  <a href="https://drive.google.com/file/d/1wrR6N0s6-Mw5Cj21E2h7iyrW9MhNbBiC/view">
                  <button href="##LINKACESSO" className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-state-800 text-white border hover:border-amber-300 mt-3'>Currículo</button>
                  </a>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full image-full w-[690px]">
                <img 
                src="/images/portfolio-image-init.png"
                 alt="Portfolio"
                  />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection