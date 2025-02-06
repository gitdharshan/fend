import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) =>{
  return(
    <ul className='nav-links'>
    <li>
    <NavLink to="/" exact>HOME</NavLink>

    </li>
    <li>
    <NavLink to="/user">USERS</NavLink>
    </li>
  
     <li>
     <NavLink to="/add/new">ADD REVIEWS</NavLink>
     </li>
    
     
     <li>
     <NavLink to="/box">BOX OFFICE</NavLink>
     </li>
     <li>
     <NavLink to="/auth">AUTHENTICATE</NavLink>
     </li>
    </ul>
  )
}

export default NavLinks;