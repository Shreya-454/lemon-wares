import './App.css';
import Header from './components/Header';
import Hosting from './components/Hosting';
import Cards from './components/Cards';
import Ready from './components/Ready';
import Realstories from './components/Realstories';
import Nigerian from './components/Nigerian';
import Awesome from './components/Awesome';
import Footer from './components/Footer';
import Mynav from './components/Mynav';
import BackToTop from './components/BackToTop';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader />
      </div>
    ) : (
    <div className="App">
      <Mynav/>
     <Header/>
     <Hosting/>
     <Cards/>
     <Ready/>
     <Realstories/>
     <Nigerian/>
     <Awesome/>
     <Footer/>
     <BackToTop/>
    </div>
    )}
    </div>
  );
}

export default App;
