import { combineReducers } from 'redux';

import trades from './containers/TradeGrid/reducer';

import {
    SHOW_LOADER,
    STOP_LOADER
} from './action'

const initialState = {
    isFetching: false
}

const appState = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                isFetching: true
            }
        case STOP_LOADER:
            return {
                isFetching: false,
            }
        default:
            return state
    }
};

const rootReducer = combineReducers({
    appState,
    trades
});

export default rootReducer;
