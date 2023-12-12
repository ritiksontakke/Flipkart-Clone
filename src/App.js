import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Home from "./components/Home";
import Product_Details from "./components/Product_Details";


function App() {
  return (
    <>
      <Header />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/details" element={<Product_Details />} />
      </Routes>
    </>
  );
}

export default App;
