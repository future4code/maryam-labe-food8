import React from 'react'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import InputMask from 'react-input-mask'
import {EditarCadastro, Input, Rectangle, Button, Rectangle_Button} from './styled'

const EditCadastro = () =>{

    const [form, onChange, clear] = useForm({name: '', email: '', cpf: ''})


    const updateProfile = () =>{
        
        axios.put(`${BASE_URL}/profile`, form, {
            headers: {Authorization: localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res)
                clear()
            })
            .catch((error)=>{
                console.log(error.message)
            })
    
    
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
                    placeholder={"Nome"}
                    id="outlined"
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
                    required
                />
                </Rectangle>

                <Rectangle>
                <Input InputMask mask='999.999.999-99'
                    type={"cpf"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    placeholder="Cpf"
                    required
                />
                </Rectangle>

                <Rectangle_Button>
                <Button
                    type={"submit"}>
                        Salvar
                    </Button>
                </Rectangle_Button>
            </form>
        </EditarCadastro>
    )



}
export default EditCadastro