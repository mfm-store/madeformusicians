import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const WelcomeComponentMobile = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Set to true when the component is hydrated
  }, []);

  return (
    <>
      {/* <h1 className="text-xl sm:hidden font-bold mb-4">Welcome to Made for Musicians (MFM)</h1> */}
      <div className="relative sm:hidden h-[150px]">

        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.pianodreamers.com/wp-content/uploads/2021/05/guitar-accessories-guide-main@2x.jpg')`,
          }}
        >
          <div className="absolute inset-0 opacity-60 border-bottom border-dotted border-gray-400 border-4 border-t-0 border-l-0 border-r-0" />
          <div className="absolute inset-0">
            <div className="text-left text-black p-4">
              <p className="text-md mb-4">Discover high-quality accessories to enhance your musical experience.</p>
              <button className="bg-[#BC5D2E] text-white px-4 py-2 rounded-full font-bold hover:bg-[#DE9151]">
                <Link href="/products">Explore Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeComponentMobile;
