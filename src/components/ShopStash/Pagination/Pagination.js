import classNames from 'classnames';

import { productTypes } from 'constants/shop';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import ReactPaginate from 'react-paginate';
import styles from './styles';

@injectSheet( styles )
export default class Collection extends PureComponent {

  static propTypes = {
    classes: PropTypes.object,
    pageCount: PropTypes.number.isRequired,
    marginPages: PropTypes.number.isRequired,
    pageRange: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
  };

  render() {
    const {
      classes,
      pageCount,
      marginPages,
      pageRange,
      handlePageClick,
    } = this.props;

    return (
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<a href="">...</a>}
        pageCount={pageCount}
        marginPagesDisplayed={marginPages}
        pageRangeDisplayed={pageRange}
        onPageChange={handlePageClick}
        containerClassName={classNames( classes.paginationContainer, classes.paginationFont )}
        pageClassName={classes.pageName}
        activeClassName={classes.activeClassName}
        previousClassName={classes.nextPreviousButton}
        nextClassName={classes.nextPreviousButton}
        breakClassName={classes.break}/>
    );
  }
}
