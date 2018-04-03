import req from '../utils/request.js'
const config = require('../config')

export function getManageList() {
  const url = config.manageUrl

  const data = {
    decode: true
  }

  return req.post(url, data)
}

export function getLessonList(page = 1) {
  const url = config.lessonUrl

  const data = {
    parameters: {
      appVersion: "2.5.3",
      appCode: 16,
      appPlatform: 1,
      pageSize: 100,
      apiVersion: "1.0",
      currentPage: page,
      appPackageName: "com.allyoubank.xinhuagolden",
      channel: 360,
      flag: 2
    }
  }

  return req.post(url, data)
}