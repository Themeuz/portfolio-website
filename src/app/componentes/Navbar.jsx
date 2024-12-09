"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

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
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#f2f1da] bg-opacity-80 rounded-full z-70 px-8 py-6'>
      <div className='flex items-center justify-between'>
        <Link href="/" className="text-2xl md:text-4xl text-[#536d66] font-semibold">
          {/* FUTURA LOGO AQUI!! */}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded-full border-slate-200 hover:text-[#536d66] hover:border-white'>
              <Bars3Icon className='h-5 w-5'/>
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded-full border-slate-200 hover:text-[#536d66] hover:border-white'>
              <XMarkIcon className='h-5 w-5'/>
            </button>
          )}
        </div>
        <div className='menu hidden md:block' id="navbar">
          <ul className='flex space-x-6'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default NavBar;
