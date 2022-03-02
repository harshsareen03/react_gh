import{Route,Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Product from './components/Product'
import Productdetail from './components/Productdetail'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/product" element={<Product/>}/>
    <Route path ="/cart" element={<Cart/>}/>
    <Route path ="/products/:id" element={<Productdetail/>}/>
    <Route path ="/checkout" element={<Checkout/>}/>
  </Routes>
  </>
  );
}

export default App;
