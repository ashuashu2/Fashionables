import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import {Home} from "./components/Home/Home"
import { Navbar } from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      
     
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Cart" element={<Cart />} />

      </Routes>
  
    </div>
  );
}

export default App;
