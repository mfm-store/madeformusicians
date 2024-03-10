import Head from 'next/head';
import ProductCarousel from '../components/ProductsCarousel';
import WelcomeComponent from '../components/WelcomeComponent';
import WelcomeComponentMobile from '../components/WelcomeComponentMobile';

const metaDescription = "Discover a harmony of quality and affordability at Made for Musicians.Explore our diverse range of music instruments and accessories including guitar capos, straps, tuners, and more.Shop online for top - notch gear crafted to elevate your musical journey.Unleash your creativity with ease – only at Made for Musicians.";

const Home = () => {
  return (
    <>
      <Head>
        <title>Music Instruments Accesories Store | Guitar Capo | Guitar Straps | kalimba | Made For Musicians</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="guitar capo, guitar straps, kalimba, guitar strings, guitar tuner, cool guitar capo, cool guitar straps, madeformusicians, made, for, musicians" />
        <meta name="author" content="MadeForMusicians" />
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <WelcomeComponent />
      <WelcomeComponentMobile />
      <div className="text-center mt-8 mb-6">
        <h2 className="text-2xl xl:text-3xl font-semibold text-gray-800">Featured Products</h2>
      </div>
      <ProductCarousel />
      <div id="about" />
    </>
  );
};

export default Home;
