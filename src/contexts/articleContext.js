import React, { useState, createContext, useContext } from 'react'

import { useGetArticleList } from '../hooks/useGetArticleList'

const ArticleContext = createContext({
  articleList: [],
  setArticleList: null,
  pending: false,
  page: null,
  setPage: null,
  totalPages: null,
  currentPage: null,
  fetchArticleList: null,
})

export function ArticleContextProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const {
    articleList,
    totalPages,
    currentPage,
    setArticleList,
    pending,
    page,
    setPage,
    fetchArticleList,
    filterByCategory,
  } = useGetArticleList()

  return (
    <ArticleContext.Provider
      value={{
        articleList,
        totalPages,
        currentPage,
        setArticleList,
        pending,
        page,
        setPage,
        fetchArticleList,
        alertMessage,
        setAlertMessage,
        isAlertOpen,
        setIsAlertOpen,
        filterByCategory,
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export function useArticleContext() {
  return useContext(ArticleContext)
}
