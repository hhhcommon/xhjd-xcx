/**
 * 小程序配置文件
 */

var serverUrl = 'https://xheart.leanapp.cn/server'
var baseUrl = "http://www.xinhuajindian.com/xhjd-web"
var apiHost = "http://www.xinhuajindian.com"

var config = {
  baseUrl,
  serverUrl,
  // 我要理财接口
  manageUrl: `${apiHost}/productList`,
  // manageUrl: 'https://xheart.leanapp.cn/server',
  lessonUrl: `${apiHost}/huoqService2.0/Product/newMore`
};

module.exports = config
