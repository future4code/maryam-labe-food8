import React from "react"
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import LogoFood from '../../assets/logo-future-eats.png'
import Back from '../../assets/back.png'
import saida from '../../assets/saida.png'
import {PageContainer, ButtonContainer, Logo, TextStyle, BackButton} from './styled'
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToRegisterAdress } from "../../routes/cordinator";
import InputMask from 'react-input-mask'
import HeaderBack from "../../components/HeaderBack";

const SignUpPage = () => {
    const [form, onChange, clear] = useForm({name:"", email:"", cpf:"", password: "", password: ""});
    const history = useHistory ()

    const mascara = (valor) =>{
  
      if (valor.length <= 14) {
       valor = valor.replace(/\D/g, '')
       valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
       valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
       valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2')
       valor = valor.replace(/(-\d{2})\d+?$/, '$1')
     } else if(valor.length > 14){
       valor = valor.replace(/\D/g, '')
       valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
       valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
       valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2')
       valor = valor.replace(/(-\d{2})\d+?$/, '$1')
     }
     return valor
   }

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp()
  }
  const signUp = (form, clear, history) => {
    axios.post(`${BASE_URL}/signUp`, form, {

      headers: {Authorization: localStorage.setItem("token")

    }})
    .then((res)=>{
      console.log(res)
      
      clear()
      goToRegisterAdress(history)
  })
    .catch((err) => console.log(err.response.data.message))
  }
    return (
      <PageContainer>
        
        <HeaderBack />
        <Logo src ={LogoFood}/>
        <TextStyle> Cadastrar </TextStyle>
        <form onSubmit={onSubmitForm}>
        <TextField
                placeholder = 'Name'
                name={"name"}
                value = {form.name}
                onChange = {onChange}
                required
                label={"Name"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
          />
          <br/>
          <TextField
                placeholder = 'email@email.com'
                name={"email"}
                value = {form.email}
                onChange = {onChange}
                required
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
          />
          <br/>
          <TextField 
                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={(event)=> onChange(event, mascara)}
                    label="Cpf"
                    required
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
            />
            <br/>
          <TextField
                placeholder = "Minimun of 6 characters"
                name={"password"}
                value = {form.password}
                onChange = {onChange}
                required
                label={"Password"}
                variant={"outlined"}
                margin={"normal"}
                type={"Password"}
                fullWidth
          />
          <br/>
            <TextField
                placeholder = "Minimun of 6 characters"
                name={"password"}
                value = {form.password}
                onChange = {onChange}
                required
                label={"confirm password"}
                variant={"outlined"}
                margin={"normal"}
                type={"Password"}
                fullWidth
          />
          <br/>
          <br/>
          <ButtonContainer
          color={'#5CB646'}
          variant={'contained'}
          type={"submit"}
          margin={"normal"}
          fullWidth
          onClick={() => goToRegisterAdress(history)}
          > Create Account </ButtonContainer>
        </form>
      </PageContainer>
    );
  }
  export default SignUpPage;