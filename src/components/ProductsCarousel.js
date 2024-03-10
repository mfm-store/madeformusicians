import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from '../config/products';
import { hoverTertiaryBgColor, textColor, tertiaryBgColor } from '../config/theme';

// Define color variables
const tertiaryColor = tertiaryBgColor;
const hoverColor = hoverTertiaryBgColor;

const ProductCarousel = () => {
  // Replace this with actual product data

  const featuredProducts = products.sort((a, b) => { return a.rank - b.rank }).slice(0, 6);
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className={`absolute font-bold top-1/2 left-4 transform -translate-y-1/2 ${tertiaryColor} ${textColor} rounded-full w-[35px] h-[35px] z-10 ${hoverColor} transition duration-300`}
      onClick={onClick}
    >
      &lt;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className={`absolute font-bold top-1/2 right-4 transform -translate-y-1/2 ${tertiaryColor} ${textColor} rounded-full w-[35px] h-[35px] z-10 ${hoverColor} transition duration-300`}
      onClick={onClick}
    >
      &gt;
    </button>
  );

  // Slick carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='mx-4'>
      <Slider {...carouselSettings}>
        {featuredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="relative p-4 border rounded-md shadow-md h-[300px] cursor-pointer">
            <Image fill src={product.imageUrl} alt={product.name} className="rounded-md mb-2 h-full w-full object-contain" sizes='210px,100px' />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
