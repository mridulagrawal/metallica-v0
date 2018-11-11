import { showLoader, stopLoader } from '../../action';

export const FETCH_TRADES = 'FETCH_TRADES';
export const FETCH_TRADES_SUCCESS = 'FETCH_TRADES_SUCCESS';
export const SORT_TRADES = 'SORT_TRADES';

export const fetchTrades = () => {

    return function (dispatch) {
        dispatch(showLoader());
        const data = {
            coloumnHeaders: [
                { heading: 'Trade Date', sort: true, key: 'trade_date' },
                { heading: 'Commodity', sort: true, key: 'commodity' },
                { heading: 'Side', sort: true, key: 'side' },
                { heading: 'Qty (MT)', sort: true, key: 'qty' },
                { heading: 'Price (/MT)', sort: true, key: 'price' },
                { heading: 'Counterparty', sort: true, key: 'counterparty' },
                { heading: 'Location', sort: true, key: 'location' },
                { heading: '', sort: false }
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
                },
                {
                    trade_id: 3,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 4,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 5,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 6,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 7,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 8,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 9,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 10,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 11,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 12,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 13,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 14,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 15,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 16,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 17,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 18,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 19,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 20,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 21,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 22,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 23,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 24,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 25,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 26,
                    trade_date: '22/03/2107',
                    commodity: 'AL',
                    side: 'Buy',
                    qty: 100,
                    price: 231450,
                    counterparty: 'Lorem',
                    location: 'BA'
                },
                {
                    trade_id: 27,
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
        return fetch(`https://www.reddit.com/r/reactjs.json`)
            .then(response => response.json())
            .then(json => {
                dispatch(stopLoader())
                dispatch(fetchTradesSuccess(data))
            });
    }
}

export const fetchTradesSuccess = data => {
    return {
        type: FETCH_TRADES_SUCCESS,
        payload: data
    };
}

export const sortTradesBy = key => {
    return {
        type: SORT_TRADES,
        payload: key
    };
}
