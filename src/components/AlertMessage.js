import React from 'react'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'

function AlertMessage({ open, setOpen, message }) {
  return (
    <Collapse in={open}>
      <AlertStyled
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <p>{message}</p>
      </AlertStyled>
    </Collapse>
  )
}

export default AlertMessage

// Styles
const AlertStyled = styled(Alert)`
  margin-bottom: 1rem;
`
