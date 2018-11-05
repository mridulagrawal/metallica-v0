import React, { Component } from 'react';
import Header from './core/containers/Header/Header';
import TradeGrid from './core/containers/TradeGrid/TradeGrid';
import './styles/App.scss'
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
            hi
        </div>
        </div>
      </div>
    </>;
  }
}

export default App;
