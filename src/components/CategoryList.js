import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import useAsync from '../hooks/useAsync'
import req from '../utils/req'
import Category from './Category'

const { getAxios } = req()

function CategoryList({ reRender }) {
  const { execute, value: categoryList } = useAsync(getCategoryList)

  useEffect(() => {
    execute()
  }, [reRender])

  async function getCategoryList() {
    const categories = await getAxios('categories')

    return categories
  }

  if (!categoryList) return null

  return (
    <Grid container spacing={1}>
      {categoryList.map(category => (
        <Category key={category._id} categoryName={category.name} />
      ))}
    </Grid>
  )
}

export default CategoryList
