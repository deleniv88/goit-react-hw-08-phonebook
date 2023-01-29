import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const InputItem = styled(TextField)`
    margin-bottom: 10px;
    width: 300px;
    @media screen and (max-width:768px){
    width: 300px;
}

@media screen and (max-width:480px){
    width: 240px;
}
`

export const ContainerContactForm = styled.div`
    display: flex;
    margin-bottom: 5%;
    font-weight: bold;
    background-color: rgb(211,211,211, 0.6);
    padding: 30px 50px;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 4px 4px lightgray;
    width: 300px;
    @media screen and (max-width:768px){
    width: 300px;
}

@media screen and (max-width:480px){
    width: 240px;
    padding: 30px 30px;
    font-size: 15px;
}
`
export const ContactLabel = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px;
`