import React from 'react'
import Grid from '@material-ui/core/Grid'

import Article from './Article'
import { useArticleContext } from '../contexts/articleContext'
import AlertMessage from './AlertMessage'

function ArticleList() {
  const {
    articleList,
    alertMessage,
    setAlertMessage,
    isAlertOpen,
    setIsAlertOpen,
  } = useArticleContext()

  function showDeleteMessage(message) {
    setIsAlertOpen(true)
    setAlertMessage(message)
  }

  return (
    <>
      <AlertMessage
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
        message={alertMessage}
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
