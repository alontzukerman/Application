import styled from 'styled-components';

const StyledLink = styled.a.attrs(props => ({
    target: '_blank',
}))`
    text-decoration: none;  
    color: #fff;  
`;

export default StyledLink;