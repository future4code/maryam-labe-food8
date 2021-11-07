import React from "react"
import useForm from '../../hooks/useForm';
import Back from '../../assets/back.png'
import { useHistory } from "react-router";
import {PageContainer, ButtonContainer, TextStyle, BackButton} from './styled'
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToHome, goToSearch } from "../../routes/cordinator";
import HeaderBack from "../../components/HeaderBack";

const RegisterAddressPage = () =>
{
  const [form, onChange, clear] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''});
  const history = useHistory()
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
    }
        const onSubmitForm = (event) => {
          event.preventDefault()
          registerAddress()
        }
      
 

    return(
      <PageContainer>
      <HeaderBack />
      <TextStyle> Address </TextStyle>
      <form onSubmit={onSubmitForm}>
      <TextField
        type={"text"}
        name={"street"}
        value={form.street}
        onChange={onChange}
        placeholder="Endereço"
        required
        label={"street"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"number"}
        placeholder="N°"
        name={"number"}
        value={form.number}
        onChange={onChange}
        required
        label={"number"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"neighbourhood"}
        value={form.neighbourhood}
        onChange={onChange}
        placeholder="Bairro"
        required
        label={"neighbourhood"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"city"}
        value={form.city}
        onChange={onChange}
        placeholder="Cidade"
        required
        label={"city"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"state"}
        value={form.state}
        onChange={onChange}
        placeholder="Estado"
        required
        label={"state"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"complement"}
        value={form.complement}
        onChange={onChange}
        placeholder="Complemento"
        required
        label={"complement"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>     
      <br/>          
      <ButtonContainer
        variant={'contained'}
        type={"submit"}
        onClick={() => goToHome(history)}
        fullWidth> Salve </ButtonContainer>
      </form>
    </PageContainer>
    )
}
export default RegisterAddressPage