import { useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="carousel w-full h-[600px] overflow-hidden relative">
      <div
        id="slide1"
        className={`carousel-item absolute w-full h-full flex justify-center items-center bg-primary bg-opacity-10 ${
          currentSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <img
          src="/mountain2.jpg"
          className="w-full h-full object-cover object-center"
          alt="Slide 1"
        />
        <div className="absolute inset-0 flex justify-between items-center">
          <button onClick={() => goToSlide(4)} className="btn btn-circle">
            ❮
          </button>
          <button onClick={() => goToSlide(2)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide2"
        className={`carousel-item absolute w-full h-full flex justify-center items-center bg-primary bg-opacity-10 ${
          currentSlide === 2 ? 'block' : 'hidden'
        }`}
      >
        <img
          src="/pizza.jpg"
          className="w-1/2 h-2/3 object-cover object-center"
          alt="Slide 2"
        />
        <div className="absolute inset-0 flex justify-between items-center">
          <button onClick={() => goToSlide(1)} className="btn btn-circle">
            ❮
          </button>
          <button onClick={() => goToSlide(3)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide3"
        className={`carousel-item absolute w-full h-full flex justify-center items-center bg-primary bg-opacity-10 ${
          currentSlide === 3 ? 'block' : 'hidden'
        }`}
      >
        <img
          src="/mountain1.jpg"
          className="w-7/12 object-cover object-center"
          alt="Slide 3"
        />
        <div className="absolute inset-0 flex justify-between items-center">
          <button onClick={() => goToSlide(2)} className="btn btn-circle">
            ❮
          </button>
          <button onClick={() => goToSlide(4)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide4"
        className={`carousel-item absolute w-full h-full flex justify-center items-center bg-primary bg-opacity-10 ${
          currentSlide === 4 ? 'block' : 'hidden'
        }`}
      >
        <img
          src="/hike2.jpg"
          className="w-full object-cover object-center"
          alt="Slide 4"
        />
        <div className="absolute inset-0 flex justify-between items-center">
          <button onClick={() => goToSlide(3)} className="btn btn-circle">
            ❮
          </button>
          <button onClick={() => goToSlide(1)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
