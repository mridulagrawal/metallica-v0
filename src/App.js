import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './containers/Header/Header';
import TradeGrid from './containers/TradeGrid/TradeGrid';
import './styles/App.scss'
import TradePanel from './containers/TradePanel/TradePanel';

class App extends Component {
  render() {
    return <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <TradeGrid />
          </div>
          <div className="col-md-4">
            <TradePanel />
          </div>
        </div>
      </div>
      {this.props.isFetching && <div className="loader"></div>}
    </>;
  }
}

export const mapStateToProps = (state) => {
  const { isFetching } = state.appState;
  return {
    isFetching
  }
};

export default connect(mapStateToProps)(App);
