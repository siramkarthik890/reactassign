import React from 'react';
import logo from './lpu-logo.png';
import './Navbar.css';


function Navbar(){

    function handleScroll() {
        window.scroll({
          top: 0/*document.body.offsetHeight,*/,
          left: 0, 
          behavior: 'smooth',
        });
      }
      function handleScroll1() {
        window.scroll({
          top: 650/*document.body.offsetHeight,*/,
          left: 0, 
          behavior: 'smooth',
        });
      }
      function handleScroll2() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }

    return(
        <div className='navbar' >
            <img src={logo} alt='logo' width="70px" height="60px" className='logo-btn' onClick={handleScroll}/>
            <h3 className='prot-head'>Protfolio</h3>
            
            <ul className='nav-btn'>
                <li className='nav-li'><h3 className='home' onClick={handleScroll}>Home</h3></li>
                <li className='nav-li'><h3 className='home' onClick={handleScroll1}>About</h3></li>
                <li className='nav-li'><h3 className='home'onClick={handleScroll2}>Projects</h3></li>
            </ul>
        </div>
    );
}
export default Navbar;