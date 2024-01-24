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

function App() {
  return (
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
    </div>
  );
}

export default App;
