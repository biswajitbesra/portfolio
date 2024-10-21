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
        <nav className='flex flex-col items-end mt-10 rounded-full absolute top-0 z-10 max-[996px]:w-11/12 max-[667px]:w-full max-[996px]:mt-1'>
            <button onClick={menuToggle}>
                <img src={menu} alt="" className='hidden max-[996px]:block' />    
            </button>
            <Navmenu hidden={hidden} onLinkClick={handleLinkClick} />
            <Navlist shadowLg="shadow-lg" hidden="hidden" />
        </nav>
    )
}

export default Navbar