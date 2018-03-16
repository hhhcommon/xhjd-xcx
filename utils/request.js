const decode = require('./decode.js')

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
    return new Promise((resolve, reject) => {
      wx.request({
        url: (this._baseUrl || '') + url,
        method: method || METHOD.GET,
        data: data,
        header: {
          ...this._header,
          ...header
        },
        success: res => {
          res.data.data = JSON.parse(decode.getData(res.data.data))
          this.intercept(res.data) && resolve(res.data)
        },
        fail: reject
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