import React from 'react';

import './Grid.scss'

class GridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getColumnData = this.getColumnData.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
    }

    getColumnData() {
        return this.props.gridData.headers.map((col) => {
            return <th key={`${col.heading}-header`}>
                {col.heading}
                {col.sort && <span className="fas fa-sort"
                    onClick={() => this.props.handleSort(col.key)}>
                </span>}
            </th>
        });
    }

    getRowsData() {
        return this.props.gridData.rowConfig.map((data) => {
            return <tr key={data.id} onClick={() => this.props.handleCellClick(data.id)}>
                {
                    Object.values(data.rowData).map((cell) => {
                        if (cell.icon) {
                            return <td key={`${data.id}-${cell.icon}`}>
                                <button className="btn btn-primary" onClick={cell.click.bind(this)}>
                                    <i className={cell.icon}></i>
                                </button>
                            </td>
                        }
                        return <td key={`${data.id}-${cell}`}>{cell}</td>
                    })
                }
            </tr>
        });
    }

    render() {

        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            {this.getColumnData()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GridComponent;
