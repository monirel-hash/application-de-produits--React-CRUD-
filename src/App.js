import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Home />}/>
          <Route path="/productDetail/:id" element={<Product/>}/> 
          <Route path="/addProduct" element={<AddProduct/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
