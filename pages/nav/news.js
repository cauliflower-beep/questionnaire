// pages/nav/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDms: true,
    isNotice: false,
    dms: [],
    notice: []
  },

  /**
   * 选择【私信】
   */
  chooseDms: function () {
    this.setData({
      isDms: true,
      isNotice: false
    })
  },

  /**
   * 选择【通知】
   */
  chooseNotice: function () {
    this.setData({
      isDms: false,
      isNotice: true
    })
  },

  /**
   * 查看私信详情
   */
  toDmsDetail: function (e) {
    wx.navigateTo({
      url: '../news/dms?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 查看通知详情
   */
  toNoticeDetail: function (e) {
    wx.navigateTo({
      url: '../news/notice?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 查看医师介绍
   */
  toDoctor: function (e) {
    wx.navigateTo({
      url: '../module/expertDetail?id=' + e.currentTarget.dataset.doctorid,
    })
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
    this.setData({
      dms: [
        {
          id: 0,
          doctorId: 0,
          doctorName: '张志平',
          position: '医师',
          time: '08-06 19:06:00',
          question: '这几天感冒了，很不舒服，鼻塞流鼻涕，经常打喷嚏。',
          content: '天气转凉，适度增减衣物。不要沾荤腥冷饮。另外考虑到您的描述不清晰，请及时到医院门诊部问诊拿药。'
        },
        {
          id: 1,
          doctorId: 1,
          doctorName: '胡佳伟',
          position: '教授',
          time: '08-06 19:06:00',
          question: '头疼恶心是怎么回事？',
          content: '日常中的一些不当饮食行为或者习惯常常会造成头疼恶心，例如饮酒过量等。而大多数时候的头疼恶心往往是其他病症引起的，例如偏头疼、颅内炎症。尤其是经常性的头疼恶心，更要考虑是不是得了什么疾病，及时就医诊治。'
        }
      ],

      notice: [
        {
          id: 0,
          time: '08-06 19:06:00',
          title: '关于2017年新生入学体检通知',
          content: '根据学校2017年新生入学工作安排，校医院于9月11日-14日为新生体检时间，经与学校财务处协商决定，9月份学生医药费报销工作暂停一次，10月10日恢复正常。给同学们带来不便，敬请谅解！'
        },
        {
          id: 1,
          time: '08-06 19:06:00',
          title: '招聘启事',
          content: '湖北经济学院医院护理部根据工作需要，决定面向社会公开招聘工作人员，具体事项公告如下：'
        },
        {
          id: 2,
          time: '08-06 19:06:00',
          title: '关于2017年10月份教职工医疗费报销的通知',
          content: '2017年10月份教职工医疗费报销时间具体安排如下：10月19日—10月20日为教职工报销时间，10月18日—10月20日为三个老校区离退休教职工报销时间， 三个校区各报销一天。'
        }
      ]
    })
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