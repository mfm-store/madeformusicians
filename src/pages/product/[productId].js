import React, { useEffect, useState } from 'react';
import products from '../../config/products';
import Image from 'next/image';
import { useRouter } from 'next/router'
import ImagesView from '../../components/ImagesView';
import ProductDescription from '../../components/ProductDescription';

// Define color variables
const buttonBackgroundColor1 = "bg-[#cd486b]";
const buttonHoverColor1 = "hover:bg-pink-500";
const buttonBackgroundColor2 = "bg-green-600";
const buttonHoverColor2 = "hover:bg-green-500";

const VariantThumbnail = ({ imageUrl, variantId, variantLabel, defaultVariant }) => {
  const router = useRouter();
  const queryParams = new URLSearchParams(router.query);
  const variantFromQueryParams = queryParams.get('variant') || defaultVariant;
  const handleClick = () => {
    // Construct new query parameter string
    const queryParams = new URLSearchParams(router.query);
    queryParams.set('variant', variantId);

    // Replace the current URL with the updated query parameter
    router.push({ pathname: router.pathname, query: queryParams.toString() });
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className={`relative w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:border border-gray-500 ${variantId === variantFromQueryParams ? 'border-[#DE9151] border' : ''}`} onClick={handleClick}>
        <Image src={imageUrl} fill alt="Product Thumbnail" className="w-full h-full object-cover" sizes="120px,120px" />
      </div>
      <div className='text-black'>{variantLabel}</div>
    </div>

  );
};

const VariantThumbnails = ({ products, defaultVariant }) => {
  debugger;
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {products.map((product, index) => (
        <VariantThumbnail key={index} {...product} defaultVariant={defaultVariant} />
      ))}
    </div>
  );
};

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState({});
  console.log('productis', product);
  const router = useRouter();
  useEffect(() => {
    const { productId } = router.query;
    const queryParams = new URLSearchParams(router.query);
    const product = products.find(({ id }) => { return (id + '' === productId) }) || {}
    setProduct(product);
    const variantFromParam = queryParams.get('variant');
    setVariant(product?.variants?.find(({ variantId }) => { return (variantId === variantFromParam) }));
    console.log('variantis', variant);
  }, [router.query]);

  const handleBuyOnInstagram = () => {
    // Generate a custom message with the product link
    const message = `I want to buy ${product.name}! ${window.location.href}`;

    // Open Instagram in a new tab with the pre-written message
    window.open(`${product.instagramUrl}`, '_blank');
  };

  const handleSendWhatsappMessage = () => {
    const phoneNumber = '9319905674';  // Replace with the recipient's phone number
    const message = 'Hi, I am interested in buying this product www.madeformusicians.in/product/123';

    const apiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Open a new window or tab with the WhatsApp API URL
    window.open(apiUrl, '_blank');
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Left: Zoomable Image */}

      <div className="flex-1 p-4">
        <ImagesView product={variant || product} />
      </div>

      {/* Right: Product Details */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-2 text-green-600 font-bold">&#8377;{variant?.price || product?.price} <span className='font-normal text-2xs'>(includes shipping)</span></p>
        {product.variants ? <VariantThumbnails products={product.variants} defaultVariant={product.defaultVariant} /> : null}
        <ProductDescription description={product.description} />
        {/* <ul className="text-gray-600 mb-4 flex flex-col list-disc" dangerouslySetInnerHTML={{ __html: product.description }} /> */}
        {/* Buy on Instagram Button */}

        <div className='flex flex-col space-y-2'>
          <button
            onClick={handleBuyOnInstagram}
            className={`text-white px-6 py-3 rounded-full font-bold ${buttonBackgroundColor1} ${buttonHoverColor1}`}
          >
            Buy on Instagram
          </button>

          <button
            onClick={() => { handleSendWhatsappMessage() }}
            className={`text-white px-6 py-3 rounded-full font-bold ${buttonBackgroundColor2} ${buttonHoverColor2}`}
          >
            Buy on WhatsApp
          </button>
        </div>
      </div>
    </div >
  );
};

export default ProductPage;
