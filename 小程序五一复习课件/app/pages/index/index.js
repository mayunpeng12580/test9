// app/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    navimg: [
      { title: "课程发现", "image":"/images/quickNav/kecheng.png"},
      { title: "名师", "image": "/images/quickNav/mingshi.png" },
      { title: "公开课", "image": "/images/quickNav/gongkaike.png" },
      { title: "室内景观", "image": "/images/quickNav/shinei.png" },
      { title: "平面UI", "image": "/images/quickNav/ui.png" },
      { title: "网页设计", "image": "/images/quickNav/web.png" },
      { title: "办公", "image": "/images/quickNav/office.png" },
      { title: "机械磨具", "image": "/images/quickNav/moju.png" },
      { title: "影视美术", "image": "/images/quickNav/yingshi.png" },
      { title: "服装设计", "image": "/images/quickNav/fuzhuang.png"}
    ],
    course:[
      {image:"/images/6.jpg",title:"0",price:"￥12"},
      {image:"/images/5.jpg",title:"1",price:"￥13"},
      {image:"/images/4.jpg",title:"3",price:"￥14"},
      {image:"/images/7.jpg",title:"4",price:"￥15"},
      {image:"/images/5.jpg",title:"5",price:"￥16"},
      {image:"/images/4.jpg",title:"6",price:"￥16"}
    ],
    teacher:[
      {image:"/images/he.jpg",title:"开课",students:"学员"},
      {image:"/images/li.jpg",title:"开课",students:"学员"},
      {image:"/images/ju.jpg",title:"开课",students:"学员"},
      {image:"/images/wang.jpg",title:"开课",students:"学员"},
      {image:"/images/wu.jpg",title:"开课",students:"学员"},
      {image:"/images/xu.jpg",title:"开课",students:"学员"}
    ]
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