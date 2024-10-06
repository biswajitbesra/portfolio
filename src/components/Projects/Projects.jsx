import React from 'react'
import Project1 from '../../assets/1.png'
import Project2 from '../../assets/2.png'
import Project3 from '../../assets/3.png'
import Project4 from '../../assets/4.png'
import '../Projects/Projects.css'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='h-full w-full overflow-y-scroll p-6'>
            <h1 className='text-4xl font-bold mb-6'>Projects</h1>
            <div id='project' className='flex flex-wrap justify-center gap-4'>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project1} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/Home-Decors/' target='_blank'><div>Live Preview</div></Link>
                </div>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project2} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/abmstores/' target='_blank'><div>Live Preview</div></Link>
                </div>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project3} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/Tic-Tac-Toe/' target='_blank'><div>Live Preview</div></Link>
                </div>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project4} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/resume-builder/' target='_blank'><div>Live Preview</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Projects