import React from 'react';

import Grid from '../../containers/Grid/Grid'
import { TradeGridModel } from './TradeGrid.model';

class TradeGridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            toggleHamburger: false
        };
        this.getTradeGridData = this.getTradeGridData.bind(this);
    }

    getTradeGridData = () => {
        const data = {
            coloumnHeaders: [
                'Trade Date',
                'Commodity',
                'Side',
                'Qty (MT)',
                'Price (/MT)',
                'Counterparty',
                'Location'
            ],
            rowData: [
                {
                    trade_id: 1,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 123450.00,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 2,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                }
            ]
        };

        const rowConfig = data.rowData.map(data => {
            return new TradeGridModel(data);
        })

        return {
            headers: data.coloumnHeaders,
            rowConfig
        }

    }

    render() {
        const tradeGridData = this.getTradeGridData();
        return (
            <>
                <Grid gridData={tradeGridData} />
            </>
        );
    }
}

export default TradeGridComponent;
