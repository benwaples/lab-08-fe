import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'http//:localhost3000'

export function getRegattas() {
  return request.get(`${URL}/regattas`)
}

export function getRegatta(id) {
  return request.get(`${URL}/regattas${id}`)
}

export function addRegatta(regattaData) {
  return request.post(`${URL}/regattas`, regattaData)
}