/**
 * 小程序配置文件
 */

var baseUrl = "http://www.xinhuajindian.com/xhjd-web"
var apiHost = "http://www.xinhuajindian.com"

var config = {
  baseUrl,
  // 我要理财接口
  manageUrl: `${apiHost}/productList`,
  lessonUrl: `${apiHost}/huoqService2.0/Product/newMore`
};

module.exports = config
