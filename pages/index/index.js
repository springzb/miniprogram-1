// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result : '',
    result2 : '',
    url : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('index页面'+options);
      console.log("index onLoad 监听页面加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获得全局 app
    var app = getApp();
    // 调用全局变量
    console.log(app.num);
    // 调用全局方法
    app.test();

    this.data.url = app.url;
    
    console.log("index onReady 监听页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("index onShow 监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("index onHide 监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("index onUnload 监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("index onPullDownRefresh 监听用户下拉动作 ")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("index onReachBottom 页面上拉触底事件的处理函数")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("index onShareAppMessage 用户点击右上角分享")
  },
  /**
   *  当页面有滚动会触发此函数
   * @param {*} options 
   */
  onPageScroll :function(options) {
    console.log('此时用户正在滚动页面');
    console.log('滚动距离：'+ options.scrollTop)
  },

  /**
   * 按钮绑定的函数
   */
  compare: function (e) {
    console.log('111按钮被点击了');
    console.log(e);
    var str = "两数相等";
    if(this.num1 > this.num2) {
      str = '第 1 个数大';
    } else if (this.num2 > this.num1) {
      str = "第 2 个数大";
    }
    // 将比较结果 赋值 过去
    // 这里不能使用 this.data.result = str 这种方式改变页面中的 {{result}} 的值
    // 需要通过 this.setData() 方法来实现，该方法的参数是一个对象，传入{result : str} 就是将页面中 {{result}} 的值改变变量 str 的值
    this.setData({result : str})
  },

  num1 : 0,
  num2 : 0,
  num3 : 0,
  num4 : 0,
  // 输入框事件,监听第一数字输入框
  num1change : function(e) {
    console.log(e);
    this.num1 = Number (e.detail.value);
    console.log('第一个数为：'+ this.num1);
  },
  // 输入框事件,监听第二数字输入框
  num2change : function(e) {
    this.num2 = Number (e.detail.value);
    console.log('第二个数为：'+ this.num2);
  },

 // 比较两个数的大小
 // 通过 "e.target.dataset.名称"  的方式 可以获取 "data-名称" 的值
  change : function(e) {
    this[e.target.dataset.id] = Number(e.detail.value);
    console.log('输入的数字为：'+ this[e.target.dataset.id])
  },

  compare2: function (e) {
    console.log('222按钮被点击了');
    console.log(e);
    var str = "两数相等";
    if(this.num3 > this.num4) {
      str = '第 1 个数大';
    } else if (this.num4 > this.num3) {
      str = "第 2 个数大";
    }
    // 将比较结果 赋值 过去
    // 这里不能使用 this.data.result = str 这种方式改变页面中的 {{result}} 的值
    // 需要通过 this.setData() 方法来实现，该方法的参数是一个对象，传入{result : str} 就是将页面中 {{result}} 的值改变变量 str 的值
    this.setData({result2 : str})
  },

  submit : function(e){
    console.log('表单被提交了');
    console.log(e);
    wx.request({
      url: this.data.url+'/api/v1/min/form',
      complete: (res) => {},
      data: e.detail.value,
      dataType: 'json',
      fail: (res) => {
        console.log('调用失败了IC');
        console.log(res);
        console.log('调用失败了')
      },
      header: 'application/json',
      method: 'post',
      responseType: 'text',
      success: (result) => {
        console.log('成功了')
        console.log(result)
      },
    })
    
  }

})