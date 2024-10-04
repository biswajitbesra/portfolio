import React from 'react'
import Project1 from '../../assets/1.png'
import Project2 from '../../assets/2.png'
import Project3 from '../../assets/3.png'
import Project4 from '../../assets/4.png'
import '../Projects/Projects.css'

function Projects() {
    return (
        <div className='h-full w-full overflow-y-scroll p-6'>
            <h1 className='text-4xl font-bold mb-6'>Projects</h1>
            <div id='project' className='flex flex-wrap justify-center gap-4'>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project1} alt="" />
                    <a className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' href='https://biswajitbesra.github.io/Home-Decors/' target='_blank'><div>Live Preview</div></a>
                </div>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project2} alt="" />
                    <a className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' href='https://biswajitbesra.github.io/abmstores/' target='_blank'><div>Live Preview</div></a>
                </div>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project3} alt="" />
                    <a className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' href='https://biswajitbesra.github.io/Tic-Tac-Toe/' target='_blank'><div>Live Preview</div></a>
                </div>
                <div className='relative my-css overflow-hidden' style={{ width: "20.25rem" }}>
                    <img className='h-full w-full' src={Project4} alt="" />
                    <a className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' href='https://biswajitbesra.github.io/resume-builder/' target='_blank'><div>Live Preview</div></a>
                </div>
            </div>{/* change the navbar color into the demo link color */}
        </div>
    )
}

export default Projects
