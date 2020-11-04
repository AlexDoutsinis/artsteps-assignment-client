import req from '../utils/req'
import useAsync from '../hooks/useAsync'

const { postAxios } = req()

export function useCreateCategory(name) {
  const { execute, value, error } = useAsync(postCategory)

  async function postCategory() {
    return await postAxios('categories', {
      name,
    })
  }

  return { execute, value, error }
}
