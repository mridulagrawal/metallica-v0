import React from 'react';
import './TradeForm.scss'

class TradeFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 5530.05
        };
        this.getTradeDateField = this.getTradeDateField.bind(this);
        this.onBlurPriceField = this.onBlurPriceField.bind(this);
        this.formatPrice = this.formatPrice.bind(this);
    }

    getTradeDateField() {
        return <div className="form-group row">
            <label className="col-md-4 control-label">Trade Date</label>
            <div className="col-md-5">
                <input type="date" className="form-control" id="tradeDate" placeholder="Trade Date" />
            </div>
        </div>
    }

    getDropdown(label, id) {
        return <div className="form-group">
            <label className="col-md-4 control-label">{label}</label>
            <div className="col-md-5">
                <select className="form-control" id={id}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </div>
    }

    onBlurPriceField() {
        this.setState({ price: '$123' });
    }

    formatPrice() {
        return this.state.price + 1
    }

    render() {
        return (
            <>
                <form className="form-horizontal trade-form">
                    {this.getTradeDateField()}
                    {this.getDropdown('Commodity', 'commodity')}
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
                    {this.getDropdown('Counterparty', 'counterparty')}
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Price</label>
                        </div>
                        <div className="col-md-5 col-xs-8">
                            <input onBlur={this.onBlurPriceField}
                                type="text" className="form-control" id="price" placeholder="Price (USD)"
                                value={this.formatPrice()} />
                        </div>
                        <div className="col-md-3 col-xs-4">
                            <label className="control-label">USD</label>
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
