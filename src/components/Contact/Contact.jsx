import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div className='p-6'>
            <h1 className='text-4xl font-bold mb-6'>About <span className='text-cus-yellow'>Me</span></h1>
            <div className='flex justify-center items-center'>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <div className='h-36 w-64 border border-slate-500 rounded-lg flex flex-col justify-center items-center gap-2 p-3'>
                        <div>
                            <FontAwesomeIcon style={{ fontSize: "27px" }} icon={faPhone} />
                        </div>
                        <span className='text-sm'>9800070374</span>
                    </div>
                    <div className='h-36 w-64 border border-slate-500 rounded-lg flex flex-col justify-center items-center gap-2 p-3'>
                        <div>
                            <FontAwesomeIcon style={{ fontSize: "35px" }} icon={faEnvelope} />
                        </div>
                        <span className='text-sm'>biswajitbesra28@gmail.com</span>
                    </div>
                    <div className='h-36 w-64 border border-slate-500 rounded-lg flex flex-col justify-center items-center gap-2 p-3'>
                        <div>
                            <FontAwesomeIcon style={{ fontSize: "35px" }} icon={faLinkedin} />
                        </div>
                        <a className='text-sm break-words' style={{ wordBreak: 'break-word' }} href='https://www.linkedin.com/in/biswajit-besra-0b471a315/'>https://www.linkedin.com/in/biswajit-besra-0b471a315/</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
