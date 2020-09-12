import React from 'react';
import {Link,NavLink} from 'react-router-dom'
const NavBar = ()=>{
    return (
        <>
        <h1>Nav bar navigation</h1>
        <NavLink exact activeClassName="is-active" to="/">About us</NavLink>
        <NavLink exact activeClassName="is-active" to="/contact">Contact Us</NavLink>
        <NavLink exact activeClassName="is-active" to="/contact/name">Contact Name</NavLink>
        <NavLink exact activeClassName="is-active" to="/services">services</NavLink>
        <NavLink exact activeClassName="is-active" to="/search">search</NavLink>
        <NavLink exact activeClassName="is-active" to="/user/vijay">user</NavLink>
        <NavLink exact activeClassName="is-active" to="/username/vijay/patil">user Name</NavLink>
        <NavLink exact activeClassName="is-active" to="/urllocation/vijay/patil">Show url Location</NavLink>



        <br/>=================<br/>

        <Link to="/">About Us</Link><span></span>
        <Link to ="/contact">Contact Us</Link><span></span>
        <br/>=================<br/>
        
        <a href='/'>About Us</a>
        <a href='/contact'>Contact Us</a>
        </>
    )
}

export default NavBar;