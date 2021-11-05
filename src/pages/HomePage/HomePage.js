import React, { useEffect, useState } from "react";
// import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router";
import axios from "axios";
import HomePageCard from "../HomePage/HomePageCard"
import {goToRestaurant} from "../../routes/cordinator"
const HomePage = () => {
    // useProtectedPage()
    const history = useHistory()
    const [restaurants, setRestaurants] = useState ([])
    const headers = {
                headers:{auth: ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkcyWGVVUjFlMXI1YUxmMzhDRmxNIiwibmFtZSI6Ikx1aWdpIiwiZW1haWwiOiJsdWlnaV9yaWJlaXJvQGxpdmUuY29tIiwiY3BmIjoiMTQ0LjI3OS45NjctNjAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gUXVhdHJvLCA4NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjM2MDM2OTkxfQ.cBIwxNvV8RctZ1Cohs-iCvW8YulBeKM5KZBhQkeDMXI')}
        }
    const listRestaurant = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/restaurants`, headers)
        .then((res)=>{
            setRestaurants (res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(()=>{
        listRestaurant()
    }, [])
    const onClickCard = (restaurantId) =>{
        goToRestaurant(history, restaurantId)
    }
    const restaurantsCards = restaurants.map((restaurant)=>{
        return (
                <HomePageCard
                key={restaurant.id}
                title ={restaurant.name}
                image ={restaurant.logoUrl}
                time={restaurant.deliveryTime}
                frete={restaurant.shipping}
                onClick={() => onClickCard(restaurant.restaurants_restaurantId)}
                />
            )
        })
        const [search, setSearch] = useState("")

    return(
        <div>
            <div>
                <input
                placeholder="Restaurante"
                type="text"
                // value={null}
                onChange={(e)=> setSearch((e.target.value))}/>
            </div>
            {restaurantsCards}
        </div>
    )
}
export default HomePage