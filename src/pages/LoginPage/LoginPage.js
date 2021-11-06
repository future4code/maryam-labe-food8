import React from "react"
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import LogoFood from '../../assets/logo-future-eats.png'
import {PageContainer, ButtonContainer, Logo, TextStyle, Button} from './styled'
import { TextField } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToSignUp, goToHome } from "../../routes/cordinator";

const LoginPage = () => {
    const [form, onChange, clear] = useForm({email:"", password: ""});

    const history = useHistory()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history)
    console.log(form)
  }

  const login = (form, clear, history) => {
    axios.post(`${BASE_URL}/login`, form)
    .then((res) => {
      console.log(res.data)
      localStorage.setItem("token", res.data.token)
      clear()
      goToHome(history)
     
    })
    .catch((err) => console.log(err))
  }

  

    return (
      <PageContainer>
        <Logo src ={LogoFood}/>
        <TextStyle> Entrar </TextStyle>
        <form onSubmit={onSubmitForm}>
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
                placeholder = "Mínimo 6 caracteres"
                name={"password"}
                value = {form.password}
                onChange = {onChange}
                required
                label={"Senha"}
                variant={"outlined"}
                margin={"normal"}
                type={"Password"}
                fullWidth
          />
              <br/>
              <br/>
          <ButtonContainer type={"submit"}> Entrar </ButtonContainer>
        </form>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          onClick={() => goToSignUp(history)}
        >
           Não possui cadastro? Clique aqui.
        </Button>
      </PageContainer>
    );
  }
  
  export default LoginPage;
  