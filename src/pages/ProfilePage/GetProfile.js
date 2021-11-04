import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const GetAddress = () =>{

    const Profile = () =>{
        
        axios.get(`${BASE_URL}/profile`, {
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