import ProductCarousel from '../components/ProductsCarousel';
import WelcomeComponent from '../components/WelcomeComponent';
import WelcomeComponentMobile from '../components/WelcomeComponentMobile';
import AboutUs from './about';

const Home = () => {
  return (
    <>
      <WelcomeComponent />
      <WelcomeComponentMobile />
      <div className="text-center mt-8 mb-6">
        <h2 className="text-2xl xl:text-3xl font-semibold text-gray-800">Featured Products</h2>
        {/* <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded"></div> */}
      </div>
      <ProductCarousel />
      <div id="about" />
      {/* <AboutUs /> */}
    </>
  );
};

export default Home;
