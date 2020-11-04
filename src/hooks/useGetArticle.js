import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { getAxios } = req()

export function useGetArticle(slug) {
  const { execute, pending, value } = useAsync(getArticle)

  async function getArticle() {
    return await getAxios(`articles/${slug}`)
  }

  return {
    execute,
    pending,
    value,
  }
}
