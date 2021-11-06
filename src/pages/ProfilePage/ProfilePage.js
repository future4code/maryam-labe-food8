import React from "react"
import HistoryProfile from "./HistoryProfile"
import GetProfile from './GetProfile'
import GetAddress from './GetAddress'
import saida from '../../assets/saida.png'
import { BackButton, Header, Title} from './styled'
import Back from '../../assets/back.png'

const ProfilePage = () =>{
    return(
        <div>
            <Header>
                <BackButton>
                    <img src = {Back}/>
                </BackButton>
                <Title> Profile</Title>
                {/* <p></p> */}
            </Header>
            <GetProfile/>
            <GetAddress/>
            <HistoryProfile/>
        </div>
    )
}

export default ProfilePage