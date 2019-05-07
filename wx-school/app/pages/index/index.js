import {
  sqrt
} from "../../utils/tool.js";

// app/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    quickNav: [{
      title: '发现课程',
      'image': '/images/quickNav/kecheng.png',
      url: '#'
    }, {
      title: '名师',
      'image': '/images/quickNav/mingshi.png',
      url: '#'
    }, {
      title: '发现课程',
      'image': '/images/quickNav/kecheng.png',
      url: '#'
    }, {
      title: '名师',
      'image': '/images/quickNav/mingshi.png',
      url: '#'
    }, {
      title: '发现课程',
      'image': '/images/quickNav/kecheng.png',
      url: '#'
    }, {
      title: '名师',
      'image': '/images/quickNav/mingshi.png',
      url: '#'
    }, {
      title: '发现课程',
      'image': '/images/quickNav/kecheng.png',
      url: '#'
    }, {
      title: '名师',
      'image': '/images/quickNav/mingshi.png',
      url: '#'
    }, {
      title: '发现课程',
      'image': '/images/quickNav/kecheng.png',
      url: '#'
    }, {
      title: '名师',
      'image': '/images/quickNav/mingshi.png',
      url: '#'
    }],
    course: [{
      id: 1,
      title: '模具CAD（陈）',
      image: '/images/cad.jpg',
      student: 497,
      price: 4000
    }, {
      id: 2,
      title: 'Animate（康）',
      image: '/images/an.jpg',
      student: 0,
      price: 1280
    }, {
      id: 1,
      title: 'Iiiustra',
      image: '/images/ai.jpg',
      student: 0,
      price: 1245
    }, {
      id: 1,
      title: '商务办公',
      image: '/images/office.jpg',
      student: 0,
      price: 980
    }],
    teacher: [{
      id: 1,
      name: '汪清',
      rotate: 0,
      avatar: '/images/wang.jpg',
      course: 0,
      student: 1
    }, {
      id: 2,
      name: '李晴',
      rotate: 0,
      avatar: '/images/li.jpg',
      course: 0,
      student: 1
    }, {
      id: 3,
      name: '居家林',
      rotate: 0,
      avatar: '/images/ju.jpg',
      course: 0,
      student: 1
    }, {
      id: 4,
      name: '武凯',
      rotate: 0,
      avatar: '/images/wu.jpg',
      course: 0,
      student: 1
    }, {
      id: 5,
      name: '老黑',
      rotate: 0,
      avatar: '/images/he.jpg',
      course: 0,
      student: 1
    }, {
      id: 2,
      name: '徐东建',
      rotate: 0,
      avatar: '/images/xu.jpg',
      course: 0,
      student: 1
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      console.log(sqrt(2));
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