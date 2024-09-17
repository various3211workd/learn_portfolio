import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Intro = () => {
  return (
    <div className="flex justify-center w-full h-screen">

      <div className="flex justify-center flex-col absolute bottom-20 text-2xl ease-in duration-300 hover:text-3xl cursor-pointer">
        <FontAwesomeIcon icon={faChevronDown} />
        <p>scroll</p>
      </div>
    
    </div>
  )
}

export default Intro;
