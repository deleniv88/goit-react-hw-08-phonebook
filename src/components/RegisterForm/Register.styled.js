import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const InputItem = styled(TextField)`
    margin-bottom: 10px;
    background-color: rgb(255,255,255,0.6);
    border-radius: 5px;
`
export const FormRegister = styled.form`
    width: 450px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:768px){
        width: 380px;
    }

    @media screen and (max-width:480px){
    width: 280px;
    }


    @media screen and (max-width:320px){
    width: 280px;
    }
`