import React, { createContext, useContext } from 'react'

import { useGetArticleList } from '../hooks/useGetArticleList'

const ArticleContext = createContext({
  articleList: [],
  setArticleList: null,
})

export function ArticleContextProvider({ children }) {
  const { articleList, setArticleList } = useGetArticleList()

  return (
    <ArticleContext.Provider value={{ articleList, setArticleList }}>
      {children}
    </ArticleContext.Provider>
  )
}

export function useArticleContext() {
  return useContext(ArticleContext)
}
