import React from 'react';
import './TradeForm.scss'

import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class TradeFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tradeDate: new Date(),
            price: 5530.05
        };
        this.getTradeDateField = this.getTradeDateField.bind(this);
        this.onBlurMaskPriceField = this.onBlurMaskPriceField.bind(this);
        this.onFocusUnMaskPriceField = this.onFocusUnMaskPriceField.bind(this);
        this.handlePriceField = this.handlePriceField.bind(this);
        this.formatPrice = this.formatPrice.bind(this);

        this.handleChange = this.handleChange.bind(this);
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
                <DatePicker
                    selected={this.state.tradeDate}
                    onChange={this.handleChange}
                />
                {/* <input type="date" className="form-control" id="tradeDate" placeholder="Trade Date" /> */}
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

    handleChange(date) {
        this.setState({
            tradeDate: date
        });
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
                                    <input checked type="radio" name="side" id="inlineRadio2" value="SELL" /> Sell
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
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="control-label">Quantity</label>
                        </div>
                        <div className="col-md-5 col-xs-8">
                            <input
                                type="text" className="form-control" id="price" placeholder="Quantity (MT)"
                                value={this.formatPrice()} />
                        </div>
                        <div className="col-md-3 col-xs-4">
                            <label className="control-label">MT</label>
                        </div>
                    </div>
                    {this.getDropdown('Location', 'location')}
                    <div className="form-group">
                        <div className="col-sm-12">
                            <span className="pull-right">
                                <button type="submit" className="btn btn-success">Save</button>
                                <button type="submit" className="btn btn-danger">Cancel</button>
                            </span>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default TradeFormComponent;
