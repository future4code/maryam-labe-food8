import React from "react"
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import LogoFood from '../../assets/logo-future-eats.png'
import Back from '../../assets/back.png'
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
          <TextField  mask='999.999.999-99'
                    type={"cpf"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    placeholder="Cpf"
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