import req from '../utils/request.js'
const config = require('../config')

export function getRunreportsData() {
  const url = config.runreportsUrl

  const data = {
    parameters: null
  }

  return req.post(url, data)
}