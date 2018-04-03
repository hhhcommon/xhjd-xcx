import req from '../utils/request.js'

export function getDetail(url) {
  const data = {
    method: 'GET',
    header: {
      'content-type': 'text/html'
    }
  }
  return req.post(url, data)
}