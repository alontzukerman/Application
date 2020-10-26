import React from 'react';
import styled from 'styled-components';
import CovidChart from '../CovidChart';


const StyledCovidChart = styled(CovidChart)`
    display: flex ;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 90%;
    background-color: black;


    & #countries {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        column-gap: 10px;
        height: 40px;
        margin: auto;
        padding: 10px;
        background-color: black;
    }
    & .selectCountries {
        font-family: 'Montserrat', sans-serif;
        font-size: 100%;
        background-color: black;
        color: white;
        border: 0;
        border-bottom: 2px solid white;
    }
    & button {
        border:solid 2px #fff;
        background: transparent;
        color: #fff !important;
        width: 80px;
        font-size: 100%;
        transition: all .4s ease-in-out;
        &:hover {
            border:solid 2px #fff;
            background: #fff;
            color: #1f1f1f !important;
        }
    }
`;

export default StyledCovidChart ;