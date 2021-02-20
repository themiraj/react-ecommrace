import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
import Notfound from './components/Notfount';
function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
        {/* <Banner/> */}
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route component={Notfound}/>
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
