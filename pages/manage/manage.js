const baseUrl = require('../../config').baseUrl;
import { getManageList, getLessonList } from '../../api/manage.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl,
    list: [{
      id: '1',
      title: '我要理财'
    }, {
      id: '2',
      title: '理财小课堂'
    }],
    selectedId: '1',
    productList: [],
    lesson: {
      list: [{
        img: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/image/mobile_img/banner/cdaac0d1-d888-47f3-8b96-64d864a4b717.png',
        url: '/pages/lesson-detail/lesson-detail?url=http://h5.xinhuajindian.com/xhjd-h5/views/home/third-phase.html'
      }, {
        img: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/image/mobile_img/notice/slt/34d757e4-bab3-486d-9177-badf4ca45a56.png',
        url: '/pages/lesson-detail/lesson-detail?url=http://www.xinhuajindian.com/xhjd-h5/views/home/second-phase.html'
      }, {
        img: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/image/mobile_img/notice/slt/61280bcd-af41-4016-a7f0-22adafd39f99.png',
        url: '/pages/lesson-detail/lesson-detail?url=http://www.xinhuajindian.com/xhjd-h5/views/home/network-loan.html'
      }]
    }
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
  tabChange: function (e) {
    const { selectedId } = e.detail
    this.setData({
      selectedId
    })
  },
  getList: function () {
    this.getManageProduct()
    this.getManageLesson()
  },
  getManageProduct: function() {
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
  getManageLesson: function() {
    getLessonList().then((res) => {
      const list = res.data.financialManagementClassInfoList;
      const lessonList = []
      if (list.length > 0) {
        list.forEach((item) => {
          lessonList.push({
            img: item.imgUrl,
            url: `/pages/lesson-detail/lesson-detail?url=${item.hdUrl}`
          })
        })
        this.setData({
          ['lesson.list']: lessonList
        })
      }
    })
  },  
  showModal: function() {
    this.Modal.showModal();
  },
  cloceModal: function() {
    this.Modal.hideModal()
  }
})