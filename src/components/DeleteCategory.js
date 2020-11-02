import React, { useState } from 'react'

import req from '../utils/req'
import useAsync from '../hooks/useAsync'
import Modal from './Modal'

const { deleteAxios } = req()

function DeleteCategory() {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const { execute, value, error } = useAsync(deleteCategory)

  async function deleteCategory() {
    const res = await deleteAxios('/categories', {
      name: category,
    })

    return res
  }

  return <div>Hello</div>
}

export default DeleteCategory
