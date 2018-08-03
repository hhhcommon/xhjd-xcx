/**
 * 小程序配置文件
 */

var serverUrl = 'https://xheart.leanapp.cn/server'
var HOST = 'http://www.xinhuajindian.com'
var baseUrl = HOST
var apiHost = `${HOST}/huoqService2.0`
var iosHost = 'http://ios.xinhuajindian.com/huoqService2.0'

var config = {
  baseUrl,
  serverUrl,
  // 我要理财接口
  manageUrl: 'http://47.98.189.203:8080/v3/100901/100901001',
  // manageUrl: 'https://xheart.leanapp.cn/server',
  lessonUrl: `${iosHost}/Product/newMore`,
  runreportsUrl: `${iosHost}/OperatingReport/getReportData`,
};

module.exports = config
