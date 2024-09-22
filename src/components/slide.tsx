import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';

const Slide = () => {
  return (
    <section id="slide">
      <div className="text-center pt-20">
        <p className="text-4xl pb-10 text-center font-semibold whitespace-nowrap underline decoration-[#A04747]">
          <FontAwesomeIcon icon={faSlideshare} className="pr-2" />
          Slide
        </p>
        <p className="text-xl my-5">勉強会などで使用したスライド</p>
      </div>
    </section>
  );
};

export default Slide;
