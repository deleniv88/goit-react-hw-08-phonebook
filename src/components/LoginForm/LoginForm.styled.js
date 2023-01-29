import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const InputItem = styled(TextField)`
    margin-bottom: 10px;
    background-color: rgb(255,255,255,0.6);
    border-radius: 5px;
    @media screen and (max-width:480){
   margin: 20px;
}
  
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

`