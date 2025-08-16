import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='w-full bg-black/0 fixed top-0 left-0 backdrop-blur-lg z-20 mix-blend-difference'>
      <div className='container mx-auto flex justify-between items-center h-16 bg-white/0'>
        <Logo width={126} height={20} />
        <div>Menu</div>
      </div>
    </header>
  )
}
