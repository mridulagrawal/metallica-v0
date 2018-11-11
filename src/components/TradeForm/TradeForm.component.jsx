import React from 'react';
import './TradeForm.scss'

class TradeFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            gridData: null
        };
    }

    render() {
        return (
            <>
                <form className="form-horizontal trade-form">
                    <div className="form-group">
                        <label className="col-md-4 control-label">Trade Date</label>
                        <div className="col-md-5">
                            <input type="date" className="form-control" id="tradeDate" placeholder="Trade Date" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Commodity</label>
                        <div className="col-md-5">
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Side</label>
                        <div className="col-md-5">
                            <div className="radio">
                                <label className="radio-inline">
                                    <input type="radio" name="side" id="inlineRadio1" value="BUY" /> Buy
                                        </label>
                                <label className="radio-inline">
                                    <input type="radio" name="side" id="inlineRadio2" value="SELL" /> Sell
                                        </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">CounterParty</label>
                        <div className="col-md-5">
                            <select className="form-control">
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Price</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="tradeDate" placeholder="Trade Date" />
                        </div>
                        <div className="col-md-1">
                            <span>USD</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">CounterParty</label>
                        <div className="col-md-5">
                            <select className="form-control">
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Sign in</button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default TradeFormComponent;
