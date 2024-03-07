import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import products from "../config/products";

// Define color variables
const backgroundColor = "bg-gray-100";
const cardBackgroundColor = "bg-white";
const cardHoverColor = "hover:-translate-y-1";
const textColor = "text-gray-600";
const titleColor = "text-4xl font-bold";
const cardTitleColor = "text-xl font-semibold";

const Products = () => {
  const router = useRouter();
  const onCardClick = (id) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    products.forEach((product) => {
      router.prefetch(`/product/${product.id}`);
    });
  }, [router]);

  return (
    <div className={`${backgroundColor} p-4 lg:p-8`}>
      <h1 className={`${titleColor} mb-6`}>Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative ${cardBackgroundColor} p-6 shadow-md rounded-md cursor-pointer transition-transform ${cardHoverColor}`}
            onClick={() => {
              onCardClick(product.id);
            }}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
