import React, {useState} from "react"
import useForm from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import LogoFood from '../../assets/logo-future-eats.png'
import Back from '../../assets/back.png'
import saida from '../../assets/saida.png'
import {PageContainer, ButtonContainer, Logo, TextStyle, BackButton, Input} from './styled'
import { Button } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToRegisterAdress } from "../../routes/cordinator";
import HeaderBack from "../../components/HeaderBack";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import CircularProgress from "@material-ui/core/CircularProgress"


const SignUpPage = () => {
  useUnprotectedPage()
    const [form, onChange, clear] = useForm({name:"", email:"", cpf:"", password: "", password: ""});
    const history = useHistory ()
    const [isLoading, setIsLoading]= useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp()
  }
  const signUp = (form, clear, history) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/signUp`, form, {

      headers: {auth: localStorage.setItem("token")

    }})
    .then((res)=>{
      console.log(res)
      setIsLoading(false)
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
        <Input
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
          <Input
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
          <Input
                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    label="Cpf"
                    required
            />
            <br/>
          <Input
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
            <Input
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
          > {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Create Account</>}  </ButtonContainer>
        </form>
      </PageContainer>
    );
  }
  export default SignUpPage;