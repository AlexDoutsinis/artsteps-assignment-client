import { useState, useEffect } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'
import useDebounce from './useDebounce'

const { getAxios } = req()

export function useGetArticleList() {
  const [articleList, setArticleList] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [page, setPage] = useState(1)
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { execute, pending, value } = useAsync(getArticleList)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (value) {
      setTotalPages(value.totalPages)
      setCurrentPage(value.currentPage)
      return setArticleList(value.articles)
    }

    execute()
  }, [value, page, selectedCategoryId])

  useEffect(() => {
    execute()
  }, [debouncedSearchTerm])

  async function getArticleList() {
    return await getAxios('articles', {
      page,
      categoryId: selectedCategoryId,
      search: searchTerm,
    })
  }

  function filterByCategory(id) {
    setSelectedCategoryId(id)
    execute()
  }

  function filterByText(text) {
    setSearchTerm(text)
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
    searchTerm,
    filterByText,
  }
}
