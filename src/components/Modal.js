import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function Modal(props) {
  const { open, handleClose, onExecute, message, title, children: body } = props

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="primary">
          {message}
        </Typography>
        {body}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onExecute} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
