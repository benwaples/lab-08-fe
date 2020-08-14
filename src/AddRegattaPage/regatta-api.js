import request from 'superagent';

const URL = 'https://polar-sierra-76292.herokuapp.com';

export function getRegattas() {
  return request.get(`${URL}/regattas`)
}

export function getRegatta(id) {
  return request.get(`${URL}/regattas${id}`)
}

export function addRegatta(regattaData) {
  return request.post(`${URL}/regattas`, regattaData)
}