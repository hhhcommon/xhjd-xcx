// pages/lesson-detail.js
import { getDetail } from '../../api/detail.js';

Page({
  data: {
    nodes: ''
  },
  onLoad: function (options) {
    var that = this;
    var Url = unescape(options.url)
    var baseUrl = Url.substr(0, Url.lastIndexOf("/") + 1)
    var id = this.getQueryString(Url, 'num')
    if (id) {
      that.setData({
        nodes: `<img src="${baseUrl}../../static/images/class/class-bg${id}.png" alt="" class="rich-image" >`
      })
    } else {
      getDetail(Url).then((res) => {
        var article = /<body>([\s\S]*?)<\/body>/gi.exec(res)[1];
        article = article.replace(/src="/g, 'class="rich-image" src="' + baseUrl);
        that.setData({
          nodes: article
        })
      })
    }
  },
  getQueryString: function(url, name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
    const r = url.split('?')[1].match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
})