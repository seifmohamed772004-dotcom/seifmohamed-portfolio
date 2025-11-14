import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import CategoryPage from './Pages/CategoryPage.jsx';

const Routing = () => {
    return ( <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<CategoryPage />} />
      </Routes>
   </BrowserRouter> );
}
 
export default Routing;