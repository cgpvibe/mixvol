// components/Header.js
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className='w-full bg-black/0 fixed top-0 left-0 backdrop-blur-none z-20 mix-blend-difference'>
      <div className='flex justify-between items-center h-12 lg:h-16 bg-white/0 px-4 lg:px-5'>
        <div className='w-[100px] h-full lg:w-[150px]'>
          <Logo />
        </div>
        <Menu />
      </div>
    </header>
  );
}