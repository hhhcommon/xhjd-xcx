// pages/aboutus/aboutus.js
const baseUrl = require('../../config').baseUrl;
const { Image, extend } = require('../../common/js/common.js');

Page(extend({}, Image, {
  data: {
    baseUrl,
    list: [{
      id: '1',
      title: '关于我们'
    }, {
      id: '2',
      title: '发展历程'
    }, {
      id: '3',
      title: '资质认证'
    }, {
      id: '4',
      title: '联系我们'
    }, {
      id: '5',
      title: '人才招聘'
    }],
    selectedId: '1',
    map: {
      longitude: 120.0597989226,
      latitude: 30.2881204532,
      markers: [{
        iconPath: '/images/logo/logo_map.png',
        id: 0,
        title: '新华金典',
        latitude: 30.2881204532,
        longitude: 120.0597989226,
        width: 120,
        height: 60
      }],
    },
    companyProfile: {
      previewImages: [
        `${baseUrl}/static/images/about_header_1.png`,
        `${baseUrl}/static/images/about_header_3.png`,
        `${baseUrl}/static/images/about_header_2.png`,
      ]
    },
    certification: {
      previewImages: [
        `${baseUrl}/static/images/business.png`,
        `${baseUrl}/static/images/chinaNet.png`,
        `${baseUrl}/static/images/ios.png`,
        `${baseUrl}/static/images/android.png`,
        `${baseUrl}/static/images/permits.png`
      ]
    }
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  tabChange: function (e) {
    const { selectedId } = e.detail
    this.setData({
      selectedId
    })
  },
  callup: function () {
    wx.makePhoneCall({
      phoneNumber: '400-157-6800'
    })
  }
}))