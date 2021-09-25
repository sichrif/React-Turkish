import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PrimaryButton({name}) {
    const navigate = useNavigate();

const cclik =() =>{
    console.log("jsjsjs");
    navigate('/register', { replace: true })
}
    return (
        <ButtonStyled onClick={cclik} >
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export default PrimaryButton
