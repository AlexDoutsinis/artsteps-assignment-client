import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'

import Modal from './Modal'
import { useArticleContext } from '../contexts/articleContext'
import { usePatchArticle } from '../hooks/usePatchArticle'

function Article({ article }) {
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState('')

  const { execute, value, error } = usePatchArticle({
    slug: article.slug,
    content,
  })
  const { articleList, setArticleList } = useArticleContext()

  useEffect(() => {
    if (value && value.status == 200) {
      const newArticleList = [...articleList]
      const index = newArticleList.findIndex(item => item._id === article._id)
      newArticleList[index].content = content
      setArticleList(newArticleList)
      return setMessage('Content just updated')
    }
    if (error) return setMessage('Something went wrong')
  }, [value, error])

  function onExecute() {
    if (!content) return setMessage('Content is required')
    execute()
  }

  function handleClickEdit() {
    setIsOpen(true)
    setContent(article.content)
  }

  function handleClose() {
    setIsOpen(false)
    setMessage('')
  }

  function handleInputChange(e) {
    setContent(e.target.value)
  }

  return (
    <>
      <GridStyled item xs={8} md={9}>
        <Typography variant="h6">
          <TextStyled>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </TextStyled>
        </Typography>
        <DescStyled>{article.description}</DescStyled>
      </GridStyled>

      <GridStyled item xs={4} md={3}>
        <Grid container direction="column" spacing={1} alignItems="flex-end">
          <Grid item xs={12}>
            {new Date(article.createdAt).toDateString()}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="primary">
              {article.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextStyled onClick={handleClickEdit}>Edit</TextStyled>
          </Grid>
          <Grid item xs={12}>
            <TextStyled>Delete</TextStyled>
          </Grid>
        </Grid>
      </GridStyled>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onExecute={onExecute}
        message={message}
        title={article.title}
      >
        <TextAreaStyled
          autoFocus
          margin="dense"
          id="name"
          label="Edit content"
          type="text"
          fullWidth
          value={content}
          onChange={handleInputChange}
          multiline
        />
      </Modal>
    </>
  )
}

export default Article

// Styles
const GridStyled = styled(Grid)`
  ${props =>
    props.btop
      ? `border-top: solid white 1px; margin-top: 10px;`
      : `border-bottom: solid white 1px;`};
`

const TextStyled = styled.span`
  &:hover {
    cursor: pointer;
  }

  a {
    color: inherit;
  }
`

const DescStyled = styled.p`
  margin-top: 8px;
`

const TextAreaStyled = styled(TextField)`
  textarea {
    min-height: 200px;
  }
`
