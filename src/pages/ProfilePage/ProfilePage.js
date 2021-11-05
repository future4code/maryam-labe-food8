import React from "react"
import HistoryProfile from "./HistoryProfile"
import GetProfile from './GetProfile'
import GetAddress from './GetAddress'

const ProfilePage = () =>{
    return(
        <div>
            <GetProfile/>
            <GetAddress/>
            <HistoryProfile/>
        </div>
    )
}

export default ProfilePage