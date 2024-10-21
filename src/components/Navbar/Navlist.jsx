import React from 'react'
import { NavLink } from 'react-router-dom'


function Navlist(props) {
    return (
        <ul className={`inline-flex ${props.flexCol} ${props.shadowLg} box-border max-[996px]:${props.hidden} min-[996px]:backdrop-blur-md min-[996px]:rounded-full`}>
            <li>
                <NavLink to='/' onClick={props.onLinkClick} className={({ isActive }) => `block px-5 py-1 rounded-full max-[996px]:text-center ${isActive ? 'bg-cus-yellow' : ''}`}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' onClick={props.onLinkClick} className={({ isActive }) => `block px-5 py-1 rounded-full max-[996px]:text-center ${isActive ? 'bg-cus-yellow' : ''}`}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/projects' onClick={props.onLinkClick} className={({ isActive }) => `block px-5 py-1 rounded-full max-[996px]:text-center ${isActive ? 'bg-cus-yellow' : ''}`}>
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink to='/resume' onClick={props.onLinkClick} className={({ isActive }) => `block px-5 py-1 rounded-full max-[996px]:text-center ${isActive ? 'bg-cus-yellow' : ''}`}>
                    Resume
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' onClick={props.onLinkClick} className={({ isActive }) => `block px-5 py-1 rounded-full max-[996px]:text-center ${isActive ? 'bg-cus-yellow' : ''}`}>
                    Contact
                </NavLink>
            </li>
        </ul>
    )
}

export default Navlist
