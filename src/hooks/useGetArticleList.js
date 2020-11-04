import { useState, useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { getAxios } = req()

export function useGetArticleList() {
  const [articleList, setArticleList] = useState([])
  const [page, setPage] = useState(1)
  const { execute, pending, value } = useAsync(getArticleList)

  useEffect(() => {
    if (value) return setArticleList(value)
    execute()
  }, [value, page])

  async function getArticleList() {
    return await getAxios('articles', { page })
  }
  return {
    articleList,
    setArticleList,
    pending,
    page,
    setPage,
    fetchArticleList: execute,
  }
}
