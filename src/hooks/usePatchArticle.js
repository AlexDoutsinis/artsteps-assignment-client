import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { patchAxios } = req()

export function usePatchArticle({ slug, content }) {
  const { execute, value, error } = useAsync(patchArticle)
  async function patchArticle() {
    return await patchAxios(`articles/${slug}`, { content })
  }

  return { execute, value, error }
}
