import React, { useState } from 'react'
import { BackButton, Header, Title, Product, Name, Div, Description, P, Category } from './styled';
import Back from '../../assets/back.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls';
import { useHistory, useParams } from "react-router-dom";
import { goBack } from '../../routes/cordinator'
 import NewBurguer from '../../assets/burguer.png'


const RestaurantPage = () =>{
    useProtectedPage()
    const history = useHistory()
    const params = useParams()

    // const [restaurantInfo, setRestaurantInfo] = useState({})

    const restaurant = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)[0]
    console.log(restaurant)
    


    return(
        <div>
            <Header>
                <BackButton onClick={() => goBack(history)}>
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
            {/* {restaurantInfo.restaurants &&
            restaurantInfo.restaurants.map((restaurant, index) => {
                return (
                    index < 7 && <p key={restaurant.restaurant.name}>{restaurant.restaurant.name}</p>
                );
                })} */}
            <ProductCard/>
            <Category> Acompanhamentos </Category>
            <ProductCard/>
           
       
            

        </div>
    )
}

export default RestaurantPage