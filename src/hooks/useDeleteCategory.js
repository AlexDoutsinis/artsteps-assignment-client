import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { deleteAxios } = req()

export function useDeleteCategory(name) {
  const { execute, value, error } = useAsync(deleteCategory)

  async function deleteCategory() {
    return await deleteAxios(`categories/${name}`)
  }
  return {
    execute,
    value,
    error,
  }
}
