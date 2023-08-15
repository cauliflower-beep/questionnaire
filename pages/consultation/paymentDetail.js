// pages/consultation/paymentDetail.js
const CONFIG = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipsImgUrl: CONFIG.ICON.TIPS_SMALL,
    tips: [
      {
        tip: "如对缴费明细存有疑问，请前往医院服务窗口处理。"
      },
      {
        tip: "支付过程中如遇异常，请返回重试，持续异常请在【我的】页面中进行【意见反馈】。"
      }
    ],
    id: '',
    totalPrice: '',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;

    this.setData({
      id: id,
      totalPrice: 29.41,
      list: [
        {
          id: 0,
          name: "皮内注射",
          price: 3.5,
          num: 1,
          quantifier: "次"
        },
        {
          id: 1,
          name: "青霉素皮试剂",
          price: 25.91,
          num: 1,
          quantifier: "西林"
        }
      ]
    })
  },

  /**
   * 结算
   */
  settlement: function () {

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