import { useState, useCallback } from 'react'

const useAsync = (asyncFunction, delay = 0) => {
  const [pending, setPending] = useState(false)
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setPending(true)
    setValue(null)
    setError(null)
    return asyncFunction()
      .then(response => setValue(response))
      .catch(error => setError(error))
      .finally(() => {
        if (delay) return setTimeout(() => setPending(false), delay)

        setPending(false)
      })
  }, [asyncFunction])

  return { execute, pending, value, error }
}

export default useAsync
