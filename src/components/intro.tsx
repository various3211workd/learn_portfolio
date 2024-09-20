import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  return (
    <div className="min-h-[45vh] bg-center bg-cover bg-opacity-75">
      <div className="flex justify-center h-screen w-screen overflow-scroll">
        <div className="grid content-center pb-32 duration-75 animate-tracking-in-expand md:text-8xl text-4xl relative">
          <p className="font-serif text-center text-sky-500 opacity-50 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            PORTFOLIO
          </p>
          <p className="font-semibold z-0 text-slate-800 dark:text-white">
            ぽーとふぉりお
          </p>
        </div>
        <div className="flex justify-center flex-col absolute bottom-20 text-2xl animate-bounce duration-300 hover:font-bold">
          <FontAwesomeIcon icon={faChevronDown} />
          <p>scroll</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
