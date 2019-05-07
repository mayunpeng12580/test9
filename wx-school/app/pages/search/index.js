// app/pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '',
    sortArr: ['综合', '价格最低', '价格最高', '热度最高', '评价最大'],
    sortIndex: 0,
    majorArr:['全部专业','前端','UI','室内','模具'],
    majorIndex:0,
    catArr:['全部分类','在线课程','直播','线下'],
    catIndex:0
  },
  sortPickerChange: function(e) {
    this.setData({
      sortIndex: e.detail.value
    });
  }, majorPickerChange: function (e) {
    this.setData({
      majorIndex: e.detail.value
    });
  }, catPickerChange: function (e) {
    this.setData({
      catIndex: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})