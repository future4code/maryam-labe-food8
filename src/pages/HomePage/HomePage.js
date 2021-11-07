import axios from "axios"
import React, { useEffect, useContext } from "react"
import useProtectedPage from '../../hooks/useProtectedPage'
import saida from '../../assets/saida.png'
import perfil from '../../assets/perfil.png'
import {Header,BackButton, Title, Img, ButtonProfile, ImgProfile} from "./styled"
import {goToLogin, goToProfile} from "../../routes/cordinator"
import {useHistory} from "react-router-dom"
import {GlobalStateContext} from "../../Global/GlobalStateContext"

const HomePage = () =>{

    const history = useHistory()

   const {states, seters} = useContext(GlobalStateContext)
   const token = localStorage.getItem("token")

  const logout = () =>{
    localStorage.removeItem("token")
  }

  const rightButtonAction = () =>{
    if(token){
      logout()
      seters.setRightButtonText("")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
    return(
        <div> 
            <Header>
                <Title> Future</Title>
                <BackButton onClick={rightButtonAction} > <Img src={saida} rightButtonAction={states.rightButtonText}/></BackButton>
            </Header>
            <ButtonProfile color="primary"> <ImgProfile src={perfil} onClick={() => goToProfile(history)} /> </ButtonProfile>
        </div>
    )
}

export default HomePage


