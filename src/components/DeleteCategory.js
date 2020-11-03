import React, { useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'
import Modal from './Modal'
import ModalButton from './ModalButton'
import { useCategoryReducer, actionCreators } from '../reducers/categoryReducer'

const { deleteAxios } = req()

function DeleteCategory({ setReRender }) {
  const { state, dispatch } = useCategoryReducer()
  const { execute, value, error } = useAsync(deleteCategory)

  const { message, isOpen, category } = state
  const { onSuccess, onFailure, onChange, onClose, onOpen } = actionCreators()

  useEffect(() => {
    if (value && value.status == 204) {
      dispatch(onSuccess('Category just deleted'))
      return setReRender(state => !state)
    }
    if (error) return dispatch(onFailure('Category not found'))
  }, [value, error])

  async function deleteCategory() {
    const res = await deleteAxios(`categories/${category}`)
    return res
  }

  function handleClickOpen() {
    dispatch(onOpen())
  }

  function handleClose() {
    dispatch(onClose())
  }

  function handleInputChange(e) {
    dispatch(onChange(e.target.value))
  }

  return (
    <>
      <ModalButton variant="outlined" onClick={handleClickOpen}>
        Delete category
      </ModalButton>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onClick={execute}
        handleInputChange={handleInputChange}
        message={message}
        category={category}
        title="Delete category"
      />
    </>
  )
}

export default DeleteCategory
