import React from 'react';

import TradesFilterBarComponent from '../../components/TradesFilterBar/TradesFilterBar.component';

export default class TradesFilterBar extends React.Component {

    render() {
        return (
            <TradesFilterBarComponent />
        );
    }
}

// export const mapStateToProps = (state) => {
//     const { isFetching, originalData } = state.trades;
//     return {
//         isFetching,
//         originalData
//     }
// };

// export const mapDispatchToProps = dispatch => {
//     return {
//         fetchTrades: () => {
//             dispatch(fetchTrades());
//         }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TradeGrid);
