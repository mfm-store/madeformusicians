import React from 'react';
import Head from 'next/head';
import { primaryTextColor, secondaryTextColor } from '../config/theme';
import Image from 'next/image';

// Define primary color variable
const primaryColor = primaryTextColor;
const metaDescription = "Discover a harmony of quality and affordability at Made for Musicians.Explore our diverse range of music instruments and accessories including guitar capos, straps, tuners, and more.Shop online for top - notch gear crafted to elevate your musical journey.Unleash your creativity with ease – only at Made for Musicians.";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Music Instruments Accesories Store | Guitar Capo | Guitar Straps | kalimba | Made For Musicians</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="guitar capo, guitar straps, kalimba, guitar strings, guitar tuner, cool guitar capo, cool guitar straps, madeformusicians, made, for, musicians" />
        <meta name="author" content="MadeForMusicians" />
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <div className={`${primaryColor} py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to <span className={`${secondaryTextColor} font-bold`}>Made For Musicians</span>, your one-stop destination for all things quirky and premium in the world of music instruments and accessories.
            </p>
            <p className="mt-2 text-lg text-gray-600">
              Our mission at <span className={`${secondaryTextColor} font-bold`}>Made For Musicians</span> is simple: to provide musicians of all levels with access to  distinctive and good quality music instrument accessories that enhance their playing experience.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet the Owner</h3>
                <div className='w-40 h-40 relative rounded-full border-solid border-red-400 border mb-2'>
                  <Image src="/aboutus/owner.jpeg" fill className='rounded-full' sizes='100px,100px' />
                </div>
                <p>
                  Hello, I'm <b>Deepanshu Batra</b>, a software engineer by profession and a passionate musician at heart.
                  By day, I dive into the world of coding, but by night, I let the melodies of music guide me.
                  I'm excited to share with you my passion project—a venture aimed at enhancing the musical journey for enthusiasts like myself.
                </p>
                <a href="https://www.instagram.com/thepanshoe" target="_blank" rel="noopener noreferrer" className={`${secondaryTextColor} font-bold`}>
                  Instagram Profile
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h3>
                <ul className="text-gray-600 list-disc text-lg">
                  <li>Best Market Prices</li>
                  <li>Superior Quality Assurance</li>
                  <li>Exclusive Selections Uncommon Elsewhere</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">Join our community on</p>
            <a target='_blank' href="https://www.instagram.com/madeformusicians" className={`${secondaryTextColor} font-semibold hover:underline`}>Instagram</a>
            <div className="mt-8">
              <p className="text-lg text-gray-600">For any inquiries or assistance, please contact us:</p>
              <p className={`text-lg ${secondaryTextColor} font-semibold mt-2`}>madeformusicians@gmail.com</p>
              <p className={`text-lg ${secondaryTextColor} font-semibold mt-2`}>WhatsApp: +91-9319905674</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
