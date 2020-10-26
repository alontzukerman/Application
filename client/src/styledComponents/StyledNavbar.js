import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';


const StyledNavbar = styled(Navbar)`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    height: 30px;
    font-weight: bold;
    &:hover {
        background-color: #444;
    }
`;

export default StyledNavbar ;