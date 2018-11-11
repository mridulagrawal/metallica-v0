import React from 'react';

class TradesFilterBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    getTradeDateField() {
        return <>
            <div className="row">
                <div className="col-md-12">
                    <label>Trade Date</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                        <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                        <input type="date" className="form-control" />
                </div>
            </div>
        </>
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.getTradeDateField()}
                </div>
                <div className="col-md-2">
                    {this.getTradeDateField()}
                </div>
                <div className="col-md-2">
                    {this.getTradeDateField()}
                </div>
                <div className="col-md-2">
                    {this.getTradeDateField()}
                </div>
                <div className="col-md-2">
                    {this.getTradeDateField()}
                </div>
            </div>
        );
    }
}

export default TradesFilterBarComponent;
