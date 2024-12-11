import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <header className='padding-x py-8 absolute z-10 w-full border-b-sl border border-b-slate-100'>
        <nav className='flex justify-between items-center max-container'>
            <a href="">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((link) => (
                <li key={link.label}> 
                  <a href={link.href} className='font-montserrat leading-normal
                  text-lg text-slate-gray'>
                    {link.label} 
                  </a>
                </li>
              ))}
            </ul>

            <div className='hidden max-lg:block'>
              <button onClick={toggleNavbar}>
                <img src={hamburger} alt="hamburger" className='w-[25px] h-[25px]' />
              </button>
            </div>
        </nav>
        <div>
          {isOpen ? (
            <ul className='flex-1 flex flex-col justify-end items-end gap-4'>
            {navLinks.map((link) => (
              <li key={link.href}> 
                <a href={link.href} className='font-montserrat leading-normal
                text-md text-slate-gray'>
                  {link.label} 
                </a>
              </li>
            ))}
            </ul>
          ) : ''}
        </div>
    </header>
  )
}

export default Nav
