//app.js
const mtjwxsdk = require("./utils/mtj-wx-sdk.js");

// var plugin = requirePlugin("chatbot");

App({
  onLaunch: function () {
    // plugin.init({
    //     appid: "te19rLSPyGpQKMhOPwM88AssPGZkIg", //微信对话开放平台小程序插件appid
    //     openid: "", // 小程序用户的openid，必填项
    //     userHeader: "", // 用户头像,不传会弹出登录框
    //     userName: "", // 用户昵称,不传会弹出登录框
    //     anonymous: false, // 是否允许匿名用户登录，版本1.2.9后生效, 默认为false，设为true时，未传递userName、userHeader两个字段时将弹出登录框
    // })

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
})