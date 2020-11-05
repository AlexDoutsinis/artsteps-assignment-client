import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useArticleContext } from '../contexts/articleContext'

function Category({ category }) {
  const { filterByCategory } = useArticleContext()

  return (
    <Grid item>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => filterByCategory(category._id)}
      >
        {category.name}
      </Button>
    </Grid>
  )
}

export default Category
