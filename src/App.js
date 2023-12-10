import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Home from "./components/Home";
import { get } from "./service/product.service";
import { saveCategories, saveProduct } from "./redux/product.slice";
import Product_details from "./components/Product_details";
import { useDispatch } from "react-redux";


function App() {
  let dispatch = useDispatch();
  
  //useState
  
 
  
  
  let getAData = async () => {
    let url = "http://localhost:3001/products";
    let result = await get(url);
    if (result) {
      dispatch(saveCategories(result));
    }
  };
  return (
    <>
      <button onClick={getAData}>Get Data</button>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product_details" element={<Product_details />} />
      </Routes>
    </>
  );
}

export default App;
