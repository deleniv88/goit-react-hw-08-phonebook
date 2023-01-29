import styled from '@emotion/styled'

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 15px;
    @media screen and (max-width:480px){
        font-size: 15px;
    }
`

export const UserName = styled.p`
    font-size: 20px;
    font-weight: 700;
    @media screen and (max-width:480px){
        font-size: 15px;
    }
`
