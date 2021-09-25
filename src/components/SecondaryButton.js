import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg'
import axios from 'axios';
import authHeader from "../services/auth-header";

function Secondarybutton({name}) {
    const handleClickk =  ()  =>  {
     const   data = {
            email:"mchricccf000@booooya.com"
        }
        axios.post(process.env.REACT_APP_BACKEND_URL +"/api/checkout/create-checkout-session",data)
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err));
    }
    return (
        <SecondaryButtonStyled  onClick={handleClickk}>
            
            {name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: white;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem;
    }
`;

export default Secondarybutton;
