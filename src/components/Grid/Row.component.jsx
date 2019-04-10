import React from 'react';

class RowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getRowsData = this.getRowsData.bind(this);
    }

    getRowsData() {
        return this.props.rowConfig.map((data) =>
            <tr key={data.id} onClick={() => this.props.handleCellClick(data.id)}>
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
            </tr>);
    }

    render() {
        return <>
            {this.getRowsData()}
        </>
    }
}

export default RowComponent;
