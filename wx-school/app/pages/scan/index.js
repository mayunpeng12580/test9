// app/pages/scan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    long: 121.43,
    lat: 31.18,
    hour:0,
    mint:0,
    second:0,
    steps: [
      {
        text: 'HTML课程-签到成功',
        desc: '2019-5-6'
      },
      {
        text: '步骤二',
        desc: '描述信息'
      },
      {
        text: '步骤三',
        desc: '描述信息'
      },
      {
        text: '步骤四',
        desc: '描述信息'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude;
        const longitude = res.longitude;
        this.setData({
          long: longitude,
          lat: latitude
        });
      }
    })
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