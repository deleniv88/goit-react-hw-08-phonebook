import styled from "@emotion/styled";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgb(211,211,211, 0.6);
    padding: 30px 50px;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 4px 4px lightgray; 
    @media screen and (max-width:768px){
        width: 70%;
        font-size: 13px;
}

@media screen and (max-width:480px){
    width: 70%;
    font-size: 12px;
    padding: 30px 30px;
}
@media screen and (max-width:320){
    width: 70%;
}

`

export const Main = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`