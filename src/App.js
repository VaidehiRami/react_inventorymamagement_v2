
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct';
import ProductList from './Pages/ProductList';
import Navibar from './component/Navibar';
import { GlobalProvider } from './context/GlobalState';
import HamburgerMenu from './component/HamburgerMenu';

function App() {

  return (
    <GlobalProvider>
    <BrowserRouter>
      <div >
        <HamburgerMenu/>
        {/* <Navibar/> */}
      <Routes>
          <Route exact path='/productlist' element={<ProductList/>}></Route>
          <Route exact path='/addproduct' element={<AddProduct/>}></Route>
      </Routes>
      
      </div>
    </BrowserRouter>
    </GlobalProvider>
    // <ProductListDis/>
   
  );
}

export default App;
