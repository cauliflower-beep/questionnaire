// pages/nav/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackType: ['功能意见', '产品建议', '安全问题', '其他建议'],
    feedbackTypeIndex: 0,
    opinion: "",
    contact: ""
  },

  /**
   * 选择【反馈类型】
   */
  chooseType: function () {
    const _this = this;
    let feedbackType = this.data.feedbackType;
    wx.showActionSheet({
      itemList: ['功能意见', '产品建议', '安全问题', '其他建议'],
      success: function (res) {
        _this.setData({
          feedbackTypeIndex: res.tapIndex
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 输入意见
   */
  inputOpinion: function (e) {
    this.setData({
      opinion: e.detail.value
    })
  },

  /**
   * 输入联系方式
   */
  inputContact: function (e) {
    this.setData({
      contact: e.detail.value
    })
  },

  /**
   * 提交意见
   */
  submit: function () {

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