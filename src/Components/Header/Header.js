import React, {Component} from 'react';
import Container from '../../Scafolding/Container';
import Scorebar from './Scorebar/Scorebar';
import Logo from './Logo/Logo';
import MenuToggler from './MenuToggler/MenuToggler';
import SearchButton from './Search/SearchButton';
import './Header.css';

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
                        <div className="inline-block league-name">{this.props.leagueName}</div>
                        <Scorebar/>
                    </div>
                </Container>
                <div className="main-bg">
                    <Container>
                        <div className="header-row">
                            <MenuToggler btnClicked={this.menuTogglerHandler}/>
                            <SearchButton btnClicked={this.searchButtonHandler}/>
                        </div>
                    </Container>
                </div>
            </header>
        )
    }
}

export default Header;