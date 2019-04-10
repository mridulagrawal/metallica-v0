import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import './styles/App.scss'
import TradesApplicationComponent from './features/trades-application/TradesApplication.component';
import TransportsApplicationComponent from './features/transports-application/TransportsApplication.component';
import TransfersApplicationComponent from './features/transfers-application/TransfersApplication.component';

class App extends Component {
  render() {
    return <>
      <Header />
      <Route exact path="/" component={() => <h2>Home</h2>} />
      <Route path="/trades" component={TradesApplicationComponent} />
      <Route path="/transfers" component={TransfersApplicationComponent} />
      <Route path="/transports" component={TransportsApplicationComponent} />
      {this.props.isFetching && <div className="loader-container">
        <div className="loader"></div>
      </div>}
    </>;
  }
}

export const mapStateToProps = (state) => {
  const { isFetching } = state.appState;
  return {
    isFetching
  }
};

export default withRouter(connect(mapStateToProps)(App));
