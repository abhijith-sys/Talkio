
import './App.css'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
function App() {


  return (


    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
