// pages/information/information.js
const baseUrl = require('../../config').baseUrl;
const { Image, extend } = require('../../common/js/common.js');

Page(extend({}, Image, {
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
        ['公司名称', '新华金典财富管理股份\n有限公司'], 
        ['平台名称', '新华金典理财'],
        ['统一社会信用代码', '91330100341788107Y'],
        ['法定代表人', '顾卫俊'],
        ['法注册资本(万元)', '20000'],
        ['实缴注册资本(万元)', '5000'],
        ['注册地址', '浙江省杭州市西湖区西溪新天地商业中心(公元里)'],
        ['经营地址', '浙江省杭州市西湖区西溪新天地商业中心(公元里)'],
        ['成立时间', '2015年5月26日'],
        ['经营期限', '2015年5月26日至2035年5月25日'],
        ['经营状态', '正常经营'],
        ['平台上线运营时间', '2015年6月30日'],
        ['经营范围', '受企业委托从事财富管理，实业投资，投资管理，投资咨询（除证券、期货）（未经金融等监管部门批准，不得从事向公众融资存款、融资担保、代客理财等金融服务），计算机软硬件、通信设备、电子产品的技术开发、技术服务、成果转让；批发、零售：计算机软硬件，通信设备，电子产品。（依法须经批准的项目，经相关部门批准后方可开展经营活动）'],
        ['董事长', '顾卫俊'],
        ['董事兼总经理', '黄希睿'],
        ['董事', '赵磊、董岳、曲虎'],
        ['监事', '李晓、范里昂、董湘辉'],
      ],
      align: ['right', 'left'],
      width: [40, 60]
    },
    shareholder: {
      list: [
        ['股东名称', '出资方式', '参股比例'],
        ['中金国信（杭州）实业有限公司', '货币出资', '67.65%'],
        ['北京新华智慧信息技术研究院', '货币出资', '10%'],
        ['董晓欣', '货币出资', '19%'],
        ['王晓桢', '货币出资', '1.85%'],
        ['任万霞', '货币出资', '1%'],
        ['罗红军', '货币出资', '0.5%'],
      ],
      width: [50, 25, 25]
    },
    organization: {
      previewImages: [
        `${baseUrl}/static/images/jiagou.png`,
        `${baseUrl}/static/images/scale-spread.png`
      ]
    },
    records: {
      list: [
        ['电信业务经营许可证', '浙B2-20171115'],
        ['资金存管信息', '存管对接中'],
        ['网站备案编号', '浙公网安备33010502004688'],
        ['金融监管部门备案登记', '办理中']
      ],
      align: ['right', 'left']
    },
    bigissues: {
      list: [
        ['公司减资、合并、分立、解散或申请破产：', '无'],
        ['公司依法进入破产程序：', '无'],
        ['公司被责令停业、整顿、关闭：', '无'],
        ['公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚：', '无'],
        ['公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施：', '无'],
        ['公司主要或者全部业务陷入停顿：', '无'],
        ['存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项：', '无'],
        ['其他重大事项：', '无'],
      ],
      align: ['left', 'center'],
      width: [60, 40]
    },
    charge: {
      list: [
        ['业务类型', '收费标准'],
        ['开通存管账户', '免费'],
        ['充值', '免费'],
        ['投资', '免费'],
        ['回款到账', '免费'],
        ['短信通知', '免费'],
        ['提现', '免费'],
        ['其他重大事项', '免费'],
      ]
    },
    runreports: {
      list: [{
        img: `${baseUrl}/static/images/month-report/report_title2.png`,
        url: '/pages/runreports-detail/runreports-detail?id=2'
      }, {
        img: `${baseUrl}/static/images/report_title.png`,
        url: '/pages/runreports-detail/runreports-detail?id='
      }]
    },
    educational: {
      classSelected: '1'
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
  changeClass: function(e) {
    const dataset = e.currentTarget.dataset
    const id = dataset.id
    this.setData({
      ['educational.classSelected']: id
    })
  }
}))