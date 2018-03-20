// pages/runreports-detail.js
const baseUrl = require('../../config').baseUrl;
const { Image, extend } = require('../../common/js/common.js');

Page(extend({}, Image, {
  data: {
    baseUrl,
    id: '',
    imageBg: ''
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    const id = options.id
    this.setData({
      id
    })
  },
  onReady: function () {
    this.setData({
      imageBg: `${baseUrl}/static/images/month_report${this.data.id}.png`
    })
    wx.hideLoading()
  },
}))