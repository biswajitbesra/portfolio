import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ProfilePicture from '../../assets/Untitled design.png'
import { Link, Outlet } from 'react-router-dom'

function MainContainer() {
    return (
        <div className='h-3/4 w-3/4 backdrop-blur-xl rounded-xl flex items-center'>
            <div id='profile' className='h-full w-1/3 flex flex-col justify-center items-center'>
                <div className='h-40 w-40 rounded-full overflow-hidden'>
                    <img src={ProfilePicture} alt="" />
                </div>
                <h1 className='text-3xl font-bold my-4'>
                    Biswajit Besra
                </h1>
                <div className='flex gap-3 mb-3'>
                    <Link target='_blank' to="https://www.linkedin.com/in/biswajit-besra-0b471a315/">
                        <FontAwesomeIcon className='hover:cursor-pointer' style={{ fontSize: "25px" }} icon={faLinkedin} />
                    </Link>
                    <Link target='_blank' to="https://github.com/biswajitbesra">
                        <FontAwesomeIcon className='hover:cursor-pointer' style={{ fontSize: "25px" }} icon={faGithub} />
                    </Link>
                    <Link target='_blank' to="mailto:biswajitbesra28@gmail.com">
                        <FontAwesomeIcon className='hover:cursor-pointer' style={{ fontSize: "25px" }} icon={faEnvelope} />
                    </Link>
                </div>
                <div className="flex items-center gap-1 mb-1">
                    <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faLocationDot} /> Durgapur, West Bengal
                </div>
                <div className="flex items-center gap-1">
                    <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faPhone} /> 9800070374
                </div>
            </div>
            <div className='bg-slate-500 rounded-full' style={{ width: "1px", height: "27rem" }}></div>
            <div className='h-full w-2/3 p-2'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer