import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import Indiviual from './Pages/Individual.jsx';
import TestAPI from './Pages/TestAPI.jsx';
import AllProjects from './Pages/AllProjects.jsx'
import About from './Pages/About.jsx'


const Routing = () => {
    return ( <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-projects' element={<AllProjects />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/individual' element={<Indiviual />} />
        <Route path='/testAPI' element={<TestAPI />} />
      </Routes>
   </BrowserRouter> );
}
 
export default Routing;