import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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