const baseUrl = require('../../config').baseUrl;
import { getManageList } from '../../api/manage.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: baseUrl,
    productList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.Modal = this.selectComponent("#Modal");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  getList: function () {
    const _this = this;
    getManageList().then((res) => {
      let list = res.data.productList;
      const newList = [];
      const otherList = [];
      list.sort((a, b) => {
        const aVal = a.displayBaseEarnings + a.displayExtraEarnings
        const bVal = b.displayBaseEarnings + b.displayExtraEarnings
        return (bVal - aVal)
      })
      list.sort((a, b) => {
        return (b.productType - a.productType)
      })
      this.setData({
        productList: this.data.productList.concat(list)
      })
    })
  },
  showModal: function() {
    this.Modal.showModal();
  }
})