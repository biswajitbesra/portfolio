import React from 'react'
import ProfileSide from '../ProfileSide/ProfileSide'
import Navlist from './Navlist'

function Navmenu(props) {
    return (
        <div className={`${props.hidden} bg-white p-8 min-[996px]:hidden max-[996px]:rounded-xl`}>
            <ProfileSide/>
            <Navlist flexCol = "flex-col" hidden={props.hidden} onLinkClick={props.onLinkClick} /> {/* show the nav options */}
        </div>
    )
}

export default Navmenu
