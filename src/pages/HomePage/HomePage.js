import React, { useEffect, useState, useContext } from "react";
import saida from '../../assets/saida.png'
import perfil from '../../assets/perfil.png'
import {Header,BackButton, Title, Img, ButtonProfile, ImgProfile} from "./styled"
import {GlobalStateContext} from "../../Global/GlobalStateContext"
import { useHistory } from "react-router";
import axios from "axios";
import HomePageCard from "../HomePage/HomePageCard"
import {goToRestaurant, goToLogin, goToProfile} from "../../routes/cordinator"

const HomePage = () => {
     useProtectedPage()
    const history = useHistory()
    const {states, seters} = useContext(GlobalStateContext)
   const token = localStorage.getItem("token")
    const [restaurants, setRestaurants] = useState ([])
    const [search, setSearch] = useState("")
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

    const onClickCard = (id) =>{
        goToRestaurant(history, id)
    }
    const restaurantsCards = restaurants.map((restaurant)=>{
        return (
                <HomePageCard
                key={restaurant.id}
                title ={restaurant.name}
                image ={restaurant.logoUrl}
                time={restaurant.deliveryTime}
                frete={restaurant.shipping}
                onClick={() => onClickCard (restaurant.id)}
                />
            )
        })


  const logout = () =>{
    localStorage.removeItem("token")
  }

  const rightButtonAction = () =>{
    if(token){
      logout()
      seters.setRightButtonText("")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
    return(

        <div> 
            <Header>
                <Title> Future</Title>
                <BackButton onClick={rightButtonAction} > <Img src={saida} rightButtonAction={states.rightButtonText}/></BackButton>
            </Header>
            <ButtonProfile color="primary"> <ImgProfile src={perfil} onClick={() => goToProfile(history)} /> </ButtonProfile>

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