//获取应用实例
const CONFIG = require('../../utils/config.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nav_first: CONFIG.PERSONAL.NAV_FIRST,
    nav_second: CONFIG.PERSONAL.NAV_SECOND,
  },

  /**
   * 前往单个菜单项
   */
  toNav: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})