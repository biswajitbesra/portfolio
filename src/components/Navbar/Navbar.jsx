import React, { useState } from 'react'
import menu from '../../assets/Menu-icon.svg'
import Navlist from './Navlist'
import Navmenu from './Navmenu'

function Navbar() {
    const [hidden, setHidden] = useState("hidden")
    return (
        <nav className='flex flex-col mt-10 max-[996px]:w-11/12 max-[667px]:w-full max-[996px]:justify-end'>
            <button className='flex justify-end' onClick={() => setHidden("block")}>
                <img src={menu} alt="" className='hidden max-[996px]:block' />    
            </button>
            <Navmenu hidden={hidden} />

            <Navlist backdropBlurMd="backdrop-blur-md" roundedFull="rounded-full" shadowLg="shadow-lg" />
        </nav>
    )
}

export default Navbar