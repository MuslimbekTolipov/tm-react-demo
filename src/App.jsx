
import './App.css';
import Banner from './Campanentalar/Banner/Banner';
import Gul from './Campanentalar/Gul/Gul';
import Navbar from './Campanentalar/Navbar/Navbar';
import Product from './Campanentalar/Product/Product';
import About from './Campanentalar/About/About';
import Says from './Campanentalar/Says/Says';
import Subcribe from './Campanentalar/Subcribe/Subcribe';
import Fallow from './Campanentalar/Fallow/Fallow';
import Footer from './Campanentalar/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Gul/>
      <About/>
      <Product/>
      <Says/>
      <Subcribe/>
      <Fallow/>
      <Footer/>
    </div>
  );
}

export default App;
