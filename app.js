App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("app onLaunch 小程序初始化完成 ")
    console.log(options);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options);
    console.log('app onShow 小程序从【后台】进入【前台】')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('app onHide 小程序从【前台】进入【后台】')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('app onError 全局调用发生错误: '+ msg)
  },

  /**
   * 页面不存在监听函数
   * 小程序要打开不存在的页面不存在时触发 
   */
  onPageNotFound:function(options) {
    console.log('onPageNotFound执行');
    console.log(options);
  },

  // 全局变量
  num : 123,

 // 全局方法函数 
  test : function() {
    console.log('test');
  },

  url : 'http://127.0.0.1:8080'

})
