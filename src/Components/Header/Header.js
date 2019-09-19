import React from 'react';
import Container from '../../Scafolding/Container';
import Scorebar from './Scorebar/Scorebar';
import Logo from './Logo/Logo';
import MenuToggler from './MenuToggler/MenuToggler';

const Header = (props)=> {
    return (
        <header>
            <Container>
                <Logo />
                <div className="Inline-Block">
                    <div>
                        <div className="Inline-Block">{props.leagueName}</div>
                        <Scorebar/>
                    </div>
                    <div>
                        <MenuToggler/>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;