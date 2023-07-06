import React from 'react';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"


import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import ViewCart from "./pages/ViewCart"


import Sidebar from "./components/Sidebar" 
import Header from "./components/Header" 
import Footer from "./components/Footer"



const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/Cart' element={<ViewCart></ViewCart>}></Route>
      </Routes>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </Router>
  </div>;
};

export default App;
