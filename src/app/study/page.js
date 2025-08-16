import Link from 'next/link'
import React from 'react'

export default function Study() {
  return (
    <div className='container'>
      <div className='grid grid-cols-4 p-10 rounded-lg bg-white'>
        <div className='bg-black p-10 space-y-3 rounded-lg'>
          <h2 className='text-2xl font-semibold'>GSAP</h2>
          <ul>
            <li>
              <Link href='/study/gsap/scrolltrigger/1' className='block underline'>scrolltrigger 1</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
