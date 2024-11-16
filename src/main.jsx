import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>                              
      <Routes>                                             
        <Route path='/' element={<App />} />   
        <Route path='/about' element={<About />} />   
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
