import React from 'react';
import { connect } from 'react-redux';

import { fetchTrades, sortTradesBy } from './actions'
import TradeGridComponent from '../../components/TradeGrid/TradeGrid.component';

class TradeGrid extends React.Component {

  componentDidMount() {
    this.props.fetchTrades();
  }

  render() {
    const gridData = this.props.sortedData;
    return (
      <TradeGridComponent gridData={gridData} sortTradesBy={this.props.sortTradesBy} />
    );
  }
}

export const mapStateToProps = (state) => {
  const { isFetching, sortedData } = state.trades;
  return {
    isFetching,
    sortedData
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchTrades: () => {
      dispatch(fetchTrades());
    },
    sortTradesBy: (key) => {
      dispatch(sortTradesBy(key));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeGrid);
