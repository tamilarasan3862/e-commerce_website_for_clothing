
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Footer/Footer';
import Men_banner from './component/asset/banner_mens.png';
import Women_banner from './component/asset/banner_women.png';
import kids_banner from './component/asset/banner_kids.png';
import Shopcontext from './component/Context/Shopcontext';
import all_product from './component/asset/all_product';
function App() {
  return (
    <div >
      <Shopcontext.Provider value={all_product}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Shopcategory banner={Men_banner} category ="men" />}/>
          <Route path='/womens' element={<Shopcategory banner={Women_banner} category="women" />}/>
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid" />}/>
          <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Shopcontext.Provider>
    </div>
  );
}

export default App;
