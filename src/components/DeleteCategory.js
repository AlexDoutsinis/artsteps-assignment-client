import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'

import Modal from './Modal'
import ModalButton from './ModalButton'
import { useDeleteCategory } from '../hooks/useDeleteCategory'
import { useCategoryContext } from '../contexts/categoryContext'

function DeleteCategory() {
  const [categoryName, setCategoryName] = useState('')
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const { execute, value, error } = useDeleteCategory(categoryName)
  const { categoryList, setCategoryList } = useCategoryContext()

  useEffect(() => {
    if (value && value.status == 204) {
      const newCategoryList = [...categoryList]
      const filteredList = newCategoryList.filter(name => name !== categoryName)
      setCategoryList(filteredList)
      return setMessage('Category just deleted')
    }
    if (error) return setMessage('Category not found')
  }, [value, error])

  function onExecute() {
    if (!categoryName) return setMessage('Name is required')
    execute()
  }

  function handleClickOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
    setMessage('')
    setCategoryName('')
  }

  function handleInputChange(e) {
    setCategoryName(e.target.value)
  }

  return (
    <>
      <ModalButton variant="outlined" onClick={handleClickOpen}>
        Delete category
      </ModalButton>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onExecute={onExecute}
        message={message}
        title="Delete category"
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Category Name"
          type="text"
          fullWidth
          value={categoryName}
          onChange={handleInputChange}
        />
      </Modal>
    </>
  )
}

export default DeleteCategory
