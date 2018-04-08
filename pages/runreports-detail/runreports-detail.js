// pages/runreports-detail.js
import { getDetail } from '../../api/detail.js';

Page({
  data: {
    nodes: ''
  },
  onLoad: function (options) {
    var that = this;
    var Url = unescape(options.url)
    var baseUrl = Url.substr(0, Url.lastIndexOf("/") + 1)
    getDetail(Url).then((res) => {
      var article = /<body>([\s\S]*?)<\/body>/gi.exec(res)[1];
      article = article.replace(/src="/g, 'class="rich-image" src="' + baseUrl);
      that.setData({
        nodes: article
      })
    })
  }
})