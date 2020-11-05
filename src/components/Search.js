import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useArticleContext } from '../contexts/articleContext'

function Search() {
  const { searchTerm, filterByText } = useArticleContext()

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
        value={searchTerm}
        onChange={e => filterByText(e.target.value)}
      />
    </>
  )
}

export default Search

// Styles
const TextFieldStyled = styled(TextField)`
  margin-bottom: 2.5rem;
`
