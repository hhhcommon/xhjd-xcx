import req from '../utils/request.js'
const config = require('../config')

export function getManageList() {
  const url = config.manageUrl

  const data = {}

  return req.post(url, data)
}