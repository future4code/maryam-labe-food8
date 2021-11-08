import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@mui/material/TextField'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vW;
`

export const  ListCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2vh;
  color:  #5CB646;
`
export const CardContainerRestaurants = styled(Card)`
  width: 50vh;
  margin: 10px;
  align-items: center;
  margin-left: 5%;
  border-radius: 10%;
`
export const TimeR = styled.div`
display: flex;
color:#b8b8b8 ;
margin-left: 1vh;
margin-bottom:1vh;
justify-content: space-between;
margin-right:1vh;
font-size:2vh;
`
export const input = styled.input`
  height: 56px;
`

export const TitleBox = styled.div`

    height: 8vh;
    margin: 0 0 1px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #fff;
`
export const Title =styled.h1`
    font-family: Roboto;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    color: var(--black);
`

export const Input = styled(TextField)`
  width: 340px;
  height: 56px;
  margin: 8px 0px 0px;
  padding: 19px 38px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  color: black;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  font-weight: lighter;
  color: black;
`