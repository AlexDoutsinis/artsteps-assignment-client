import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

function Header() {
  return (
    <LogoStyled variant="h4" component="h1">
      Artsteps
    </LogoStyled>
  )
}

export default Header

// Styles
const LogoStyled = styled(Typography)`
  margin-bottom: 2rem;
`
