import { useState, useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { getAxios } = req()

export function useGetArticleList() {
  const [articleList, setArticleList] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [page, setPage] = useState(1)
  const { execute, pending, value } = useAsync(getArticleList)

  useEffect(() => {
    if (value) {
      setTotalPages(value.totalPages)
      setCurrentPage(value.currentPage)
      return setArticleList(value.articles)
    }
    execute()
  }, [value, page])

  async function getArticleList() {
    return await getAxios('articles', { page })
  }
  return {
    articleList,
    totalPages,
    currentPage,
    setArticleList,
    pending,
    setPage,
    fetchArticleList: execute,
  }
}
