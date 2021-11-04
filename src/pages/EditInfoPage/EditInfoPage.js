import React from 'react'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import {EditarCadastro, StyledButton, Input, Rectangle, ContainerButton} from './styled'

const EditInfoPage = () =>{

    const [form, onChange, clear] = useForm({name: '', email: '', cpf: ''})


    const updateProfile = () =>{
        
        axios.put(`${BASE_URL}/profile`, form, {
            headers: {auth: localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res)
                clear()
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }

    const mascara = (valor) =>{
       let valorMascarado= valor.replace(/\D+/g,"")
       return valorMascarado
    }

    const  onSubmitForm = (event) =>{
        event.preventDefault()
        updateProfile(form)
    }

    return (
        <EditarCadastro>
            <form onSubmit={onSubmitForm}>
                <Rectangle>
               <Input
                    type={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label="Nome"
                    required
                />
                </Rectangle>

                <Rectangle>
                <Input
                    type={"email"}
                    placeholder="E-mail"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label="E-mail"
                    required
                />
                </Rectangle>

                <Rectangle>
                <Input

                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={(event)=> onChange(event, mascara)}
                    label="Cpf"
                    required
                />
                </Rectangle>

                <ContainerButton>
                <StyledButton 
                    type={"submit"}>
                        Salvar
                    </StyledButton>
                </ContainerButton>
            </form>
        </EditarCadastro>
    )



}
export default EditInfoPage