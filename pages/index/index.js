const baseUrl = require('../../config').baseUrl;
const app = getApp()

Page({
  data: {
    baseUrl: baseUrl,
    playIcon: `${baseUrl}/static/images/playimg.png`,
    indicatorDots: true,
    indicatorColor: "rgba(178,178,178,1)",
    indicatorActiveColor: "rgba(255,102,57,1)",
    autoplay: true,
    interval: 5000,
    duration: 1000,
    animation: {},
    videoPlaying: false,
    videoAutoplay: true,
    videoUrl: '',
    carousel: [{
      image: `${baseUrl}/static/images/banner2@2x.png`,
      url: `${baseUrl}/news/home_news1.html`
    }, {
      image: `${baseUrl}/static/images/banner3@2x.png`,
      url: `${baseUrl}/news/home_news4.html`
    }, {
      image: `${baseUrl}/static/images/imgs/video1.png`,
      src: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/video/4.mp4'
    }, {
      image: `${baseUrl}/static/images/banner4@2x.png`,
      url: `${baseUrl}/news/home_news3.html`
    }, {
      image: `${baseUrl}/static/images/shipin2.png`,
      src: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/video/2.mp4'
    }, {
      image: `${baseUrl}/static/images/banner5@2x.png`,
      url: `${baseUrl}/news/home_news4.html`
    }, {
      image: `${baseUrl}/static/images/banner1.png`,
      src: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/video/1.mp4'
    }, {
      image: `${baseUrl}/static/images/banner1.png`,
      url: `${baseUrl}/news/home_news2.html`
    }, {
      image: `${baseUrl}/static/images/imgs/video4.png`,
      src: 'http://xinhuagolden.oss-cn-hzfinance.aliyuncs.com/video/3.mp4'
    }],
    news: [{
      url: 'http://ydyl.news.cn/2017-09/04/c_1121603180.htm',
      text: '【新华网】新华金典总裁顾卫俊：品牌是卓越经营、管理、维护的综合效果',
      type: 'xhw'
    }, {
      url: 'http://ydyl.news.cn/2017-09/04/c_1121603369.htm',
      text: '【新华网】浙江大学教授金雪军：知识产权与金融创新对接的途径与条件',
      type: 'xhw'
    }, {
      url: 'http://ydyl.news.cn/2017-09/07/c_1121624928.htm',
      text: '【新华网】新华金典总裁顾卫俊：立互联网金融潮头,做新时代行业标杆',
      type: 'xhw'
    }, {
      url: `${baseUrl}/news/home_news10.html`,
      text: '新华金典总裁顾卫俊谈教育：为中华之崛起而读书'
    }, {
      url: `${baseUrl}/news/home_news9.html`,
      text: '"新华金典"战队荣获浙江大学电子竞技赛亚军'
    }, {
      url: `${baseUrl}/news/home_news1.html`,
      text: '中国品牌就是国家形象 新华金典受邀参加中国国际商标品牌节'
    }, {
      url: `${baseUrl}/news/home_news2.html`,
      text: '新华金典总裁接受桂林新闻采访 探讨品牌创建与企业管理经验'
    }, {
      url: `${baseUrl}/news/home_news3.html`,
      text: '新华金典总裁顾卫俊：立互联网金融潮头，做新时代行业标杆'
    }, {
      url: `${baseUrl}/news/home_news4.html`,
      text: '新华金典总裁顾卫俊接受新华网专访 新华网人民日报强势入股'
    }, {
      url: `${baseUrl}/news/home_news5.html`,
      text: '中国国际商标品牌节落幕 新华金典积极践行惠普金融'
    }, {
      url: `${baseUrl}/news/home_news6.html`,
      text: '新华金典成为少数已获ICP许可证的互金平台之一，合规再升级'
    }, {
      url: `${baseUrl}/news/home_news7.html`,
      text: '新华金典正式通过公安机关网安备案信息'
    }, {
      url: `${baseUrl}/news/home_news8.html`,
      text: '立足创新金融，新华金典获计算机软件著作权登记证书'
    }],
    links: [{
      link: 'http://m.xinhuanet.com/',
      image: `${baseUrl}/static/images/Group9.png`,
      btn: `${baseUrl}/static/images/button1.png`
    }, {
      link: 'http://www.zj.xinhuanet.com/2015market/hlwjj/',
      image: `${baseUrl}/static/images/Group13.png`,
      btn: `${baseUrl}/static/images/button2.png`
    }],
    partners: [{
      link: 'http://www.xinhuanet.com/',
      image: `${baseUrl}/static/images/home_timg.png`
    }, {
      link: 'https://www.toutiao.com/',
      image: `${baseUrl}/static/images/parter_toutiao.jpg`
    }, {
      link: 'http://www.baofoo.com/html/index.html',
      image: `${baseUrl}/static/images/baofu.jpg`
    }, {
      link: 'http://www.sohu.com/',
      image: `${baseUrl}/static/images/parter_sohu.jpg`
    }, {
      link: 'http://www.jytpay.com/',
      image: `${baseUrl}/static/images/payment-jft.jpg`
    }, {
      link: 'https://www.fuiou.com/',
      image: `${baseUrl}/static/images/payment-fy.jpg`
    }, {
      link: 'http://www.163.com/',
      image: `${baseUrl}/static/images/parter_wangyi.png`
    }, {
      link: 'http://www.celg.cn/',
      image: `${baseUrl}/static/images/parter_lowyer.jpg`
    }, {
      link: 'http://zjfintech.com/',
      image: `${baseUrl}/static/images/parter_jrke.jpg`
    }, {
      link: 'http://www.aliyun.com/',
      image: `${baseUrl}/static/images/parter_tengxuny.jpg`
    }, {
      link: 'http://www.ccb.com/cn/home/index.html',
      image: `${baseUrl}/static/images/parter_ccb.jpg`
    }, {
      link: 'http://www.sina.com.cn/',
      image: `${baseUrl}/static/images/parter_sina.jpg`
    }]
  },
  onLoad: function () {
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('Video')
  },
  contactUs: function() {
    wx.makePhoneCall({
      phoneNumber: '400-157-6800'
    })
  },
  palyVideo: function(event) {
    console.log(event)
    const src = event.currentTarget.dataset.src
    const oldSrc = this.data.videoUrl
    this.setData({
      videoUrl: src,
      videoPlaying: true,
      autoplay: false
    })
    if (src === oldSrc) {
      this.videoContext.play()
    }
  },
  pauseVideo: function() {
    this.setData({
      videoPlaying: false,
      autoplay: true
    })
  }
})
