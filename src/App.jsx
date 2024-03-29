import { Link, Route, Routes, useLocation } from "react-router-dom";




import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { EmptyCart } from "./components/Cart/emptyCart";
import { Eror404 } from "./components/Error404";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/headerText";
import { Home} from "./components/Home/Home"
import { Navbar } from "./components/Nav/Nav";
import { PlainNav } from "./components/Nav/PlainNav";
import { ProductDetail } from "./components/productDetail";
import { Login } from "./components/productStore/auth/Login";
import { RequiresAuth } from "./components/productStore/auth/RequireAuth";
import { Signup } from "./components/productStore/auth/Sigup";
import { Filter } from "./components/productStore/filter";
import { MenClothes } from "./components/productStore/menWomenPage/men";
import { WomenClothes } from "./components/productStore/menWomenPage/women";
import { ProductListing } from "./components/productStore/productListing";
import { Store } from "./components/productStore/store";
import { EmptyWishlist } from "./components/wishlist/emptyWishList";
import { WishList } from "./components/wishlist/wishList";
import { useCart } from "./context/cartContext";
import { useWishlist } from "./context/wishlistContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./context/authContext";
import { useEffect } from "react";
import { Checkout } from "./Pages/Checkout/Checkout";


function App() {
const { isLoggedIn } = useAuth()


const { pathname } = useLocation()

const {cartState} = useCart()
const {WishlistState} = useWishlist()
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

return (
<div className="App">
  <Header />
  {pathname === "/Login" || pathname === "/Signup" ? (
  <PlainNav />
  ) : (
  <Navbar />
  )}

 <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Cart" element={ <RequiresAuth> {cartState.Quantity > 0 ?
      <Cart /> :
      <EmptyCart />} </RequiresAuth>} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Filter" element={<Filter />} />
      <Route path="/ProductListing" element={<ProductListing />} />
      <Route path="/Men" element={<MenClothes />} />
      <Route path="/Women" element={<WomenClothes />} />
      <Route path="/*" element={<Eror404 />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Checkout" element={<Checkout />} />

      <Route path="/WishList" element={
        <RequiresAuth>{ WishlistState.Wishlist.length > 0 ?
                <WishList /> :
                     <EmptyWishlist />} 
        </RequiresAuth> }
         />
      <Route path="/ProductDetail/:productId" element={<ProductDetail />} />

 </Routes>

  <Footer />





  <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick
    rtl={false} pauseOnFocusLoss draggable pauseOnHover />

</div>
)
}

export default App;