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
                    "trade_id": "5bea75db5a474c10c10dbfd3",
                    "trade_date": "03-12-2014",
                    "commodity": "MG",
                    "side": "BUY",
                    "qty": 687,
                    "price": 2928.5949,
                    "counterparty": "Mcmillan",
                    "location": "Waterloo"
                },
                {
                    "trade_id": "5bea75dbb52a69ac405d657a",
                    "trade_date": "05-03-2017",
                    "commodity": "AL",
                    "side": "SELL",
                    "qty": 146,
                    "price": 2236.9194,
                    "counterparty": "Suarez",
                    "location": "Lorraine"
                },
                {
                    "trade_id": "5bea75db67b2e532a04c60e6",
                    "trade_date": "31-05-2015",
                    "commodity": "MG",
                    "side": "BUY",
                    "qty": 799,
                    "price": 3720.9006,
                    "counterparty": "May",
                    "location": "Chilton"
                },
                {
                    "trade_id": "5bea75db8833ae46cf9a2915",
                    "trade_date": "02-03-2016",
                    "commodity": "AL",
                    "side": "BUY",
                    "qty": 449,
                    "price": 1298.5192,
                    "counterparty": "Nona",
                    "location": "Beaulieu"
                },
                {
                    "trade_id": "5bea75db1b20928f03991542",
                    "trade_date": "02-04-2018",
                    "commodity": "MG",
                    "side": "BUY",
                    "qty": 989,
                    "price": 1123.0587,
                    "counterparty": "Pitts",
                    "location": "Winchester"
                },
                {
                    "trade_id": "5bea75db704d14bef61da52e",
                    "trade_date": "16-05-2018",
                    "commodity": "MG",
                    "side": "SELL",
                    "qty": 378,
                    "price": 1797.9567,
                    "counterparty": "Alisa",
                    "location": "Coinjock"
                },
                {
                    "trade_id": "5bea75db4d57c31cbc224684",
                    "trade_date": "27-07-2017",
                    "commodity": "AL",
                    "side": "SELL",
                    "qty": 472,
                    "price": 2750.1533,
                    "counterparty": "Ethel",
                    "location": "Yettem"
                },
                {
                    "trade_id": "5bea75db4ca3f839fa5af120",
                    "trade_date": "31-01-2017",
                    "commodity": "MG",
                    "side": "SELL",
                    "qty": 37,
                    "price": 2525.4483,
                    "counterparty": "Elba",
                    "location": "Tuttle"
                },
                {
                    "trade_id": "5bea75dbb694c51d73597645",
                    "trade_date": "15-01-2016",
                    "commodity": "AL",
                    "side": "BUY",
                    "qty": 967,
                    "price": 1979.759,
                    "counterparty": "Bowman",
                    "location": "Choctaw"
                },
                {
                    "trade_id": "5bea75dbf9718899c29d699b",
                    "trade_date": "29-10-2015",
                    "commodity": "AL",
                    "side": "SELL",
                    "qty": 974,
                    "price": 3652.44,
                    "counterparty": "Estelle",
                    "location": "Titanic"
                },
                {
                    "trade_id": "5bea75dbd50c0ea146725c6b",
                    "trade_date": "26-07-2014",
                    "commodity": "MG",
                    "side": "SELL",
                    "qty": 820,
                    "price": 4664.8245,
                    "counterparty": "Ava",
                    "location": "Gadsden"
                },
                {
                    "trade_id": "5bea75db011f46bfe92ee1bc",
                    "trade_date": "12-04-2015",
                    "commodity": "ZN",
                    "side": "BUY",
                    "qty": 336,
                    "price": 1072.1709,
                    "counterparty": "Allyson",
                    "location": "Clarksburg"
                },
                {
                    "trade_id": "5bea75db19ad5736b114745c",
                    "trade_date": "21-05-2017",
                    "commodity": "ZN",
                    "side": "SELL",
                    "qty": 475,
                    "price": 1400.9368,
                    "counterparty": "Esperanza",
                    "location": "Babb"
                },
                {
                    "trade_id": "5bea75db6a9ed16f58b45b09",
                    "trade_date": "24-05-2017",
                    "commodity": "CU",
                    "side": "BUY",
                    "qty": 16,
                    "price": 2385.6373,
                    "counterparty": "Leigh",
                    "location": "Lopezo"
                },
                {
                    "trade_id": "5bea75db2dde09a9d5f49f6e",
                    "trade_date": "25-11-2017",
                    "commodity": "ZN",
                    "side": "BUY",
                    "qty": 714,
                    "price": 4896.8562,
                    "counterparty": "Haynes",
                    "location": "Trucksville"
                },
                {
                    "trade_id": "5bea75db8670e6f1a49c7bb3",
                    "trade_date": "21-09-2016",
                    "commodity": "CU",
                    "side": "BUY",
                    "qty": 447,
                    "price": 3797.3453,
                    "counterparty": "Ines",
                    "location": "Belva"
                },
                {
                    "trade_id": "5bea75dbd05a58dd76438fe3",
                    "trade_date": "14-11-2014",
                    "commodity": "ZN",
                    "side": "SELL",
                    "qty": 975,
                    "price": 2342.8922,
                    "counterparty": "Kelley",
                    "location": "Waverly"
                },
                {
                    "trade_id": "5bea75db696fd55e0de0c576",
                    "trade_date": "16-05-2015",
                    "commodity": "ZN",
                    "side": "SELL",
                    "qty": 874,
                    "price": 3267.0788,
                    "counterparty": "Virginia",
                    "location": "Stewart"
                },
                {
                    "trade_id": "5bea75db5f4e4036c2226249",
                    "trade_date": "16-06-2014",
                    "commodity": "MG",
                    "side": "BUY",
                    "qty": 393,
                    "price": 1623.8698,
                    "counterparty": "Figueroa",
                    "location": "Welch"
                },
                {
                    "trade_id": "5bea75dbb72aeb2c364afeb6",
                    "trade_date": "17-09-2018",
                    "commodity": "CU",
                    "side": "BUY",
                    "qty": 692,
                    "price": 2782.0003,
                    "counterparty": "Mcknight",
                    "location": "Rockingham"
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
