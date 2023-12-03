import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={ <AllProducts />}/>
       
      </Routes>
    </>
  );
}

export default App;
