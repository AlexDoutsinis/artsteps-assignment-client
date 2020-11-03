import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import useAsync from '../hooks/useAsync'
import req from '../utils/req'
import Article from './Article'

const { getAxios } = req()

function ArticleList({ reRender }) {
  const { execute, value } = useAsync(getArticleList)

  useEffect(() => {
    execute()
  }, [reRender])

  async function getArticleList() {
    const articles = await getAxios('articles', { excludeContent: true })

    return articles
  }

  if (!value) return null

  return (
    <Grid container spacing={3} direction="row">
      {value.articles.map(article => (
        <Article key={article._id} article={article} />
      ))}
    </Grid>
  )
}

export default ArticleList
