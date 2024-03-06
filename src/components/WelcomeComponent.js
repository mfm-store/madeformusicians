import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { hoverSecondaryBgColor, hoverTertiaryBgColor, primaryBgColor, secondaryBgColor, tertiaryBgColor, textColor } from '../config/theme';

// Define color variables
const primaryColor = primaryBgColor;;
const buttonColor = tertiaryBgColor;
const buttonHoverColor = hoverTertiaryBgColor;

const WelcomeComponent = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const autoplayInterval = 5000; // 5 seconds

    const intervalId = setInterval(() => {
      carouselRef.current.slickNext();
    }, autoplayInterval);

    setIsHydrated(true); // Set to true when the component is hydrated

    return () => clearInterval(intervalId);
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
  };

  return (
    <div className={`relative hidden sm:block h-[30vh] md:h-[30vh] lg:h-[40vh] xl:h-[60vh] overflow-hidden ${primaryColor}`}>
      {!isHydrated && (
        <div className="w-full h-full">
          {/* Loading state or static content before hydration */}
          <div className="absolute inset-0 flex items-center justify-center ${textColor}">
            <p>Loading...</p>
          </div>
        </div>
      )}

      {isHydrated && (
        <Slider ref={carouselRef} {...carouselSettings}>
          <div className="relative">
            <Image fill src="/banner/accesories.jpg" />
            <div className={`absolute inset-0 opacity-30 ${primaryColor}`}></div>
          </div>
          <div className="relative">
            <img fill src="/banner/guitar.jpg" alt="Slide 2" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 opacity-30 ${primaryColor}`}></div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      )}

      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 ${textColor}`}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4">Welcome to Made for Musicians (MFM)</h1>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-8">Discover high-quality accessories to enhance your musical experience.</p>
        <Link href="/products">
          <button className={`px-6 py-3 rounded-full font-bold ${buttonColor} ${textColor} ${buttonHoverColor}`}>
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeComponent;
