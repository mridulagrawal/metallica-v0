import React from 'react';
import './TradeForm.scss'

class TradeFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 5530.05
        };
        this.getTradeDateField = this.getTradeDateField.bind(this);
        this.onBlurMaskPriceField = this.onBlurMaskPriceField.bind(this);
        this.onFocusUnMaskPriceField = this.onFocusUnMaskPriceField.bind(this);
        this.handlePriceField = this.handlePriceField.bind(this);
        this.formatPrice = this.formatPrice.bind(this);
    }

    componentDidMount() {
        const value = 5530.05;
        const masked = `$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

        this.setState({ price: masked });
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

    onBlurMaskPriceField(e) {
        const value = +e.target.value;
        const masked = `$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
        this.setState({ price: masked });
    }

    onFocusUnMaskPriceField(e) {
        const value = e.target.value;
        const unMasked = parseFloat(value.replace(/[$,]/gi, ''));
        this.setState({ price: unMasked });
    }

    handlePriceField(e) {
        const value = e.target.value;
        if (!isNaN(value)) {
            this.setState({ price: value });
        }
    }

    formatPrice() {
        return this.state.price
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
                            <input
                                onBlur={this.onBlurMaskPriceField}
                                onFocus={this.onFocusUnMaskPriceField}
                                onChange={this.handlePriceField}
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
