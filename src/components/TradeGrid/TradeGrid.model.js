export class TradeGridModel {

    constructor(data) {

        this.id = data.trade_id;
        this.rowData = {
            trade_date: data.trade_date,
            commodity: data.commodity,
            side: data.side,
            qty: data.qty,
            price: `$ ${data.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`,
            counterparty: data.counterparty,
            location: data.location,
            delete_icon: {
                icon: `fa fa-trash`,
                click: function onDelete() {
                    this.props.onDelete(data.trade_id);
                }
            }
        };
    }
}