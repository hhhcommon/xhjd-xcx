// pages/runreports-detail.js
import { getDetail } from '../../api/detail.js';
Page({
  data: {
    nodes: '',
    imgUrl: ""
  },
  onLoad: function (options) {
    var that = this;
    var Url = unescape(options.url)
    var baseUrl = Url.substr(0, Url.indexOf(".com") + 4)
    var index = Url.substr(Url.lastIndexOf("=") + 1)
    console.log(baseUrl)
    that.setData({
      imgUrl: `${baseUrl}/xhjd-h5/static/images/month-report/month_report${index}.png`
    })
    // getDetail(Url).then((res) => {
    //   var article = /<body>([\s\S]*?)<\/body>/gi.exec(res)[1];
    //   article = article.replace(/src="/g, 'class="rich-image" src="' + baseUrl);
    //   console.log(article)
    //   that.setData({
    //     nodes: article
    //   })
    // })
  }
})