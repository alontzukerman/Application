import React from 'react'
import StyledLink from './styledComponents/StyledLink';

function Navbar({className}) {
    return (
        <div className={className}>
            <StyledLink href=''>LINK</StyledLink>
            <StyledLink href=''>LINK</StyledLink>
            <StyledLink href=''>LINK</StyledLink>
            <StyledLink href=''>LINK</StyledLink>
        </div>
    )
}

export default Navbar ;
