import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import Article from './Article'
import { useArticleContext } from '../contexts/articleContext'

function ArticleList({ setReRender }) {
  const { articleList, setArticleList } = useArticleContext()

  return (
    <Grid container spacing={3} direction="row">
      {articleList.map(article => (
        <Article
          key={article._id}
          article={article}
          setReRender={setReRender}
        />
      ))}
    </Grid>
  )
}

export default ArticleList
