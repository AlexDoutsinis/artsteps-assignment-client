import { useState, useEffect } from 'react'
import useAsync from './useAsync'
import req from '../utils/req'

const { getAxios } = req()

export function useGetCategoryList() {
  const [categoryList, setCategoryList] = useState([])
  const { execute, value } = useAsync(getCategoryList)

  useEffect(() => {
    if (value) return setCategoryList(value)
    execute()
  }, [value])

  async function getCategoryList() {
    return await getAxios('categories')
  }

  return { categoryList, setCategoryList }
}
