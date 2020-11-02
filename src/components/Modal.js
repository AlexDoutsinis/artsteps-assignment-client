import React from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

function Modal(props) {
  const {
    open,
    handleClose,
    onClick,
    handleInputChange,
    message,
    category,
  } = props

  return (
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
        <Button onClick={onClick} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
