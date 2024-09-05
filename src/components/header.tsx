"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"

import { DarkModeButton } from './darkmodebutton'
import { ThemeProvider } from 'next-themes'

const Header = () => {
  return (

    <ThemeProvider attribute="class" defaultTheme="dark">
      <header className="sticky top-0 flex flex-row scroll-smooth">
          
        <a href="#top">
          <FontAwesomeIcon icon={faHouse} className='text-5xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A]'/>
        </a>

        <div className="top-0 flex flex-row fixed left-20">
        <a href="#mynameis" className='text-3xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A] hover:underline decoration-[#A04747]'>MyNameIs</a>
        <a href="#project" className='text-3xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A] hover:underline decoration-[#A04747]'>projects</a>
        <a href="#skills" className='text-3xl pt-5 pl-5 text-[#A04747] dark:text-[#EEDF7A] hover:underline decoration-[#A04747]'>skills</a>
        </div>

        <div className="fixed pt-5 right-5">
          <DarkModeButton />
        </div>

      </header>
    
    </ThemeProvider>

  )
}

export default Header