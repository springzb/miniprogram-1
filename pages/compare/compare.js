// pages/compare/compare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1 : 0,
    num2 : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * this.setData(data) 用于设置页面中 num1 或 num2 的值
   */
  change: function(e) {
    // 模拟全局的值
    var data = {};
    // 获得触发节点的id 对应的值
    data[e.target.dataset.id] = Number(e.detail.value);
    // 将获得值写入大 当前页面data中
    this.setData(data)
  },

  /**
   *  比较提交表单函数
   */
  formCompare :function (e) {
    console.log('表单提交被点击了');
    var str = '两个数相等';
    var num3 = Number(e.detail.value.num3);
    var num4 = Number(e.detail.value.num4);
    if (num3 > num4) {
      str  = '第1个数大';
    } else if (num4 > num3) {
      str = '第2个数大';
    } else if (num4==0 && num3==0){
      str = '请输入数字'; 
    } else if(num4 == num3){
      str = '两个数相等';
    }
    this.setData({result : str} );
  }


})