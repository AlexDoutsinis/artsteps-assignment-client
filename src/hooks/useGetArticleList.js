import { useState, useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { getAxios } = req()

export function useGetArticleList() {
  const [articleList, setArticleList] = useState([])
  const { execute, pending, value } = useAsync(getArticleList)

  useEffect(() => {
    if (value) return setArticleList(value.articles)
    execute()
  }, [value])

  async function getArticleList() {
    return await getAxios('articles')
  }
  return {
    articleList,
    setArticleList,
    pending,
  }
}
