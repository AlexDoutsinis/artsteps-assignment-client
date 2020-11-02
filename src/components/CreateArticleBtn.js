import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

function CreateArticleBtn() {
  return (
    <>
      <ButtonStyled variant="outlined">Create article</ButtonStyled>
    </>
  )
}
export default CreateArticleBtn

// Styles
const ButtonStyled = styled(Button)`
  margin-bottom: 2rem;
`
