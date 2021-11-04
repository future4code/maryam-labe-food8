import React from "react"
import useForm from '../../hooks/useForm';
import Back from '../../assets/back.png'
import {PageContainer, ButtonContainer, TextStyle, BackButton} from './styled'
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToSearch } from "../../routes/cordinator";


const RegisterAddressPage = () => {
    const [form, onChange, clear] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''});

  const registerAddress = (form, clear, history) =>{
    console.log(localStorage.getItem("token"))
    axios.put(`${BASE_URL}/address`, form, {
        headers: {'auth': localStorage.getItem("token")}})
        .then((res)=>{
            console.log(res)
            clear()
            goToSearch(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })

        const onSubmitForm = (event) => {
          event.preventDefault()
          registerAddress()
        }


    return (
      <PageContainer>
        <BackButton src ={Back}/>
        <TextStyle> Cadastrar </TextStyle>
        <form onSubmit={onSubmitForm}>
        <TextField
                type={"text"}
                name={"street"}
                value={form.street}
                onChange={onChange}
                 placeholder="Endereço"
                required
          />
          <TextField
                type={"number"}
                placeholder="N°"
                name={"number"}
                value={form.number}
                onChange={onChange}
                required
          />
            <TextField
                type={"text"}
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                placeholder="Bairro"
                required
          />
            <TextField
                type={"text"}
                name={"city"}
                value={form.city}
                onChange={onChange}
                placeholder="Cidade"
                required
          />

          <TextField
                type={"text"}
                name={"state"}
                value={form.state}
                onChange={onChange}
                placeholder="Estado"
                required
          />
          <TextField
                type={"text"}
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                placeholder="Complemento"
                required
          />

              
          <Button color={'primary'} variant={'contained'}type={"submit"} fullWidth> Salve </Button>
        </form>
 
      </PageContainer>
    );
}
}
  
export default RegisterAddressPage