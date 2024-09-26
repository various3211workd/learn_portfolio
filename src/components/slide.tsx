'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import useEmblaCarousel from 'embla-carousel-react';

const slideList = [
  'https://docs.google.com/presentation/d/1wyRZBwqsDuEElFjQH0MFrthDzOO2DG4r/embed?start=false&loop=false&delayms=3000',
  'https://docs.google.com/presentation/d/1OfavZ96fGvc-3HKPQ2lnR9p48MKYRJQc/embed?start=false&loop=false&delayms=3000',
  'https://docs.google.com/presentation/d/1vcuY6a250y23zkKr0Y69buF2PDyZBG0X/embed?start=false&loop=false&delayms=3000',
  'https://docs.google.com/presentation/d/12ctDnN0RfV5_IhQYMbYHNxZWaMUh2DQT/embed?start=false&loop=false&delayms=3000',
];

const Slide = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handleNext = () => {
    if (!emblaApi || !emblaApi.canScrollNext()) return;
    emblaApi.scrollNext();
  };

  const handlePrev = () => {
    if (!emblaApi || !emblaApi.canScrollPrev()) return;
    emblaApi.scrollPrev();
  };

  return (
    <section id="slide">
      <div className="text-center pt-20">
        <p className="text-4xl pb-10 text-center font-semibold whitespace-nowrap underline decoration-[#A04747]">
          <FontAwesomeIcon icon={faSlideshare} className="pr-2" />
          Slide
        </p>
        <p className="text-xl my-5">勉強会などで使用したスライド</p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slideList.map((s: any, index: any) => (
              <div key={index} className="flex justify-center flex-[0_0_100%]">
                <iframe
                  src={s}
                  className="w-full h-full md:max-w-xl aspect-[4/3] "
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex my-10">
          <button
            onClick={handlePrev}
            className="bg-gray-600 text-white rounded-l-md border-r border-gray-700 py-2 hover:bg-gray-900 hover:text-white px-3"
          >
            <div className="flex flex-row items-center">
              <FontAwesomeIcon icon={faAngleLeft} className="w-5 ml-2" />
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-600 text-white rounded-r-md py-2 border-l border-gray-700 hover:bg-gray-900 hover:text-white px-3"
          >
            <div className="flex flex-row items-center">
              <span className="mr-2">Next</span>
              <FontAwesomeIcon icon={faAngleRight} className="w-5 ml-2" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slide;
