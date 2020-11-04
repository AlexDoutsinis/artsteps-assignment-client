import React from 'react'
import Paging from '@material-ui/lab/Pagination'
import styled from 'styled-components'
import { useArticleContext } from '../contexts/articleContext'

function Pagination() {
  const { articleList, pending } = useArticleContext()

  console.log(`pending: ${pending}`)
  if (pending) return null

  return <PagingStyled count={10} page={1} color="primary" />
}

export default Pagination

// Styles
const PagingStyled = styled(Paging)`
  margin-top: 4rem;
  margin-bottom: 1rem;
`
