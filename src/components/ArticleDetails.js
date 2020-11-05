import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { getAxios } = req()

function ArticleDetails() {
  const { slug } = useParams()
  const { execute, value: article } = useAsync(getArticle)

  useEffect(() => {
    execute()
  }, [])

  async function getArticle() {
    return await getAxios(`articles/${slug}`)
  }

  if (!article) return null

  return (
    <Grid container spacing={4} direction="row">
      <Grid item xs={12}>
        <Typography variant="h4">{article.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <p>Published {new Date(article.createdAt).toDateString()}</p>
      </Grid>
      <Grid item xs={12}>
        <ReactMarkdown className="markdown">{article.content}</ReactMarkdown>
      </Grid>
    </Grid>
  )
}

export default ArticleDetails
