
import './App.css';
import Addoffer from './components/AdminPanel/Addoffer/addoffer';
import Addproduct from './components/AdminPanel/Addproduct/addproduct';
import Addteam from './components/AdminPanel/Addteam/addteam';
import AddTestimonial from './components/AdminPanel/Addtestimonial/addtestimonial';
import Admin from './components/AdminPanel/admin';
import About from './components/UserPanel/About/about';
import Home from './components/UserPanel/home/home';
import  {Routes,Route} from 'react-router-dom';
import Shoppage from './components/UserPanel/shop/shop';
import Contactpage from './components/UserPanel/Contact/contact';

import ProductDetail from './components/UserPanel/Shopdetail/shopdetail';

import Login from './components/UserPanel/usersLogin/login';
import Register from './components/UserPanel/usersLogin/register';
import Cart from './components/UserPanel/Cart/cart';
import Checkout from './components/UserPanel/Checkout/checkout';
import Team from './components/UserPanel/Team/team';


function App() {

  return (
    <div className="App">


          <Routes>
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/Product" element={<Addproduct/>} />
                <Route path="/Offer" element={<Addoffer/>} />
                <Route path="/AddTeam" element={<Addteam/>} />
                <Route path="/Testimonial" element={<AddTestimonial/>} />

                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Shop" element={<Shoppage/>} />
                <Route path="/Contact" element={<Contactpage/>} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/Checkout" element={<Checkout/>} />
                <Route path="/Team" element={<Team/>} />

                <Route path="/login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
              </Routes>
    </div>
  );
}

export default App;
