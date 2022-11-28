import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px;
&.active{
    color: rgb(0,0,255);
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
`
export const Container = styled.div`
    display: flex;
    font-size: 20px;
    justify-content: space-evenly;
    margin-bottom: 10px;
    padding: 20px;
`