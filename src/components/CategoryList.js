import React from 'react'
import Grid from '@material-ui/core/Grid'

import Category from './Category'
import { useCategoryContext } from '../contexts/categoryContext'

function CategoryList() {
  const { categoryList } = useCategoryContext()

  return (
    <Grid container spacing={1}>
      {categoryList.map(category => (
        <Category key={category._id} category={category} />
      ))}
    </Grid>
  )
}

export default CategoryList
