import React from "react"
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import LogoFood from '../../assets/logo-future-eats.png'
import {PageContainer, ButtonContainer, Logo, TextStyle} from './styled'
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToSignUp } from "../../routes/cordinator";
// import { goToSignUp } from '../../routes/cordinator'


const LoginPage = () => {
    const [form, onChange, clear] = useForm({email:"", password: ""});

    const history = useHistory ()
    
  const onSubmitForm = (event) => {
    // console.log(form)
    event.preventDefault()
    login()
  }

  // const userHasAdress = (hasAdress) = () => {
  //   if (hasAdress === true){
  //     return login()
  //   } if (hasAdress = false){
  //     return goToSignUp(history)
  //   }
  // }

  const login = (form, clear, history) => {
    axios.post(`${BASE_URL}/login`, form)
    .then((res) => console.log(res))
      // localStorage.setItem("token", res.data.token)
      // clear()
      // goToSignUp(history)
    // })
    .catch((err) => console.log(err.response.data.message))
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
        {/* </InputContainer> */}
      </PageContainer>
    );
  }
  
  export default LoginPage;
  