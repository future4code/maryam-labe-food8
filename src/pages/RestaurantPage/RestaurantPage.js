import React from "react";
import { BackButton, Header, Title, Product, Name, Div, Description, P, Category } from './styled'
import Back from '../../assets/back.png'
import NewBurguer from '../../assets/burguer.png'
import ProductCard from '../../components/ProductCard/ProductCard'
import useProtectedPage from '../../hooks/useProtectedPage'

const RestaurantPage = () =>{
    useProtectedPage()
    return(
        <div>
            <Header>
                <BackButton>
                    <img src = {Back}/>
                </BackButton>
                <Title> Restaurante</Title>
                {/* <p></p> */}
            </Header>
            <Product src={NewBurguer}/>
            <Name>Nome do restaurante</Name>
            <div>
                <Description>Produto</Description>
                <Div>
                    <Description>XX-XX min</Description>
                    <Description>Frete R$XX,XX</Description>
                </Div>
                <P>Rua do estabelecimento</P>
            </div>
            <br/>
            <Category> Principais </Category>
            <ProductCard/>
            <Category> Acompanhamentos </Category>
            <ProductCard/>
            

        </div>
    )
}

export default RestaurantPage