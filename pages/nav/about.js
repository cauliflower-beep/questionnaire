// pages/nav/about.js
const CONFIG = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconImgUrl: CONFIG.IMAGE.ABOUT.LOGO,
    name: "湖北经济学院校医院",
    version: "1.0.0",

    cardList: [
      {
        imgUrl: CONFIG.IMAGE.ABOUT.DEVELOPER,
        main: "蜗牛先生",
        note: "小程序开发者"
      },
      {
        imgUrl: CONFIG.IMAGE.ABOUT.CONTACT,
        main: "1586671591",
        note: "QQ"
      }
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