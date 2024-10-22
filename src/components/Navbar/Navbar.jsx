import React, { useState } from 'react'
import menu from '../../assets/Menu-icon.svg'
import Navlist from './Navlist'
import Navmenu from './Navmenu'

function Navbar() {
    const [hidden, setHidden] = useState("hidden")
    const menuToggle = () => {
        hidden === "hidden" ? setHidden("block") : setHidden("hidden")
    }
    const handleLinkClick = () => {
        setHidden("hidden");
    };
    return (
        <nav className='flex flex-col items-end mt-10 rounded-full backdrop-blur-sm fixed top-0 max-[996px]:right-4 max-[425px]:right-0 z-10 max-[996px]:w-full max-[996px]:rounded-none max-[996px]:mt-0'>
            <button onClick={menuToggle}>
                <img src={menu} alt="" className='hidden max-[996px]:block' />    
            </button>
            <Navmenu hidden={hidden} onLinkClick={handleLinkClick} />
            <Navlist shadowLg="shadow-lg" hidden="hidden" />
        </nav>
    )
}

export default Navbar