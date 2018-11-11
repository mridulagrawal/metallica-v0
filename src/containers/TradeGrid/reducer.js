import {
    FETCH_TRADES_SUCCESS,
    SORT_TRADES
} from './actions'

const DEFAULT = 'DEFAULT';
const ASC = 'asc';
const DESC = 'desc';

const initialState = {
    draftData: null,
    sortedData: null,
    sortBy: null,
    sortOrder: DEFAULT
}

const trades = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case FETCH_TRADES_SUCCESS:
            return {
                ...state,
                draftData: action.payload,
                sortedData: action.payload
            }
        case SORT_TRADES:
            const sortBy = action.payload;
            console.log(state)
            if (state.sortBy === sortBy && state.sortOrder === ASC) {
                //sortBy -> sortBy
                // sortOrder -> DESC
                return {
                    ...state,
                    sortBy: sortBy,
                    sortOrder: DESC
                }
            } else if (state.sortBy === sortBy && state.sortOrder === DESC) {
                // sortBy -> null
                // sortOrder -> default
                return {
                    ...state,
                    sortBy: null,
                    sortOrder: DEFAULT,
                    sortedData: state.draftData
                }
            } else {
                //sortBy -> sortBy
                //sortOrder -> ASC
                return {
                    ...state,
                    sortBy: sortBy,
                    sortOrder: ASC
                }
            }

        default:
            return state
    }
}

export default trades;