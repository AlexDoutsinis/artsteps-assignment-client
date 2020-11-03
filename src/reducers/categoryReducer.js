import { useReducer } from 'react'

const initialState = {
  message: '',
  reRender: false,
  isOpen: false,
  category: '',
}

function categoryReducer(state, action) {
  if (action.type === 'success') {
    return {
      ...state,
      message: action.payload,
      reRender: !state.reRender,
    }
  }

  if (action.type === 'fail') {
    return {
      ...state,
      message: action.payload,
    }
  }

  if (action.type === 'onChange') {
    return {
      ...state,
      category: action.payload,
    }
  }

  if (action.type === 'onClose') {
    return {
      ...state,
      isOpen: false,
      message: '',
      category: '',
    }
  }

  if (action.type === 'onOpen') {
    return {
      ...state,
      isOpen: true,
    }
  }

  if (action.type === 'setMessage') {
    return {
      ...state,
      message: action.payload,
    }
  }

  return state
}

export function useCategoryReducer() {
  const [state, dispatch] = useReducer(categoryReducer, initialState)

  return { state, dispatch }
}

export function actionCreators() {
  function onSuccess(payload = {}) {
    return { type: 'success', payload }
  }

  function onFailure(payload = {}) {
    return { type: 'fail', payload }
  }

  function onChange(payload = {}) {
    return { type: 'onChange', payload }
  }

  function onClose() {
    return { type: 'onClose' }
  }

  function onOpen() {
    return { type: 'onOpen' }
  }

  function setMessage(payload = {}) {
    return { type: 'setMessage', payload }
  }

  return { onSuccess, onFailure, onChange, onClose, onOpen, setMessage }
}
