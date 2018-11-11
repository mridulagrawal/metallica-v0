import React from 'react';
import classNames from 'classnames';

import './Pagination.scss'

class PaginationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.renderButtons = this.renderButtons.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activePage !== this.props.activePage) {
            this.setState({ ...this.state, activePage: this.props.activePage });
        }
    }

    renderButtons() {
        let pageButtons = [];
        const total_pages = this.props.pages;

        pageButtons.push(
            <button type="button" key='prev'
                className={classNames("btn", this.state.activePage === 1 ? "disabled" : "btn-default")}
                onClick={() => this.props.getActivePage(this.state.activePage - 1)}
            >
                &laquo;
            </button >
        );

        for (let i = 1; i <= total_pages; i++) {
            pageButtons.push(
                <button type="button"
                    className={classNames("btn", this.state.activePage === i ? "btn-primary" : "btn-default")}
                    key={i}
                    onClick={() => {
                        this.props.getActivePage(i)
                    }
                    }
                >
                    {i}
                </button>
            );
        }

        if (total_pages > 1) {
            pageButtons.push(
                <button type="button" key='next'
                    className={classNames("btn", this.state.activePage === total_pages ? "disabled" : "btn-default")}
                    onClick={() => this.props.getActivePage(this.state.activePage + 1)}
                >
                    &raquo;
                </button>
            );
        }

        return pageButtons;
    }

    render() {
        const { children, ...otherProps } = this.props;
        return (
            <>
                {children}
                <div className="pagination-list--center">
                    <div className="btn-group">
                        {this.props.pages && this.renderButtons()}
                    </div>
                </div>
            </>
        );
    }
}

export default PaginationComponent;
