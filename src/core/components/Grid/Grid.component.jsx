import React from 'react';

import './Grid.scss'

class GridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getColumnData = this.getColumnData.bind(this);
    }

    getColumnData = () => {
        return this.props.gridData.headers.map((col) => {
            return <th key={`${col}-header`}>{col}<span className="fas fa-sort"></span> </th>
        });
    }

    getRowsData = () => {
        return this.props.gridData.rowConfig.map((data) => {
            return <tr key={data.id}>
                {
                    Object.values(data.rowData).map((cell) => {
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
