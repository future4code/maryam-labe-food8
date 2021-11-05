import { ButtonUnstyled } from '@mui/core';
import React from 'react';
// import ProfilePage from './pages/ProfilePage/ProfilePage'
// import RestaurantPage from '././pages/RestaurantPage/RestaurantPage'
import Burguer from '../../assets/burguer-teste.png'
import { ContainerDiv, ProductImage, NameItem, DescriptionItem, DivSize, Price, ButtonStyle, CountButtonStyle, RedButtonStyle } from './styled'

const ProductCard = (props) =>{
    
    

    const CardButton =()=>{
        switch(props.inCartPage)
        {
            case false: 
                return<ButtonStyle>
                    adicionar
                </ButtonStyle>
            case true:
                return<RedButtonStyle>
                    remover
                </RedButtonStyle>
        }
    }

    return(
        <ContainerDiv>
            <ProductImage src ={Burguer}/>
                <div>
                    <DivSize>
                        <NameItem>Nome do Burguer</NameItem>
                        <CountButtonStyle> 1 </CountButtonStyle>
                    </DivSize>
                    <DescriptionItem>Descrição do item</DescriptionItem>
                    <DivSize>
                        <Price>Price</Price>
                        <CardButton/>
                    </DivSize>
                </div>
        </ContainerDiv>
  )
}
  

export default ProductCard;
