import React, {Component} from 'react';
import Container from '../../Scafolding/Container';
import Scorebar from './Scorebar/Scorebar';
import Logo from './Logo/Logo';
import MenuToggler from './MenuToggler/MenuToggler';
import SearchButton from './Search/SearchButton';

class Header extends Component {

    menuTogglerHandler() {
        console.log('menu btn clicked');
    }

    searchButtonHandler() {
        console.log('search btn clicked');
    }

    render() {
        return (
            <header>
                <Container>
                    <Logo />
                    <div className="header-row">
                        <div className="inline-block">{this.props.leagueName}</div>
                        <Scorebar/>
                    </div>
                </Container>
                <div className="header-row main-bg">
                    <Container>
                        <MenuToggler btnClicked={this.menuTogglerHandler}/>
                        <SearchButton btnClicked={this.searchButtonHandler}/>
                    </Container>
                </div>
            </header>
        )
    }
};

export default Header;