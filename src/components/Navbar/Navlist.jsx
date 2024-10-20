import React from 'react'
import { NavLink } from 'react-router-dom'


function Navlist(props) {
    return (
        <ul className={`inline-flex ${props.flexCol} ${props.backdropBlurMd} ${props.roundedFull} ${props.shadowLg} box-border max-[996px]:hidden`}>
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
    )
}

export default Navlist
