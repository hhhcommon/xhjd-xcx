// pages/information/information.js
const baseUrl = require('../../config').baseUrl;

Page({
  data: {
    baseUrl,
    list: [{
      id: '1',
      title: '工商信息'
    }, {
      id: '2',
      title: '股东信息'
    }, {
      id: '3',
      title: '组织架构'
    }, {
      id: '4',
      title: '官方渠道'
    }, {
      id: '5',
      title: '备案信息'
    }, {
      id: '6',
      title: '重大事项'
    }, {
      id: '7',
      title: '收费标准'
    }, {
      id: '8',
      title: '运营报告'
    }, {
      id: '9',
      title: '投资者教育'
    }, {
      id: '10',
      title: '信息披露声明'
    }],
    selectedId: '1',
    business: {
      list: [
        ['公司名称', '新华金典财富管理股份有限公司'], 
        ['平台名称', '新华金典理财']
      ],
      align: ['right', 'left']
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
})