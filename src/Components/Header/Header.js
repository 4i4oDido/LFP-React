import React from 'react';
import Container from '../../Scafolding/Container'
import Scorebar from '../Scorebar/Scorebar'

const Header = (props)=> {
    return (
        <header>
            <Container>
                <Scorebar/>
            </Container>
        </header>
    )
};

export default Header;