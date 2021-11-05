import React from "react"
import styled from "styled-components"
import { goToLogin } from "../routes/cordinator"
import { useHistory } from "react-router"
import back from '../assets/back.png'

const HeaderBox = styled.div`
width: 100vw;
border-top: 1px solid black;
height: 7vh;
display: flex;
`
const BackButton = styled.button`
    width: 23px;
    height: 24px;
    margin: 10px 321px 0 16px;
    object-fit: contain;
    border: none;
    background-color: #f8f8ff;
`

const HeaderBack = () =>
{
    const history = useHistory();
    return(
    <HeaderBox>
        <BackButton color="inherit" onClick={()=>goToLogin(history)}><img src={back}/></BackButton>
    </HeaderBox>
        
    )
        
}

export default HeaderBack