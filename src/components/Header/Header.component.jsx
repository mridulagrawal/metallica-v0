import React, { Component } from 'react';
import { Popover, Overlay } from 'react-bootstrap';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import './Header.scss'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            toggleHamburger: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.overlayPopover = this.overlayPopover.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    overlayPopover = () => {
        return <Overlay
            show={this.state.show}
            rootClose
            onHide={() => this.setState({ show: false })}
            target={this.state.target}
            placement="bottom"
            container={this}
            containerPadding={20}
        >
            <Popover id="popover-contained" title="Popover-profile-bottom">
                <ul className="dropdown-menu">
                    <li><a href="/">Logout</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/">Profile</a></li>
                </ul>
            </Popover>
        </Overlay>
    }

    handleClick = e => {
        this.setState({ target: e.target, show: !this.state.show });
    };

    toggleHamburger = () => {
        this.setState({ ...this.state, toggleHamburger: !this.state.toggleHamburger });
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        {/* for better mobile display --> */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed"
                                aria-expanded="false"
                                onClick={this.toggleHamburger}
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink to="/" activeClassName="navbar-brand">
                                Metallica
                            </NavLink>
                        </div>

                        {/* for desktop display */}
                        <div className={classNames('navbar-collapse', !this.state.toggleHamburger ? 'collapse' : '')} >
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink exact to="/trades" activeClassName="navbar-nav__link-active">
                                        Trades
                                    </NavLink>
                                </li>
                                <li><NavLink to="/transfers" activeClassName="navbar-nav__link-active">
                                    Transfers
                                    </NavLink>
                                </li>
                                <li><NavLink to="/transports" activeClassName="navbar-nav__link-active">
                                    Transports
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="hidden-lg navbar-nav divider"></div>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <div>Hi Mridul</div>
                                </li>
                                <li className="navbar-nav-profile">
                                    <div className="fas fa-user-circle" onClick={this.handleClick}></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.overlayPopover()}
            </>
        );
    }
}

export default HeaderComponent;
