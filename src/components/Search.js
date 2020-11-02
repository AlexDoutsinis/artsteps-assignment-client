import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

function Search() {
  return (
    <>
      <TextFieldStyled
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}

export default Search

// Styles
const TextFieldStyled = styled(TextField)`
  margin-bottom: 2.5rem;
`
