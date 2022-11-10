import '../styles/globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

function MyApp({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
