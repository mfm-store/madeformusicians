import React from "react";
import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import products from "../config/products";

// Define color variables
const backgroundColor = "bg-gray-100";
const cardBackgroundColor = "bg-white";
const cardHoverColor = "hover:-translate-y-1";
const titleColor = "text-4xl font-bold";
const cardTitleColor = "text-xl font-semibold";

const metaDescription = "Discover a harmony of quality and affordability at Made for Musicians.Explore our diverse range of music instruments and accessories including guitar capos, straps, tuners, and more.Shop online for top - notch gear crafted to elevate your musical journey.Unleash your creativity with ease – only at Made for Musicians.";

const Products = () => {
  return (
    <>
      <Head>
        <title>Music Instruments Accesories Store | Guitar Capo | Guitar Straps | kalimba | Made For Musicians</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="guitar capo, guitar straps, kalimba, guitar strings, guitar tuner, cool guitar capo, cool guitar straps, madeformusicians, made, for, musicians" />
        <meta name="author" content="MadeForMusicians" />
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <div className={`${backgroundColor} p-4 lg:p-8`}>
        <h1 className={`${titleColor} mb-6`}>Our Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`relative ${cardBackgroundColor} p-6 shadow-md rounded-md cursor-pointer transition-transform ${cardHoverColor}`}
            >
              <div className="relative h-[200px] w-full">
                <Image
                  fill
                  src={product.imageUrl}
                  alt={product.name}
                  className="mb-4 object-cover"
                  sizes="210px,100px"
                />
              </div>
              <p className={`${cardTitleColor} mb-2`}>{product.name}</p>
              <p className="text-xl mb-2 text-green-600 font-bold">&#8377;{product?.price} <span className='font-normal text-[12px]'>(includes shipping)</span></p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
