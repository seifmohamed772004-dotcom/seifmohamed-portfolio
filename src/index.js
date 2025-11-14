import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import './index.css';
import { useParams } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Routing />
  </React.StrictMode>
);