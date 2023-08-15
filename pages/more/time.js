// pages/more/time.js
const CONFIG = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentImgUrl: CONFIG.ICON.DEPARTMENT,
    weekImgUrl: CONFIG.ICON.WEEK,
    timeImgUrl: CONFIG.ICON.TIME,

    times: [
      {
        department: "全科诊室",
        time: "8:00~12:00,  14:00~17:00",
        week: "周一至周五"
      },
      {
        department: "外科诊室",
        time: "8:00~12:00,  14:00~17:00",
        week: "周一至周五"
      },
      {
        department: "急诊科",
        time: "全天",
        week: "周一至周日"
      },
      {
        department: "口腔科",
        time: "8:00~12:00,  14:00~17:00",
        week: "周一、周三、周五"
      },
      {
        department: "妇科",
        time: "8:00~12:00,  14:00~17:00",
        week: "周二、周四"
      },
      {
        department: "耳鼻喉科",
        time: "8:00~12:00,  14:00~17:00",
        week: "周二、周三、周五"
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