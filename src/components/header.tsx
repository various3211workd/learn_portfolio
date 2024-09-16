"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"

import { DarkModeButton } from './darkmodebutton'
import { ThemeProvider } from 'next-themes'

const Header = () => {
  return (

      <header className="sticky flex flex-row scroll-smooth bg-[#343131] pb-3 bg-opacity-80 top-0 flex flex-row fixed ">
        <a href="#top">
          <FontAwesomeIcon icon={faHouse} className='text-5xl pt-3 pl-5 text-white dark:text-[#EEDF7A]'/>
        </a>

        <div className="font-bold text-3xl pt-5 text-white dark:text-[#EEDF7A]">
          <a href="#mynameis" className="pl-5 hover:underline decoration-[#A04747]">MyNameIs</a>
          <a href="#project" className='pl-5 hover:underline decoration-[#A04747]'>projects</a>
          <a href="#skills" className='pl-5 hover:underline decoration-[#A04747]'>skills</a>
        </div>

        <div className="fixed pt-3 right-5">
          <DarkModeButton />
        </div>

      </header>
  

  )
}

export default Header