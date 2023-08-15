// pages/more/ai.js
const CONFIG = require('../../utils/config.js');
const AJAXCONFIG = require('../../utils/ajaxConfig.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    message: [],
    inputMsg: '',
    scrollTop: 0,
    replyImgUrl: CONFIG.IMAGE.REPLY_HEAD,
  },

  /**
   * 发送消息
   */
  sendMessage: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var message = wx.getStorageSync('message');
    var top = message.length * 100;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        message: message || [],
        scrollTop: top
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          message: message || [],
          scrollTop: top
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            message: message || [],
            scrollTop: top
          })
        }
      })
    }
    console.log(this.data.userInfo)
  },

  inputMsg: function (e) {
    this.setData({
      inputMsg: e.detail.value
    })
  },

  sendMessage: function (e) {
    this.setData({
      inputMsg: e.detail.value.input
    })
    var that = this;
    if (this.data.inputMsg != "") {
      console.log(this.data.inputMsg)
      var msg = { type: 0, src: this.data.userInfo.avatarUrl, content: this.data.inputMsg };
      // 发送信息
      this.setMessage(msg);
      // 回复（请求图灵机器人API）
      wx.request({
        url: AJAXCONFIG.API.ROBOT,
        data: {
          "reqType": 0,
          "perception": {
            "inputText": {
              "text": "哈哈"
            }
          },
          "userInfo": {
            "apiKey": "473f3146b7804e52b42d720e20a5acdd",
            "userId": "1"
          }
        },
        method: "POST",
        success: function (res) {
          console.log(res);
          let reply = {};
          for (let i = 0; i < res.data.results.length; i++) {
            if ("text" == res.data.results[i].resultType) {

              reply = { type: 1, src: that.data.replyImgUrl, content: res.data.results[i].values.text };

            } else {

              reply = { type: 1, src: that.data.replyImgUrl, content: '主人说这条消息不能给你看诶~' };

            }
            that.setMessage(reply);
            that.setData({
              scrollTop: that.data.scrollTop + 300
            })
          }
          
        },
        fail: function () {
          var reply = { type: 1, src: that.data.replyImgUrl, content: '哎呀，这个问题我还不知道怎么回答呢【委屈脸】~' };
          that.setMessage(reply);
          that.setData({
            scrollTop: that.data.scrollTop + 300
          })
        }
      })
    }
  },

  setMessage: function (msg) {
    var msgList = this.data.message;
    msgList.push(msg);
    this.setData({
      message: msgList,
      inputMsg: "",
    })
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
    wx.setStorageSync('message', this.data.message);
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