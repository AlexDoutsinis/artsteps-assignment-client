import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

function Category({ categoryName }) {
  return (
    <Grid item>
      <Button variant="outlined" color="primary">
        {categoryName}
      </Button>
    </Grid>
  )
}

export default Category
