import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import CategoryPage from './Pages/CategoryPage.jsx';
import Indiviual from './Pages/Individual.jsx'

const Routing = () => {
    return ( <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/individual' element={<Indiviual />} />
      </Routes>
   </BrowserRouter> );
}
 
export default Routing;