import axios from 'axios'

const baseURl = 'http://localhost:4000/api'

function httpRequest({ method, url, payload = {} }) {
  return axios[method](url, payload)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

function req() {
  async function getAxios(route, params = {}) {
    const queryString = Object.entries(params)
      .map(param => `${param[0]}=${param[1]}`)
      .join('&')
    const url = `${baseURl}/${route}?${queryString}`

    const res = await httpRequest({ method: 'get', url })
    return res.data
  }

  async function postAxios(route, payload) {
    const url = `${baseURl}/${route}`

    return await httpRequest({ method: 'post', url, payload })
  }

  async function deleteAxios(route) {
    const url = encodeURI(`${baseURl}/${route}`)

    return await httpRequest({ method: 'delete', url })
  }

  async function patchAxios(route, payload) {
    const url = `${baseURl}/${route}`

    return await httpRequest({ method: 'patch', url, payload })
  }

  return { getAxios, postAxios, deleteAxios, patchAxios }
}

export default req
