import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'
import Modal from './Modal'
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

  function handleClickOpen() {
    dispatch(onOpen())
  }

  function handleClose() {
    dispatch(onClose())
  }

  function handleInputChange(e) {
    dispatch(onChange(e.target.value))
  }

  async function postCategory() {
    const res = await postAxios('/categories', {
      name: category,
    })
    return res
  }

  return (
    <>
      <ButtonStyled variant="outlined" onClick={handleClickOpen}>
        Create category
      </ButtonStyled>

      <Modal
        open={isOpen}
        handleClose={handleClose}
        onClick={execute}
        handleInputChange={handleInputChange}
        message={message}
        category={category}
      />
    </>
  )
}
export default CreateCategory

// Styles
const ButtonStyled = styled(Button)`
  margin-top: 2rem;
`
