import React, { useState } from 'react'
import CategoryList from './components/CategoryList'
import ArticleList from './components/ArticleList'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { Switch, Route } from 'react-router-dom'

import CreateArticle from './components/CreateArticle'
import Logo from './components/Logo'
import Search from './components/Search'
import Pagination from './components/Pagination'
import CreateCategory from './components/CreateCategory'
import DeleteCategory from './components/DeleteCategory'
import ArticleDetails from './components/ArticleDetails'
import { CategoryContextProvider } from './contexts/categoryContext'
import { ArticleContextProvider } from './contexts/articleContext'

function App() {
  const [reRender, setReRender] = useState(false)

  return (
    <ContainerStyled maxWidth="md">
      <Grid container spacing={8}>
        <Hidden xsDown>
          <Grid item sm={4}>
            <Grid item xs={8}>
              <Logo />
            </Grid>
            <Grid item xs={8}>
              <CreateArticle />
            </Grid>
            <Grid item xs={8}>
              <Search />
            </Grid>
            <CategoryContextProvider>
              <Grid item xs={12}>
                <CategoryList />
              </Grid>
              <Grid item xs={8}>
                <CreateCategory />
              </Grid>
              <Grid item xs={8}>
                <DeleteCategory />
              </Grid>
            </CategoryContextProvider>
          </Grid>
        </Hidden>

        <ArticleContextProvider>
          <Grid item xs={12} sm={8}>
            <Switch>
              <Route exact path="/">
                <Grid container direction="column" alignItems="center">
                  <ArticleList setReRender={setReRender} reRender={reRender} />
                  <Pagination />
                </Grid>
              </Route>
              <Route path="/articles/:slug">
                <ArticleDetails />
              </Route>
            </Switch>
          </Grid>
        </ArticleContextProvider>
      </Grid>
    </ContainerStyled>
  )
}

export default App

// Styles
const ContainerStyled = styled(Container)`
  margin-top: 7rem;
`
