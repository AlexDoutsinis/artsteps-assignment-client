import React, { useState } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { useCategoryContext } from '../contexts/categoryContext'

function CategorySelect({ categoryId, setCategoryId }) {
  const { categoryList } = useCategoryContext()

  function handleChange(e) {
    setCategoryId(e.target.value)
  }

  return (
    <Select value={categoryId} onChange={handleChange} color="primary">
      {categoryList.map(category => (
        <MenuItem key={category._id} value={category._id}>
          {category.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CategorySelect
