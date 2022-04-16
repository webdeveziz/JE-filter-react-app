import React from 'react'
// import _ from 'lodash' // это потом
import _createArrayByEziz_ from './../utils/range' // а пока свой метод
import { PropTypes } from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null

  const pages = _createArrayByEziz_(1, pageCount + 1)

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={'page-item' + (page === currentPage ? ' active' : '')}
            key={'page__' + page}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
