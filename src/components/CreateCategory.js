import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'

import Modal from './Modal'
import ModalButton from './ModalButton'
import { useCreateCategory } from '../hooks/useCreateCategory'
import { useCategoryContext } from '../contexts/categoryContext'

function CreateCategory() {
  const [categoryName, setCategoryName] = useState('')
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const { execute, value, error } = useCreateCategory(categoryName)
  const { categoryList, setCategoryList } = useCategoryContext()

  useEffect(() => {
    if (value && value.status == 201) {
      const newCategoryList = [...categoryList]
      newCategoryList.push(value.data)
      setCategoryList(newCategoryList)
      return setMessage('Category just created')
    }
    if (error) return setMessage('Category already exists')
  }, [value, error])

  function onExecute() {
    if (!categoryName) return setMessage('Name is required')
    execute()
  }

  function handleOpen() {
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
      <ModalButton variant="outlined" onClick={handleOpen}>
        Create category
      </ModalButton>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onExecute={onExecute}
        message={message}
        title="Create category"
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
export default CreateCategory
