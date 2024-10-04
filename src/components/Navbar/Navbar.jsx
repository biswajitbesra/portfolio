import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-center'>
            <ul className='inline-flex backdrop-blur-md rounded-full shadow-lg box-border'>
                <li>
                    <NavLink to='/' className={({ isActive }) => `block px-5 py-1 rounded-full ${isActive ? 'bg-cus-yellow' : ''}`}>
                        Home
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => `block px-5 py-1 rounded-full ${isActive ? 'bg-cus-yellow' : ''}`}>
                        About
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/projects' className={({ isActive }) => `block px-5 py-1 rounded-full ${isActive ? 'bg-cus-yellow' : ''}`}>
                        Projects
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/resume' className={({ isActive }) => `block px-5 py-1 rounded-full ${isActive ? 'bg-cus-yellow' : ''}`}>
                        Resume
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => `block px-5 py-1 rounded-full ${isActive ? 'bg-cus-yellow' : ''}`}>
                        Contact
                    </NavLink> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
