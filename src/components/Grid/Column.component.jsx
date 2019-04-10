import React from 'react';

class ColumnComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getColumnData = this.getColumnData.bind(this);
    }

    getColumnData() {
        return this.props.columnConfig.map((col) =>
            <th key={`${col.heading}-header`}>
                {col.heading}
                {col.sort && <span className="fas fa-sort"
                    onClick={() => this.props.handleSort(col.key)}>
                </span>}
            </th>
        );
    }

    render() {
        return <>
            {this.getColumnData()}
        </>
    }
}

export default ColumnComponent;
