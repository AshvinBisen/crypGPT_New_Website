import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 
import FloatingTelegram from "./Components/FloatingTelegram";
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import './App.css'

function App() {

  return (
    <>
       <BrowserRouter>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer /> 
      <FloatingTelegram />
    </BrowserRouter>
    </>
  )
}

export default App
