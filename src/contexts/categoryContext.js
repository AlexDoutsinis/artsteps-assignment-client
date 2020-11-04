import React, { createContext, useContext } from 'react'

import { useGetCategoryList } from '../hooks/useGetCategoryList'

const CategoryContext = createContext({
  categoryList: [],
  setCategoryList: null,
})

export function CategoryContextProvider({ children }) {
  const { categoryList, setCategoryList } = useGetCategoryList()

  return (
    <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategoryContext() {
  return useContext(CategoryContext)
}
