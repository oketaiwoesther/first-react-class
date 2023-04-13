import React from 'react';
import {Link} from "react-router-dom";


const NavRouter = () => {
  return (
    <div>
        <header>
        <h2>NavBar</h2>
        <ul>
            <li> <Link to='/'>Home</Link > </li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Product'>Product</Link></li>
        </ul>
        </header>
      
    </div>
  )
}

export default NavRouter
