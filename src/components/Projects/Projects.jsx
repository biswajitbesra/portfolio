import React from 'react'
import Project1 from '../../assets/1.png'
import Project2 from '../../assets/2.png'
import Project3 from '../../assets/3.png'
import Project4 from '../../assets/4.png'
import '../Projects/Projects.css'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='h-full w-full overflow-y-scroll px-6 pb-6 pt-14'>
            <h1 className='text-4xl font-bold mb-6'>Projects</h1>
            <div id='project' className='flex flex-wrap justify-center gap-4'>
                <div className='relative my-css overflow-hidden w-project-img-20.25 max-[1473px]:w-project-img-18.25 max-[1345px]:w-project-img-16.25 max-[1217px]:w-project-img-15.25 max-[1200px]:w-project-img-18.25 max-[1101px]:w-project-img-16.25 max-[996px]:w-project-img-20.25 max-[803px]:w-project-img-18.25 max-[733px]:w-project-img-16.25 max-[608px]:w-project-img-14.25 max-[544px]:w-full'>
                    <img className='h-full w-full' src={Project1} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/Home-Decors/' target='_blank'><div>Live Preview</div></Link>
                </div>
                <div className='relative my-css overflow-hidden w-project-img-20.25 max-[1473px]:w-project-img-18.25 max-[1345px]:w-project-img-16.25 max-[1217px]:w-project-img-15.25 max-[1200px]:w-project-img-18.25 max-[1101px]:w-project-img-16.25 max-[996px]:w-project-img-20.25 max-[803px]:w-project-img-18.25 max-[733px]:w-project-img-16.25 max-[608px]:w-project-img-14.25 max-[544px]:w-full'>
                    <img className='h-full w-full' src={Project2} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/abmstores/' target='_blank'><div>Live Preview</div></Link>
                </div>
                <div className='relative my-css overflow-hidden w-project-img-20.25 max-[1473px]:w-project-img-18.25 max-[1345px]:w-project-img-16.25 max-[1217px]:w-project-img-15.25 max-[1200px]:w-project-img-18.25 max-[1101px]:w-project-img-16.25 max-[996px]:w-project-img-20.25 max-[803px]:w-project-img-18.25 max-[733px]:w-project-img-16.25 max-[608px]:w-project-img-14.25 max-[544px]:w-full'>
                    <img className='h-full w-full' src={Project3} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/Tic-Tac-Toe/' target='_blank'><div>Live Preview</div></Link>
                </div>
                <div className='relative my-css overflow-hidden w-project-img-20.25 max-[1473px]:w-project-img-18.25 max-[1345px]:w-project-img-16.25 max-[1217px]:w-project-img-15.25 max-[1200px]:w-project-img-18.25 max-[1101px]:w-project-img-16.25 max-[996px]:w-project-img-20.25 max-[803px]:w-project-img-18.25 max-[733px]:w-project-img-16.25 max-[608px]:w-project-img-14.25 max-[544px]:w-full'>
                    <img className='h-full w-full' src={Project4} alt="" />
                    <Link className='p-3 bg-cus-yellow w-full rounded-t-xl flex justify-center' to='https://biswajitbesra.github.io/resume-builder/' target='_blank'><div>Live Preview</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Projects