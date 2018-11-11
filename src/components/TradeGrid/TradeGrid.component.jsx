import React from 'react';

import Grid from '../../containers/Grid/Grid'
import { TradeGridModel } from './TradeGrid.model';
import Pagination from '../../containers/Pagination/Pagination';

class TradeGridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            gridData: null
        };
        this.getTradeGridData = this.getTradeGridData.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
        this.getPaginationProps = this.getPaginationProps.bind(this);
        this.getActivePage = this.getActivePage.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.gridData !== prevProps.gridData) {
            this.setState({ ...this.state, gridData: this.props.gridData, activePage: 1 })
        }
    }

    getTradeGridData = () => {

        const slicedData = this.props.gridData && this.props.gridData.rowData.slice((this.state.activePage - 1) * 10, this.state.activePage * 10);

        const rowConfig = slicedData.map(data => {
            return new TradeGridModel(data);
        })

        return {
            headers: this.props.gridData.coloumnHeaders,
            rowConfig
        }

    }

    handleSort(key) {
        this.props.sortTradesBy(key);
    }

    handleCellClick(trade_id) {
    }

    getPaginationProps() {
        const recordsPerPage = 10;
        const pages = this.props.gridData && Math.ceil(this.props.gridData.rowData.length / recordsPerPage);
        return pages;
    }

    getActivePage(page_id) {
        this.setState({ ...this.state, activePage: page_id });
    }

    handleIconClick(trade_id) {
        console.log(trade_id);
    }

    onDelete(trade_id) {
        console.log(trade_id);
    }

    render() {
        const tradeGridData = this.props.gridData && this.getTradeGridData();
        const paginationProps = this.getPaginationProps();
        return (
            <>
                <Pagination
                    pages={paginationProps}
                    getActivePage={this.getActivePage}
                    activePage={this.state.activePage}
                >
                    {this.props.gridData && <Grid gridData={tradeGridData}
                        handleCellClick={this.handleCellClick}
                        onDelete={this.onDelete}
                        handleSort={this.handleSort} />}
                </Pagination>
            </>
        );
    }
}

export default TradeGridComponent;
