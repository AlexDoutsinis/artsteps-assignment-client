import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import useAsync from '../hooks/useAsync'
import req from '../utils/req'

const { getAxios } = req()

function CategoryList() {
  const { execute, value: categoryList } = useAsync(getCategoryList)

  useEffect(() => {
    execute()
  }, [])

  async function getCategoryList() {
    const categories = await getAxios('categories')

    return categories
  }

  if (!categoryList) return null

  return (
    <Grid container spacing={1}>
      {categoryList.map(category => (
        <Grid item key={category._id}>
          <Button variant="outlined" color="primary">
            {category.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default CategoryList
