import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Home from "./components/Home";
import { get } from "./service/product.service";

function App() {
  let getAData = async () => {
    let url = "http://localhost:3001/products";
    let result = await get(url);
    if (result) {
      console.log(result);
    }
  };
  return (
    <>
      <button onClick={getAData}>Get Data</button>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
