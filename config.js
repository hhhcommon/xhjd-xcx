/**
 * 小程序配置文件
 */

var serverUrl = 'https://xheart.leanapp.cn/server'
var HOST = 'http://www.xinhuajindian.com'
var baseUrl = `${HOST}/xhjd-web`
var apiHost = `${HOST}/huoqService2.0`

var config = {
  baseUrl,
  serverUrl,
  // 我要理财接口
  manageUrl: `${HOST}/productList`,
  // manageUrl: 'https://xheart.leanapp.cn/server',
  lessonUrl: `${apiHost}/Product/newMore`,
  runreportsUrl: `${apiHost}/OperatingReport/getReportData`,
};

module.exports = config
