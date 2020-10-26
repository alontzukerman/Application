import styled from 'styled-components';
import GlobalCovidChart from '../GlobalCovidChart';

const StyledGlobalCovidChart = styled(GlobalCovidChart)`
    width: 25%;
    height: 70%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 2px solid white;
    & #totalConfirmed {
    }
`;

export default StyledGlobalCovidChart