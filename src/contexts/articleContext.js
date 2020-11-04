import React, { createContext, useContext } from 'react'

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
  const {
    articleList,
    totalPages,
    currentPage,
    setArticleList,
    pending,
    page,
    setPage,
    fetchArticleList,
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
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export function useArticleContext() {
  return useContext(ArticleContext)
}
