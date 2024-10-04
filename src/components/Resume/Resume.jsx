import React from 'react'

function Resume() {
    return (
        <div className='p-6'>
            <h1 className='text-4xl font-bold mb-6'>Resume</h1>
            <div className='flex gap-16'>
                <div>
                    <h3 className='text-2xl font-bold mb-2'>Education</h3>
                    <div className='flex gap-4'>
                        <div className='relative'>
                            <div
                                className='bg-black h-cus-4.5 before:absolute before:content-[""] before:bg-cus-yellow before:border-2 before:border-black before:h-4 before:w-4 before:rounded-full before:top-1 before:-start-1.5'
                                style={{ width: "2px" }}>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-bold'>Bachelor fo Computer Applications</h5>
                            <h6>ABS Academy of Science, Technology and Management</h6>
                            <p>2024</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='relative'>
                            <div
                                className='bg-black h-cus-4.5 before:absolute before:content-[""] before:bg-cus-yellow before:border-2 before:border-black before:h-4 before:w-4 before:rounded-full before:top-1 before:-start-1.5'
                                style={{ width: "2px" }}>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-bold'>Higher Secondary</h5>
                            <h6>Durgapur Projects Boys High School</h6>
                            <p>2021</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='relative'>
                            <div
                                className='bg-black h-cus-4.5 before:absolute before:content-[""] before:bg-cus-yellow before:border-2 before:border-black before:h-4 before:w-4 before:rounded-full before:top-1 before:-start-1.5'
                                style={{ width: "2px" }}>
                            </div>
                        </div>
                        <div>
                            <h5 className='font-bold'>Secondary</h5>
                            <h6>Durgapur Projects Township Boys High School</h6>
                            <p>2019</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-2'>Skills</h3>
                    <ul>
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
                <h3 className='text-2xl font-bold mt-8'>Experience</h3>
                <p>Fresher</p>
            </div>

        </div>
    )
}

export default Resume
