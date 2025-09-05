import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/nNjTswC6/Bangladesh-s-maps-in-mail-stamp.jpg",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/Y4dpHNZT/download-1.jpg",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/4nryHZXd/download.jpg",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/YnPxmJ4/Vintage-Explorer-s-Desk.jpg",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl h-[400px]">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 h-full">
            <img
              src={slide.image}
              className="w-[600px] h-full object-fit"
              alt={`Slide ${slide.id}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Black arrow buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-black text-white hover:bg-gray-800"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-black text-white hover:bg-gray-800"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
