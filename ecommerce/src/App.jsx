import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import {Home} from "./components/Home/Home"

function App() {
  return (
    <div className="App">
      <Link to="./Cart" >cart</Link>
     
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Cart" element={<Cart />} />

      </Routes>
  
    </div>
  );
}

export default App;
