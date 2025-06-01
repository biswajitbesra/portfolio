import React from 'react'

function Resume() {
    return (
        <div className='h-full w-full px-6 pb-6 pt-14 overflow-y-scroll'>
            <h1 className='text-4xl font-bold mb-6'>Resume</h1>
            <div className='flex gap-16 max-[667px]:flex-col max-[667px]:gap-8'>
                <div>
                    <h3 className='text-xl font-bold mb-2'>Education</h3>
                    <div className='flex gap-4'>
                        <div className='relative'>
                            <div
                                className='bg-black h-full max-[473px]:h-cus-6 max-[346px]:h-cus-7.5 before:absolute before:content-[""] before:bg-cus-yellow before:border-2 before:border-black before:h-4 before:w-4 before:rounded-full before:top-1 before:-start-1.5'
                                style={{ width: "2px" }}>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-bold'>Bachelor of Computer Applications</h5>
                            <h6 className='text-base'>ABS Academy of Science, Technology and Management</h6>
                            <p className='text-base'>2024</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='relative'>
                            <div
                                className='bg-black h-cus-4.5 max-[337px]:h-cus-6 before:absolute before:content-[""] before:bg-cus-yellow before:border-2 before:border-black before:h-4 before:w-4 before:rounded-full before:top-1 before:-start-1.5'
                                style={{ width: "2px" }}>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-bold'>Higher Secondary</h5>
                            <h6 className='text-base'>Durgapur Projects Boys High School</h6>
                            <p className='text-base'>2021</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='relative'>
                            <div
                                className='bg-black h-cus-4.5 max-[408px]:h-cus-6 before:absolute before:content-[""] before:bg-cus-yellow before:border-2 before:border-black before:h-4 before:w-4 before:rounded-full before:top-1 before:-start-1.5'
                                style={{ width: "2px" }}>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-bold'>Secondary</h5>
                            <h6 className='text-base'>Durgapur Projects Township Boys High School</h6>
                            <p className='text-base'>2019</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-2'>Skills</h3>
                    <ul className='*:text-base'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            <div className='mb-2'>
                <h3 className='text-xl font-bold mt-8'>Experience</h3>
                <div>
                    <h5 className='font-bold'>Front-end Development (Intern)</h5>
                    <h6 className='text-base'>Swadesh Softwares Pvt. Ltd.</h6>
                    <p className='text-base'>Sept 2023 - Oct 2023</p>
                </div>
            </div>

        </div>
    )
}

export default Resume