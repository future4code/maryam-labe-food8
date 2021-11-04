import React from 'react'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import {EditarCadastro,StyledButton, Rectangle, Input, ContainerButton} from './styled'

const EditAddressPage = () => {

const [form, onChange, clear] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''})

const addAdress = () =>{
    console.log(form)
    console.log(localStorage.getItem("token"))
    axios.put(`${BASE_URL}/address`, form, {
        headers: {'auth': localStorage.getItem("token")}})
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
    addAdress(form)
    }

    return (
    <EditarCadastro>
        <form onSubmit={onSubmitForm}>
            <Rectangle>
           <Input
                type={"text"}
                name={"street"}
                value={form.street}
                onChange={onChange}
                label="Endereço"
                required
            />
            </Rectangle>

            <Rectangle>
            <Input
                type={"number"}
                label="N°"
                name={"number"}
                value={form.number}
                onChange={onChange}
                required
            />
            </Rectangle>

            <Rectangle>
            <Input 
                type={"text"}
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                label="Bairro"
                required
            />
            </Rectangle>

            <Rectangle>
           <Input
                type={"text"}
                name={"city"}
                value={form.city}
                onChange={onChange}
                label="Cidade"
                required
            />
            </Rectangle>

            <Rectangle>
           <Input
                type={"text"}
                name={"state"}
                value={form.state}
                onChange={onChange}
                label="Estado"
                required
            />
            </Rectangle>

            <Rectangle>
           <Input
                type={"text"}
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                label="Complemento"
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
export default EditAddressPage