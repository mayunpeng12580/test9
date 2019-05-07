// app/pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todos: [{ date: '2019-05-01', list: [{ time: '9:00', todo: '赶飞机回家' }, { time: '11:00', todo: '到家' }, { time: '12:00', todo: '吃午饭' }] }, { date: '2019-05-02', list: [{ time: '9:00', todo: '睡懒觉' }] }],
  },
  onChange:function(e){
    console.log(e.detail.selected);
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

  }
})