import React from 'react';

import RowComponent from './Row.component';
import ColumnComponent from './Column.component';
import './Grid.scss'

class GridComponent extends React.Component {

    render() {

        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <ColumnComponent
                                columnConfig={this.props.gridData.headers}
                                handleSort={this.props.handleSort}
                            />
                        </tr>
                    </thead>
                    <tbody>
                        <RowComponent
                            rowConfig={this.props.gridData.rowConfig}
                            handleCellClick={this.props.handleCellClick}
                        />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GridComponent;
