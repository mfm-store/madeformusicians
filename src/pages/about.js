import React from 'react';
import { primaryTextColor, secondaryTextColor } from '../config/theme';

// Define primary color variable
const primaryColor = primaryTextColor;

const AboutUs = () => {
  return (
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What Sets Us Apart</h3>
              <p className="text-gray-600">What sets <span className={`${secondaryTextColor} font-bold`}>Website Name</span> apart from other music instrument retailers is our unwavering commitment to offering only the finest and most distinctive accessories on the market.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet the Owner</h3>
              <p className="text-gray-600">Deepanshu Batra, is not only a seasoned software engineer but also a passionate musician with a deep love for music instruments.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h3>
              <p className="text-gray-600">When you shop at <span className={`${secondaryTextColor} font-bold`}>Website Name</span>, you can trust that you're not just purchasing a product—you're investing in a piece of musical artistry that has been carefully selected for its quality and uniqueness.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">Join our community on Instagram:</p>
          <a href="#" className={`${secondaryTextColor} font-semibold hover:underline`}>Instagram</a>
          <div className="mt-8">
            <p className="text-lg text-gray-600">For any inquiries or assistance, please contact us:</p>
            <p className={`text-lg ${secondaryTextColor} font-semibold mt-2`}>contact@websitename.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
