import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
//import logo from '';
import { Fade } from 'react-reveal';

function Navigation() {

    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img width="250px" height="250px" src='/static/favicon.png' alt="" />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
            </ul>
            <PrimaryButton  name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
