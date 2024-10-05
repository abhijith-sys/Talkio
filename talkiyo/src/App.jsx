
import './App.css'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import PaymentPage from './pages/paymentPage/PaymentPage';
import Plans from './pages/Plans/Plans';
import FailurePage from './components/common/FailurePage';
import SuccessPage from './components/common/SuccessPage';
function App() {


  return (


    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment/:id" element={<PaymentPage/>} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
