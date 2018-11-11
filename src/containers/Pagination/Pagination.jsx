import React from 'react';
import PaginationComponent from '../../components/Pagination/Pagination.component';

class Pagination extends React.Component {

    render() {
        return (
            <PaginationComponent {...this.props} />
        );
    }
}

export default Pagination;
