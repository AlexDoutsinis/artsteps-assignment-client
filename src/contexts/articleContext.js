import React, { createContext, useContext } from 'react'

import { useGetArticleList } from '../hooks/useGetArticleList'

const ArticleContext = createContext({
  articleList: [],
  setArticleList: null,
  pending: false,
})

export function ArticleContextProvider({ children }) {
  const { articleList, setArticleList, pending } = useGetArticleList()

  return (
    <ArticleContext.Provider value={{ articleList, setArticleList, pending }}>
      {children}
    </ArticleContext.Provider>
  )
}

export function useArticleContext() {
  return useContext(ArticleContext)
}
