import axios from 'axios'

const baseURl = 'http://localhost:4000/api'

function req() {
  async function getAxios(route, params = {}) {
    const queryString = Object.entries(params)
      .map(param => `${param[0]}=${param[1]}`)
      .join('&')

    const result = await axios.get(`${baseURl}/${route}?${queryString}`)
    const data = await result.data
    return data
  }

  return { getAxios }
}

export default req
