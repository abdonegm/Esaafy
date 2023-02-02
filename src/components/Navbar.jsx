import React from 'react';
import { useState } from 'react';
import logo from  "../images/logo1.png";
import "./navbar.css";
import {FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  const[show,setshow]=useState(false);
  return(
    <nav className='nav-content'>
      <div className='container nav-container'>
      <div className='myiamge'>
       <Link to="/"><img src={logo} alt="logo" /></Link> 
      </div>
 
      <ul className={show?"showlinks nav-links":"hidelinks nav-links"}>
       
          <li><Link to="/" className='text-decoration-none text-dark'>الرئيسية</Link></li>
          <li>من&nbsp;نحن</li>
          <li>الخدمات</li>
          <li>المميزات</li>
          <li><Link to="/news" className='text-decoration-none text-dark'>الأخبار</Link></li>
         
          <br/>
         
          <li className='down'><button className='btn btn-primary ms-5'>تحميل&nbsp;التطبيق</button></li>

    
      </ul>
      <button className="nav-toogle" onClick={()=> setshow(!show)}><FaBars /></button>


      </div>
     
    </nav>
    

  )

}

export default Navbar;