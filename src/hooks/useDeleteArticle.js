import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { deleteAxios } = req()

export function useDeleteArticle({ slug }) {
  const { execute, value, error } = useAsync(deleteArticle)
  async function deleteArticle() {
    return await deleteAxios(`articles/${slug}`)
  }

  return { execute, value, error }
}
