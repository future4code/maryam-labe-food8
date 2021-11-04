import React from "react"
import HistoryProfile from "./HistoryProfile"
import GetProfile from './GetProfile'
import {useHistory} from 'react-router-dom'
import {goToAddress, goToPerfil} from '../../routes/cordinator'

const ProfilePage = () =>{
    const history = useHistory()

    return(
        <div>
            <GetProfile/>
            <button onClick={() =>goToAddress(history)}>Editar Endereço</button>
            {/* <GetAddress/> */}
            <button onClick={() =>goToPerfil(history)}>Editar Perfil</button>
            {/* <EditAddress/> */}
            <HistoryProfile/>
        </div>
    )
}

export default ProfilePage