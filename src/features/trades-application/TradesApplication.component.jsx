import React, { Component } from 'react';
import TradeGrid from './../../containers/TradeGrid/TradeGrid';
import TradePanel from './../../containers/TradePanel/TradePanel';

export default class TradesApplicationComponent extends Component {
    render() {
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <TradeGrid />
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <TradePanel />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button className="btn btn-primary"><i className="fa fa-plus-circle"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}
