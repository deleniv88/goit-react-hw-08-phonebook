import styled from '@emotion/styled'

export const ContactsUl = styled.ul`
    list-style-type: circle;
    display: flex;
    flex-direction: column;
    margin-top: 9%;
`

export const ContactsLi = styled.li`
    width: 50%;
    padding: 10px;
    list-style: circle;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    &:nth-child(even) {
    background-color: bisque;
}
`