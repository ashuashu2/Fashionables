import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/headerText";
import {Home} from "./components/Home/Home"
import { Navbar } from "./components/Nav/Nav";
import { ProductDetail } from "./components/productDetail";
import { Filter } from "./components/productStore/filter";
import { ProductListing } from "./components/productStore/productListing";
import { Store } from "./components/productStore/store";


function App() {
  return (
    <div className="App">
     <Header />
   
      <Navbar />
     
<h1>ashu</h1>      


      
     
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Cart" element={<Cart />} />
        <Route  path="/Store" element={<Store />} />
        <Route  path="/Filter" element={<Filter />} />
        <Route  path="/ProductListing" element={<ProductListing />} />
        <Route  path="/ProductDetail/:productId" element={<ProductDetail />} />



      


      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
