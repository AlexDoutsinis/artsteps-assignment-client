import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Article from './Article'
import { useArticleContext } from '../contexts/articleContext'
import AlertMessage from './AlertMessage'

function ArticleList() {
  const [deleteMessage, setDeleteMessage] = useState('')
  const [open, setOpen] = useState(false)
  const { articleList } = useArticleContext()

  function showDeleteMessage(message) {
    setOpen(true)
    setDeleteMessage(message)
  }

  return (
    <>
      <AlertMessage
        open={open}
        setOpen={setOpen}
        deleteMessage={deleteMessage}
      />
      <Grid container spacing={3} direction="row">
        {articleList.map(article => (
          <Article
            key={article._id}
            article={article}
            showDeleteMessage={showDeleteMessage}
          />
        ))}
      </Grid>
    </>
  )
}

export default ArticleList
