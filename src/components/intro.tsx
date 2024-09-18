import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  return (
    <div className="flex justify-center h-screen w-screen overflow-scroll">
      <div className="grid content-center pb-32 duration-75 animate-tracking-in-expand">
        <p className="md:text-6xl text-4xl font-semibold">まいぽーとふぉりお</p>
      </div>
      <div className="flex justify-center flex-col absolute bottom-20 text-2xl ease-in duration-300 hover:text-3xl cursor-pointer">
        <FontAwesomeIcon icon={faChevronDown} />
        <p>scroll</p>
      </div>
    </div>
  );
};

export default Intro;
