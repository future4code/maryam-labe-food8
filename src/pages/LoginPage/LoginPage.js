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
      checkAdress()
    })
    .catch((err) => console.log(err))
  }

  const checkAdress = (hasAdress) => {
    if(hasAdress === true){
    return login()
    }if (hasAdress === false)
    return goToSignUp()
  }

    return (
      <PageContainer>
        <Logo src ={LogoFood}/>
        <TextStyle> Sign In </TextStyle>
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
                placeholder = "Minimum of 6 characters"
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
              <br/>
          <ButtonContainer type={"submit"}> Sign In </ButtonContainer>
        </form>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          // onClick={() => goToSignUp(history)}
        >
          Don't have an account? Click here.
        </Button>
      </PageContainer>
    );
  }
  
  export default LoginPage;
  