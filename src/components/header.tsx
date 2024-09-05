import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
      <header className="sticky top-0 flex flex-row scroll-smooth">
        <a href="#top">
          <FontAwesomeIcon icon={faHouse} className='text-5xl pt-5 pl-5 text-[#3C3D37]'/>
        </a>
      </header>
  )
}

export default Header