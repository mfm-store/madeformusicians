import React from "react";
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
            <img
              src={product.imageUrl}
              alt={product.name}
              className="mb-4 w-full h-[200px] object-cover"
            />
            <p className={`${cardTitleColor} mb-2`}>{product.name}</p>
            <p className={textColor}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
