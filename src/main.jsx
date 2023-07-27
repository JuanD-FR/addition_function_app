import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Padre } from './07-tarea-memo/Padre';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Padre />
    {/* </React.StrictMode> */}  
  </BrowserRouter>
)
