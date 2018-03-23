const decode = require('./decode.js')
const config = require('../config')

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}
class Request {
  _header = {
    token: null
  }
  _baseUrl = null

  interceptors = []

  constructor() {
    const token = wx.getStorageSync('token')
    if (token) {
      this._header.token = token
    }
  }

  intercept(res) {
    return this.interceptors
      .filter(f => typeof f === 'function')
      .every(f => f(res))
  }

  request({ url, method, header = {}, data }) {
    data.url = url;
    data.header = header;
    wx.showLoading({
      title: '加载中',
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: (config.serverUrl || url),
        method: method || METHOD.GET,
        data: data,
        header: {
          ...this._header,
          ...header
        },
        success: res => {
          if (res.data.error === 0) {
            if (res.data.data.data) {
              res.data.data.data = JSON.parse(decode.getData(res.data.data.data))
            }
            this.intercept(res.data.data) && resolve(res.data.data)
          } else {
            reject(res.data)
          }
        },
        fail: reject,
        complete: () => {
          wx.hideLoading()
        }
      })
    })
  }

  get(url, data, header) {
    return this.request({ url, method: METHOD.GET, header, data })
  }
  post(url, data, header) {
    return this.request({ url, method: METHOD.POST, header, data })
  }
  put(url, data, header) {
    return this.request({ url, method: METHOD.PUT, header, data })
  }
  delete(url, data, header) {
    return this.request({ url, method: METHOD.DELETE, header, data })
  }

  uploadFile(url, filePath, name, formData, header) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: (this._baseUrl || '') + url,
        filePath: filePath,
        name: name,
        formData: formData,
        header: {
          ...this._header,
          ...header
        },
        success: res => this.intercept(res) && resolve(res),
        fail: reject
      })
    })
  }

  token(token) {
    this._header.token = token
    return this
  }
  header(header) {
    this._header = header
    return this
  }
  baseUrl(baseUrl) {
    this._baseUrl = baseUrl
    return this
  }
  interceptor(f) {
    if (typeof f === 'function') {
      this.interceptors.push(f)
    }
    return this
  }
}
export default new Request
export { METHOD }