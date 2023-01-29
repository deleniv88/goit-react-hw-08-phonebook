import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    font-size: 20px;
    justify-content: space-evenly;
    margin-bottom: 10px;
    padding: 20px;
`

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-right: 5px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    box-shadow: 2px 2px 4px 0px black;
    background-color: rgba(255,255,255,0.7);
&.active{
    background-color: rgb(127,0,255);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    text-decoration: overline;
}
:hover:not(.active),
:focus-visible:not(.active){
    color: white;
    background-color: rgb(127,0,255);
}

@media screen and (max-width:768px){
    font-size: 16px;
    padding: 8px;
}

@media screen and (max-width:480px){
    font-size: 14px;
    padding: 5px;
}

`


