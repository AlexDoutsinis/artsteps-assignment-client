import { useState, useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { getAxios } = req()

export function useGetArticleList() {
  const [articleList, setArticleList] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [page, setPage] = useState(1)
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const { execute, pending, value } = useAsync(getArticleList)

  useEffect(() => {
    if (value) {
      setTotalPages(value.totalPages)
      setCurrentPage(value.currentPage)
      setArticleList(value)
      return setArticleList(value.articles)
    }
    execute()
  }, [value, page, selectedCategoryId])

  async function getArticleList() {
    return await getAxios('articles', { page, categoryId: selectedCategoryId })
  }

  function filterByCategory(id) {
    setSelectedCategoryId(id)
    execute()
  }

  return {
    articleList,
    totalPages,
    currentPage,
    setArticleList,
    pending,
    setPage,
    fetchArticleList: execute,
    filterByCategory,
  }
}
