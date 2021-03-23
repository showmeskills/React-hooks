import React from 'react';

import{NavLink} from 'react-router-dom'

import './NavBar.css';

const NavBar = ()=>{

    return(
        <>
            
              
                <ul className='NavBar'>
                    <li>
                        <NavLink to='/home' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/user'  activeClassName='active'>
                            User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' activeClassName='active'>
                            Login
                        </NavLink>
                    </li>
                </ul>
               
            
        </>
       
    )
}

export default NavBar;
