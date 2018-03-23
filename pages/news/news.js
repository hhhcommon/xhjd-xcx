// pages/news/news.js
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
      var articleTitle = article.match(/<h1 id="title">([\s\S]*?)<\/h1>/gi)
      var articleXh = article.match(/<div class="article">[\s\S]*?<!--文章操作-->/)
      var articleNew = article.match(/<div class="artical_content mb60">.*?<!-- 底部 -->/)
      if (articleNew) {
        article = '<div><div>' + articleNew[0]
      }
      if (articleTitle) {
        article = articleTitle[0] + articleXh[0]
      }
      article = article.replace(/src="/g, 'class="rich-image" src="' + url);
      article = article.replace(/font/g, 'span');
      article = article.replace(/h1|h2/g, 'h3');
      that.setData({
        nodes: article
      })
    })
  }
})