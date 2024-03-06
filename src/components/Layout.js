// components/Layout.js
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <div className="container mx-auto sm:mt-8 p-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
