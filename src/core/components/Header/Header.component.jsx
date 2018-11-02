import React, { Component } from 'react';
import { Popover, Overlay, Button } from 'react-bootstrap';

import './Header.scss'

class HeaderComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = e => {
            this.setState({ target: e.target, show: !this.state.show });
        };

        this.state = {
            show: false
        };
    }
    popoverClick = () => {
        return <Popover id="popover-trigger-click" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>
    };

    render() {
        return (
            <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Brand</a>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/route">Trades <span className="sr-only">(current)</span></a></li>
                            <li><a href="/">Transfers</a></li>
                            <li><a href="/">Transport</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <span>Hi Mridul</span>
                            </li>
                            <li className="navbar-nav-profile">
                                <span className="navbar-nav-profile--cursor glyphicon glyphicon-user" onClick={this.handleClick}></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Overlay
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
                        <li><a href="/">Action</a></li>
                        <li><a href="/">Another action</a></li>
                        <li><a href="/">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="/">Separated link</a></li>
                    </ul>
                </Popover>
            </Overlay>
            </>
        );
    }
}

export default HeaderComponent;
