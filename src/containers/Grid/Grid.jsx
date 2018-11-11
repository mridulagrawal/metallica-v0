import React from 'react';
import GridComponent from '../../components/Grid/Grid.component';

class Grid extends React.Component {

  render() {
    return (
      <GridComponent
        gridData={this.props.gridData}
        handleCellClick={this.props.handleCellClick}
        handleSort={this.props.handleSort}
        {...this.props}
      />
    );
  }
}

export default Grid;
