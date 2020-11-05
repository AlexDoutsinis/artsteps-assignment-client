import { useState, useRef, useLayoutEffect } from 'react'

function useDimensions(dependency) {
  const targetRef = useRef()
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    if (targetRef.current) {
      setHeight(targetRef.current.offsetHeight)
      setWidth(targetRef.current.offsetWidth)
    }
  }, [dependency])

  return { targetRef, height, width }
}

export default useDimensions
