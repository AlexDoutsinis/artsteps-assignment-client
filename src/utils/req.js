import axios from 'axios'

const baseURl = 'http://localhost:4000/api'

function req() {
  async function getAxios(route, params = {}) {
    const queryString = Object.entries(params)
      .map(param => `${param[0]}=${param[1]}`)
      .join('&')

    const result = await axios.get(`${baseURl}/${route}?${queryString}`)
    return result.data
  }

  async function postAxios(route, payload = {}) {
    const result = await axios.post(`${baseURl}/${route}`, payload)

    return result.data
  }

  return { getAxios, postAxios }
}

export default req
