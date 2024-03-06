// pages/_app.js
import '../styles/global.css';
import Layout from '../components/layout';
import FooterComponent from '../components/FooterComponent';

function MyApp({ Component, pageProps }) {
  return (<Layout>
    <Component {...pageProps} />
    <FooterComponent />
  </Layout>);
}

export default MyApp;
