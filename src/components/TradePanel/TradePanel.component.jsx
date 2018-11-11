import React from 'react';

import TradeForm from '../../containers/TradeForm/TradeForm';
import './TradePanel.scss'

class TradesPanelComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            gridData: null
        };
    }

    render() {
        return (
            <>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span className="panel-heading--tradeDetail">Trade Id: {1234}</span>
                        <span className="pull-right">
                            <span className="btn glyphicon glyphicon-pencil"></span>
                            <span className="btn glyphicon glyphicon-trash"></span>
                        </span>
                    </div>
                    <div className="panel-body">
                        <TradeForm />
                    </div>
                </div>
            </>
        );
    }
}

export default TradesPanelComponent;
