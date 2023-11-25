import Navbar from "./components/Navbar"
import Slider from "./components/Slider";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return <div className="container" style={{fontFamily: 'monospace'}}>
    <Navbar />
    <Routes>
      <Route path='/' element={<>
        <Slider />
        <Products />
      </>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/products/:prodId" element={<ProductDetails />}/>
    </Routes>
  </div>
}

export default App
