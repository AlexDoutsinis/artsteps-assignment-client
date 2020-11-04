import React from 'react'
import Paging from '@material-ui/lab/Pagination'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PaginationItem from '@material-ui/lab/PaginationItem'

import { useArticleContext } from '../contexts/articleContext'

function Pagination() {
  const {
    totalPages,
    currentPage,
    setPage,
    fetchArticleList,
  } = useArticleContext()

  function handleChange(event, value) {
    setPage(value)
    return fetchArticleList()
  }

  return (
    <PagingStyled
      page={currentPage}
      count={totalPages}
      onChange={handleChange}
      color="primary"
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  )
}

export default Pagination

// Styles
const PagingStyled = styled(Paging)`
  margin-top: 4rem;
  margin-bottom: 1rem;
`
