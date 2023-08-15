// pages/more/feedback.js
const CONFIG = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opinionTitleImgUrl: CONFIG.IMAGE.FEEDBACK.OPINION_TITLE,
    opinionContentImgUrl: CONFIG.IMAGE.FEEDBACK.OPINION_CONTENT,

    // 评价图片
    evaluationImgUrl: CONFIG.IMAGE.FEEDBACK.EVALUATION,

    starCheckedImgUrl: CONFIG.IMAGE.FEEDBACK.STAR_CHECKED,
    starUnCheckedImgUrl: CONFIG.IMAGE.FEEDBACK.STAR_UNCHECKED,

    // 建议内容
    opinion: "",

    starMap: CONFIG.STAR_MAP,

    evaluations: [
      {
        id: 0,
        name: "医院环境",
        image: CONFIG.IMAGE.FEEDBACK.ENVAROMENT,
        star: 0,
        note: ""
      },
      {
        id: 1,
        name: "医生专业技术",
        image: CONFIG.IMAGE.FEEDBACK.SKILL,
        star: 0,
        note: ""
      },
      {
        id: 2,
        name: "医生态度",
        image: CONFIG.IMAGE.FEEDBACK.ATTITUDE,
        star: 0,
        note: ""
      }
    ]
  },

  /**
   * 输入建议
   */
  inputOpinion: function (e) {
    this.setData({
      opinion: e.detail.value
    })
  },

  /**
   * 评分
   */
  chooseStar: function (e) {
    const index = e.currentTarget.dataset.index;
    const star = e.currentTarget.dataset.star;
    let evaluations = this.data.evaluations;
    let evaluation = evaluations[index];
    // console.log(evaluation)
    evaluation.star = star;
    evaluation.note = this.data.starMap[star-1];
    this.setData({
      evaluations: evaluations
    })
  },

  /**
   * 提交反馈
   */
  submit: function () {
    const starEnvironment = this.data.evaluations[0].star;
    const starTechnology = this.data.evaluations[0].star;
    const starAttitude = this.data.evaluations[0].star;
    const opinion = this.data.opinion;
    
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