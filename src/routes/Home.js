import Header from '../components/Header';
import Preview from '../components/Preview';
import Specials from '../components/Specials';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Footer from '../components/Footer';

export default function HomePage(){
  return(
    <>
      <Header />
      <Preview />
      <Specials />
      <Reviews />
      <About />
      <Footer />
    </>
  )
}