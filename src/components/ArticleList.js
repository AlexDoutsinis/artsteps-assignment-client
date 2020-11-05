import React from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

import Article from './Article'
import { useArticleContext } from '../contexts/articleContext'
import AlertMessage from './AlertMessage'
import useDimensions from '../hooks/useDimensions'

function ArticleList() {
  const {
    articleList,
    pending,
    alertMessage,
    setAlertMessage,
    isAlertOpen,
    setIsAlertOpen,
  } = useArticleContext()
  const { targetRef, height } = useDimensions(pending)

  console.log(`height: ${height}`)

  function showDeleteMessage(message) {
    setIsAlertOpen(true)
    setAlertMessage(message)
  }

  if (pending || articleList.length < 1)
    return (
      <LoaderWrapper height={height}>
        <CircularProgress color="primary" />
      </LoaderWrapper>
    )

  return (
    <>
      <AlertMessage
        open={isAlertOpen}
        setOpen={setIsAlertOpen}
        message={alertMessage}
      />
      <Grid ref={targetRef} container spacing={3} direction="row">
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

// Styles
const LoaderWrapper = styled.div`
  ${props => props.height && `height: ${props.height}px;`}
  display: flex;
  justify-content: center;
  align-items: center;
`
