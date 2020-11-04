import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { useCreateArticle } from '../hooks/useCreateArticle'
import { useArticleContext } from '../contexts/articleContext'
import Modal from './Modal'
import CategorySelect from './CategorySelect'

function CreateArticle() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const { execute, value, error } = useCreateArticle({
    title,
    content,
    description,
    categoryId,
  })
  const {
    articleList,
    setArticleList,
    setIsAlertOpen,
    setAlertMessage,
  } = useArticleContext()

  useEffect(() => {
    if (value && value.status == 201) {
      const newArticleList = [...articleList]
      newArticleList.unshift(value.data)
      setArticleList(newArticleList)
      handleClose()
      return successAlert()
    }
    if (error) return setMessage('Something went wrong')
  }, [value, error])

  function successAlert() {
    setIsAlertOpen(true)
    setAlertMessage('Creation was successful')
  }

  function onExecute() {
    if (!title) return setMessage('Title is required')
    execute()
  }

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
    setMessage('')
    setTitle('')
    setContent('')
    setDescription('')
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleContentChange(e) {
    setContent(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  return (
    <>
      <ButtonStyled variant="outlined" onClick={handleOpen}>
        Create article
      </ButtonStyled>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onExecute={onExecute}
        message={message}
        title="Create Article"
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextAreaStyled
          autoFocus
          margin="dense"
          id="name"
          label="Content"
          type="text"
          fullWidth
          value={content}
          onChange={handleContentChange}
          multiline
        />
        <CategorySelect categoryId={categoryId} setCategoryId={setCategoryId} />
      </Modal>
    </>
  )
}
export default CreateArticle

// Styles
const ButtonStyled = styled(Button)`
  margin-bottom: 2rem;
`

const TextAreaStyled = styled(TextField)`
  textarea {
    min-height: 200px;
  }
`
