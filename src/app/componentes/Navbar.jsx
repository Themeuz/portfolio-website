"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import {  Bars3Icon, XMarkIcon, XmarkIcon  } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay'

const navLinks = [
  {
    title: "Sobre",
    path: "#about",
  },
  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Estudos",
    path: "#learns",
  },
]

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#f2f1da] bg-opacity-80'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href={"/"} className="text-2xl md:text-6xl text-[#536d66] font-semibold">
               {/* COLOCAR A LOGO AQUI!! */}
            </Link>
            <div className="mobile-menu block md:hidden">
              {!navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-state-200 hover:text-[#536d66] hover:border-white'>
                  <Bars3Icon className='h-5 w-5'/>
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-state-200 hover:text-[#536d66] hover:border-white'>
                  <XMarkIcon className='h-5 w-5'/>
                </button>
              )}

            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-6 md:p-2 md:flex-row md:space-x-8 mt-2'>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title}/>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} />:null}
    </nav>
  );
};

export default NavBar