import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

function ModalButton({ children, onClick }) {
  return (
    <ButtonStyled variant="outlined" onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default ModalButton

// Styles
const ButtonStyled = styled(Button)`
  margin-top: 2rem;
`
