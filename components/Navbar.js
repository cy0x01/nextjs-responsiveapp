import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MenuItems } from '../components/NavbarMenuItems';

function Navbar() {

  const [show, setShow] = useState(false)

  return(
      <nav className='bg-gray-900 p-2 dark:text-white'>

          <div className='max-w-screen-lg mx-auto px-4'>

            <div className='flex justify-between items-center'>
              {/* Left */}
              <div className='flex space-x-5'>
                {/* Logo */}
                <div className='flex space-x-1 items-center font-bold'>
                  <Image 
                    height='20px'
                    width='23px'
                    src='/favicon.ico'
                  />
                  <h1>RWA</h1>
                </div>

                {/* menus */}
                <div className='hidden md:flex items-center space-x-3 font-bold text-md text-gray-300'>
                  {MenuItems.map((item, index) => {
                      return(
                        <div key={index}>
                          <Link href={item.path}>
                            <a className={item.cn}>{item.title}</a>
                          </Link>
                        </div>
                      )
                  })}
                </div>
              </div>

              {/* right */}
              <div className='hidden md:flex items-center space-x-3 font-bold text-gray-300 text-sm'>
                <Link href='/'>
                  <a className='hover:text-gray-100 p-1 rounded-sm'>Login</a>
                </Link>
                <Link href='/'>
                  <a className='hover:bg-yellow-500 p-1 text-black rounded-sm bg-yellow-600'>Signup</a>
                </Link>
              </div>

              {/* mobile */}
              <div className='md:hidden flex items-center'>
                <button role='button' onClick={() => setShow(!show)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
            </div>
          </div>

          {/* mobile */}
          <div className={show ? "" : "hidden md:hidden"}>
            {MenuItems.map((item, index) => {
              return(
                <div key={index} className='md:hidden text-center mb-2 mt-2'>
                  <Link href={item.path}>
                    <a className='w-full'>
                      <span className={item.cn}>{item.title}</span>
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
      </nav>
  )
}

export default Navbar;