import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import {HistricoDePedidos, PathCopy, Text} from './styled'

const HistoryProfile = () =>{

    const historyOrder  = useRequestData({}, `${BASE_URL}/orders/history`)

    return (
        <div>
            <HistricoDePedidos>
           <h4> Histórico de pedidos</h4>
            </HistricoDePedidos>
            <PathCopy></PathCopy>
            {historyOrder > 10 ? <Text>{historyOrder}</Text> :
            <Text>Você não realizou nenhum pedido</Text>}
        </div>
    )
}
export default HistoryProfile