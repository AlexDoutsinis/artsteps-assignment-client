import React, { useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'
import Modal from './Modal'
import ModalButton from './ModalButton'
import { useCategoryReducer, actionCreators } from '../reducers/categoryReducer'

const { postAxios } = req()

function CreateCategory({ setReRender }) {
  const { state, dispatch } = useCategoryReducer()
  const { execute, value, error } = useAsync(postCategory)

  const { message, isOpen, category } = state
  const { onSuccess, onFailure, onChange, onClose, onOpen } = actionCreators()

  useEffect(() => {
    if (value && value.status == 201) {
      dispatch(onSuccess('Category just created'))
      return setReRender(state => !state)
    }
    if (error) return dispatch(onFailure('Category already exists'))
  }, [value, error])

  async function postCategory() {
    const res = await postAxios('categories', {
      name: category,
    })
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
        Create category
      </ModalButton>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onClick={execute}
        handleInputChange={handleInputChange}
        message={message}
        category={category}
        title="Create category"
      />
    </>
  )
}
export default CreateCategory
