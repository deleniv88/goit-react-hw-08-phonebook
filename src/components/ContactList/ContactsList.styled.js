import styled from '@emotion/styled'

export const ContactsUl = styled.ul`
    list-style-type: circle;
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: rgb(211,211,211, 0.6);
    padding: 30px 50px;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 4px 4px lightgray;
    margin: 0 auto;
    @media screen and (max-width:768px){
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width:480px){
    width: 60%;
    font-size: 14px;
}
@media screen and (max-width:320){
    width: 50%;
}
`

export const ContactsLi = styled.li`
    width: 100%;
    padding: 10px;
    list-style: circle;
    align-items: center;
    display: block;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    &:nth-child(even) {
    background-color: bisque;
}


`

export const Main = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`