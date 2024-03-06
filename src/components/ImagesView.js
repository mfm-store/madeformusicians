import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ImagesView = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.imageUrl);
  const [thumbnailImages, setThumbanilImages] = useState([]);

  useEffect(() => {
    if (product.imageUrl) {
      setMainImage(product.imageUrl);
      setThumbanilImages([product.imageUrl, ...product.secondaryImageUrls || []]);
    }

  }, [product]);

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      {/* Main Image */}
      <div className="flex-1 p-4">
        <div className="relative w-full h-0 pb-9/16 overflow-hidden rounded-md border border-gray-300 ">
          <Image src={mainImage} fill alt={product.name} className="absolute inset-0 object-cover w-full h-full" />
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex flex-wrap flex-row ml-4">
        {thumbnailImages?.map((thumbnailUrl, index) => (
          <div key={index} className="w-12 h-12 md:w-20 md:h-20 mr-2 relative">
            <Image
              src={thumbnailUrl}
              fill
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover cursor-pointer rounded-md border border-gray-300 hover:border-blue-500"
              onClick={() => handleThumbnailClick(thumbnailUrl)}
              sizes='120px,120px'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesView;
