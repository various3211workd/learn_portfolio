import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Intro = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      
      
      <div className="flex justify-center flex-col bottom-0">
        <FontAwesomeIcon icon={faChevronDown} className="text-4xl" />
        <p className="text-xl flex justify-center">scroll</p>
      </div>
    
    </div>
  )
}

export default Intro;
