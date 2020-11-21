import React from "react";
import styled, {css} from 'styled-components';
import {getTime} from "../lib/GetDateTime";

const HeaderBlock = styled.div `
    border: none;
    text-align: center;
    padding: 30px 0;
    margin-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 설정
    css`
        color: #373a40;
    ` :
    css`
        color: white;
    `}
`;

const Header = () => {
    const {hour} = getTime()

    return(
        <HeaderBlock time={hour}>
            Weather? Wear!
        </HeaderBlock>
    );
};

export default Header;