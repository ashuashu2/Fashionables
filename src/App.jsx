import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Eror404 } from "./components/Error404";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/headerText";
import { Home} from "./components/Home/Home"
import { Navbar } from "./components/Nav/Nav";
import { ProductDetail } from "./components/productDetail";
import { Filter } from "./components/productStore/filter";
import { MenClothes } from "./components/productStore/menWomenPage/men";
import { WomenClothes } from "./components/productStore/menWomenPage/women";
import { ProductListing } from "./components/productStore/productListing";
import { Store } from "./components/productStore/store";
import { WishList } from "./components/wishlist/wishList";


function App() {
  return (
    <div className="App">
     <Header />
   
      <Navbar />
    


      
     
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Cart" element={<Cart />} />
        <Route  path="/Store" element={<Store />} />
        <Route  path="/Filter" element={<Filter />} />
        <Route  path="/ProductListing" element={<ProductListing />} />
        <Route  path="/Men" element={<MenClothes />} />
        <Route  path="/Women" element={<WomenClothes />} />
        <Route  path="/Women" element={<WomenClothes />} />
        <Route  path="/*" element={<Eror404 />} />
        <Route  path="/WishList" element={<WishList/>} />




        
        <Route  path="/ProductDetail/:productId" element={<ProductDetail />} />



      


      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
