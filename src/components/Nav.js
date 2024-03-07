import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { primaryBgColor, secondaryTextColor, textColor, hoverTertiaryTextColor } from '../config/theme';

// Define color variables
const primaryColor = primaryBgColor;
const activeClassName = `${secondaryTextColor} font-bold`;

const Nav = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <>
      <Link className='flex my-2 ml-2' href="/">
        <div className='w-10 h-10 relative'>
          <Image src='/mfmlogo.jpeg' fill className='rounded-full  py-xs' sizes="50px,50px" />
        </div>
        <div className='font-bold text-2xl ml-4 flex items-center'>
          Made for Musicians
        </div>
      </Link>
      <nav className={`${primaryColor} ${textColor} tracking-wide`}>
        <div className="container flex items-center">
          <Link href="/" className={`${!isActive('/') && hoverTertiaryTextColor} text-xl p-4 ${isActive('/') && activeClassName}`}>
            Home
          </Link>
          <Link href="/products" className={`${!isActive('/products') && hoverTertiaryTextColor} mr-4 p-4 ${isActive('/products') && activeClassName}`}>
            Products
          </Link>
          <Link href="/about" className={`${!isActive('/about') && hoverTertiaryTextColor} p-4 ${isActive('/about') && activeClassName}`}>
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
