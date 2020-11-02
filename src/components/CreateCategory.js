import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { postAxios } = req()

function CreateCategory({ setNewRecord }) {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const { execute, value, error } = useAsync(postCategory)

  useEffect(() => {
    if (value) {
      setMessage('Category just created')
      return setNewRecord(record => !record)
    }
    if (error) return setMessage('Category already exists')
  }, [value, error])

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
    setMessage('')
    setCategory('')
  }

  function handleInputChange(e) {
    setCategory(e.target.value)
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Create Category</DialogTitle>
        <DialogContent>
          {message}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="email"
            fullWidth
            value={category}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={execute} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default CreateCategory

// Styles
const ButtonStyled = styled(Button)`
  margin-top: 2rem;
`
