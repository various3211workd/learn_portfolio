"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"

import { DarkModeButton } from './darkmodebutton'
import { ThemeProvider } from 'next-themes'

const Header = () => {
  return (

    <ThemeProvider attribute="class" defaultTheme="dark">
      <header className="sticky flex flex-row scroll-smooth bg-[#343131] pb-3 bg-opacity-80 top-0 flex flex-row fixed ">
        <a href="#top">
          <FontAwesomeIcon icon={faHouse} className='text-5xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A]'/>
        </a>

        <a href="#mynameis" className='text-3xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A] hover:underline decoration-[#A04747]'>MyNameIs</a>
        <a href="#project" className='text-3xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A] hover:underline decoration-[#A04747]'>projects</a>
        <a href="#skills" className='text-3xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A] hover:underline decoration-[#A04747]'>skills</a>

        <div className="fixed pt-5 right-5">
          <DarkModeButton />
        </div>

      </header>
    
    </ThemeProvider>

  )
}

export default Header