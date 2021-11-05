import React, { useEffect } from 'react'
import { BackButton, Header, Title, Product, Name, Div, Description, P, Category } from './styled';
import Back from '../../assets/back.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls';


const RestaurantPage = () =>{
    useProtectedPage()

    const restaurant = useRequestData([], `${BASE_URL}/restaurants/2`)[0]
    console.log(restaurant)
    
    // const getDetails = restaurant.map((detail) => { 
    //     return (
    //       <ProductCard
    //         key={detail.id}
    //         name={detail.name}
    //         description={detail.description}
    //         price={detail.price}
    //       />
    
    //     )
    //   })


    return(
        <div>
            <Header>
                <BackButton>
                    <img src = {Back} alt="Símbolo que indica o ato de voltar"/>
                </BackButton>
                <Title> Restaurante</Title>
            </Header>

            <Product src={restaurant.restaurant && restaurant.restaurant.logoUrl} alt="Logo do restaurante"/>
            <Name>{restaurant.restaurant && restaurant.restaurant.name}</Name>
            <div>
                <Description>{restaurant.restaurant && restaurant.restaurant.category}</Description>
                <Div>
                    <Description>{restaurant.restaurant && restaurant.restaurant.deliveryTime} min</Description>
                    <Description>R${restaurant.restaurant && restaurant.restaurant.shipping.toFixed(2)}</Description>
                </Div>
                <P>{restaurant.restaurant && restaurant.restaurant.address}</P>
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