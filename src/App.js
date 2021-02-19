import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductsContextProvider from './Global/ProductsContext';
import Products from './components/Products';
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ProductsContextProvider>
        <Products/>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
