import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../Styles/navbar.css'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <>
        <header id='header' className="header">
         <div className="logo">
           <Link to="/">
             <img src={logo} alt="Logo" />
           </Link>
            
         </div>
         <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
           <ul>
             <li><Link to="/" className="active">HOME</Link></li>
             <li><Link to="/?=about">ABOUT</Link></li>
             <li><Link to="/?=usecase">USE CASE</Link></li>
             <li><Link to="/?=roadmap">ROADMAP</Link></li> 
             <li><Link to="/?=tokenomics">TOKENOMICS</Link></li> 
             <li><Link to="/?=faq">FAQ's</Link></li> 
           </ul>
         </nav>
         <button className="buy-token-btn" > <Link to="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xC643F4Dd66a10955e53E3f67A81Ba54703d3B7FB" target="_blank" style={{textDecoration:"none" , color:"#000"}}>Buy Now</Link> </button>
         <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
           <span className="hamburger-icon"></span>
         </div>
       </header>
    </>
  )
}

export default Navbar;
