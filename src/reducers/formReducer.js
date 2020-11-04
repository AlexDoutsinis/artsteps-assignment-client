import { useReducer } from 'react'

const initialState = {
  message: '',
  reRender: false,
  isOpen: false,
  data: '',
}

function formReducer(state, action) {
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
      data: action.payload,
    }
  }

  if (action.type === 'onClose') {
    return {
      ...state,
      isOpen: false,
      message: '',
      data: '',
    }
  }

  if (action.type === 'onOpen') {
    return {
      ...state,
      isOpen: true,
    }
  }

  if (action.type === 'onOpenKeepData') {
    return {
      ...state,
      isOpen: true,
      data: action.payload,
    }
  }

  if (action.type === 'onCloseKeepData') {
    return {
      ...state,
      isOpen: false,
      message: '',
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

export function useFormReducer(intState = initialState) {
  const [state, dispatch] = useReducer(formReducer, intState)

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

  function onOpenKeepData(payload = {}) {
    return { type: 'onOpenKeepData', payload }
  }

  function onCloseKeepData() {
    return { type: 'onCloseKeepData' }
  }

  function onOpen() {
    return { type: 'onOpen' }
  }

  function setMessage(payload = {}) {
    return { type: 'setMessage', payload }
  }

  return {
    onSuccess,
    onFailure,
    onChange,
    onClose,
    onOpenKeepData,
    onOpen,
    setMessage,
    onCloseKeepData,
  }
}
