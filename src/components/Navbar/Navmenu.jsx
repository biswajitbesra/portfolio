import React from 'react'
import ProfileSide from '../ProfileSide/ProfileSide'
import Navlist from './Navlist'

function Navmenu(props) {
    return (
        <div className={`${props.hidden} backdrop-blur-md p-4`}>
            <ProfileSide/>
            <Navlist flexCol = "flex-col" /> {/* show the nav options */}
        </div>
    )
}

export default Navmenu
