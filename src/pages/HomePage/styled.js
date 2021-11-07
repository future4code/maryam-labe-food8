import styled from 'styled-components'
import Fab from  "@material-ui/core/Fab"

export const Title = styled.h3`
width: 84px;
height: 19px;
margin-right: 140px;
font-family: unset;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
`
 export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;
height: 54px;
margin: 0 0 7px;
border: solid 1px #b8b8b8;
font-family: unset;
`
export const BackButton = styled.button`
background-color: white;
border: 0px white;
cursor: pointer;
font-family: unset;
`

export const Img = styled.img`
width: 25px;
height:25px;
padding: 10px;
`

export const ButtonProfile = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`

export const ImgProfile = styled.img`
width: 30px;
height:30px;
padding: 10px;
`