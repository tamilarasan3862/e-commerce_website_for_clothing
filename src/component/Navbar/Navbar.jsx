import React, { useState } from "react";
import cart_icon from "../asset/cart_icon.png";
import logo_icon from "../asset/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
    const [menu,setmenu] = useState("shop");
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo_icon} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{ setmenu("shop")}} ><Link to='/' >shop{menu==="shop"&&<hr/>}</Link></li>
                <li onClick={()=>{ setmenu("menu")}} ><Link to='/mens' >men{menu==="menu"&&<hr/>}</Link></li>
                <li onClick={()=>{ setmenu("women")}} ><Link to='/womens' >women{menu==="women"&&<hr/>}</Link></li>
                <li onClick={()=>{ setmenu("kids")}} ><Link to='/kids' >kids{menu==="kids"&&<hr/>}</Link></li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login' ><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link> 
                <div className='nav-login-count'>0</div>
            </div>
        </div>
    )
}
export default Navbar;