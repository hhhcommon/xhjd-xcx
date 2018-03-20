// pages/lesson-detail.js
Page({
  data: {
    nodes: ''
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: options.url,
      header: {
        'content-type': 'text/html'
      },
      success: function (res) {
        var article = /<body>([\s\S]*?)<\/body>/gi.exec(res.data)[1];
        var url = options.url.substr(0, options.url.lastIndexOf("/") + 1)
        article = article.replace(/src="/g, 'class="rich-image" src="' + url);
        that.setData({
          nodes: article
        })
      }
    })
  }
})