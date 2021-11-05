import React from 'react';
// import ProfilePage from './pages/ProfilePage/ProfilePage'
// import RestaurantPage from '././pages/RestaurantPage/RestaurantPage'
import Burguer from '../../assets/burguer-teste.png'
import { ContainerDiv, ProductImage, NameItem, DescriptionItem, DivSize, Price, ButtonStyle, CountButtonStyle } from './styled'

const ProductCard = () =>{
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
                    <ButtonStyle>
                        adicionar
                    </ButtonStyle>
                </DivSize>
            </div>
    </ContainerDiv>
  )
}
  

export default ProductCard;
