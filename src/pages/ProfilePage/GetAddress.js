import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const GetAddress = () =>{

    const Address = () =>{
        
        axios.get(`${BASE_URL}/profile/address`, {
            headers: {auth: localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }

    return (
        <div>
            
        </div>
    )
}
export default GetAddress