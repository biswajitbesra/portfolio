import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileSide from '../ProfileSide/ProfileSide'

function MainContainer() {
    return (
        <div className='h-cus-35 w-3/4 backdrop-blur-md rounded-xl absolute top-24 max-[996px]:top-0 max-[996px]:h-full max-[996px]:w-full flex items-center max-[1200px]:w-11/12 max-[667px]:w-full'> {/* backdrop-brightness-110 */}
            <div id='profile' className='h-full w-1/3 flex flex-col justify-center items-center max-[996px]:hidden'>
                <ProfileSide />
            </div>
            <div className='bg-slate-500 rounded-full max-[996px]:hidden' style={{ width: "1px", height: "27rem" }}></div>
            <div className='h-full w-2/3 p-2 max-[996px]:w-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer