import React from 'react'
import CategoryList from './components/CategoryList'
import ArticleList from './components/ArticleList'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import CreateArticleBtn from './components/CreateArticleBtn'
import Logo from './components/Logo'
import Search from './components/Search'
import Pagination from './components/Pagination'

function App() {
  return (
    <ContainerStyled maxWidth="md">
      <Grid container spacing={8}>
        <Grid item xs={4}>
          <Grid item xs={8}>
            <Logo />
          </Grid>
          <Grid item xs={8}>
            <CreateArticleBtn />
          </Grid>
          <Grid item xs={6}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <CategoryList />
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <ArticleList />
          <Pagination />
        </Grid>
      </Grid>
    </ContainerStyled>
  )
}

export default App

// Styles
const ContainerStyled = styled(Container)`
  margin-top: 5rem;
`
