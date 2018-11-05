import React from 'react';
import GridComponent from '../../components/Grid/Grid.component';

class Grid extends React.Component {

  render() {
    return (
      <GridComponent gridData={this.props.gridData} />
    );
  }
}

export default Grid;
