import React, { createContext, useContext } from 'react'

import { useGetArticleList } from '../hooks/useGetArticleList'

const ArticleContext = createContext({
  articleList: [],
  setArticleList: null,
  pending: false,
  setPage: null,
})

export function ArticleContextProvider({ children }) {
  const {
    articleList,
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
