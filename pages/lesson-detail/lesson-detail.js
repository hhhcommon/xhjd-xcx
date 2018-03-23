// pages/lesson-detail.js
import { getDetail } from '../../api/detail.js';

Page({
  data: {
    nodes: ''
  },
  onLoad: function (options) {
    var that = this;
    getDetail(options.url).then((res) => {
      var article = /<body>([\s\S]*?)<\/body>/gi.exec(res)[1];
      var url = options.url.substr(0, options.url.lastIndexOf("/") + 1)
      article = article.replace(/src="/g, 'class="rich-image" src="' + url);
      that.setData({
        nodes: article
      })
    })
  }
})