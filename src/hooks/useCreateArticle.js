import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { postAxios } = req()

export function useCreateArticle(payload) {
  const { execute, value, error } = useAsync(postArticle)

  async function postArticle() {
    return await postAxios('articles', payload)
  }

  return { execute, value, error }
}
