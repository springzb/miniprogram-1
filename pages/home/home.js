Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '0',
    op: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("home onLoad监听页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("home onReady 监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("home onShow 监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('home onHide 监听页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("home onUnload 监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("home onPullDownRefresh 监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("home onReachBottom  页面上拉触底事件的处理函数")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("home onShareAppMessage 用户点击右上角分享")
  },

  // 常量值
  result: null,
  isClear: false,
  numBtn: function(e) {
    var num = e.target.dataset.val;

    if(this.data.num === '0' || this.isClear) {
        this.setData({num: num})
        this.isClear = false
    } else {
      this.setData({num: this.data.num + num})
    }
  },
  /**
   * 运算操作
   */
  opBtn:function(e) {
    var op = this.data.op;
    var num = Number(this.data.num);
    this.setData({op:e.target.dataset.val});
    if(this.isClear) {
      return
    }
    this.isClear = true;
    if(this.result == null) {
      this.result = num;
      return;
    }
    if(op === '＋') {
      this.result = this.result + num;
    } else if(op === '－') {
      this.result = this.result - num;
    } else if(op === '*') {
      this.result = this.result * num;
    } else if(op === '/') {
      this.result = this.result / num;
    } else if(op === '%') {
      this.result = this.result % num;
    }
    this.setData({num : this.result + ''});
  },

  /**
   * 操作小数点的函数
   */
  dotBtn: function(e){
    if(this.isClear) {
      this.setData({num : '0.'});
      this.isClear = false;
      return
    }
    if(this.data.num.indexOf('.') >= 0) {
      return;
    }
    this.setData({num: this.data.num+'.'});
  },

  /**
   * 清除一位数字的函数
   */
  delBtn: function(e) {
    var num = this.data.num.substr(0,this.data.num.length - 1)
    this.setData({num: num === '' ? '0' : num})
  },

  /**
   * 清除函数，清除值和运算符
   */
  resetBtn: function(e) {
    this.result = null;
    this.isClear = false;
    this.setData({num: '0', op: ''})
  }


})