// pages/index/consultation/registration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    department: [
      {
        name: '急诊科',
        isAllow: true
      },
      {
        name: '全科诊室',
        isAllow: false
      },
      {
        name: '外科诊室',
        isAllow: true
      },
      {
        name: '口腔科',
        isAllow: false
      },
      {
        name: '妇科',
        isAllow: false
      },
      {
        name: '耳鼻喉科',
        isAllow: false
      }
    ],
    departmentIndex: 0,
    isRegister: true,
    loadingImgUrl: "../../images/loading.gif",
    isLoading: false
  },

  /**
   * 选择科室
   */
  chooseDepartment: function () {
    const _this = this;
    const department = this.data.department;
    wx.showActionSheet({
      itemList: ['急诊科', '全科诊室', '外科诊室', '口腔科', '妇科', '耳鼻喉科'],
      success: function (res) {
        _this.setData({
          departmentIndex: res.tapIndex,
          isRegister: department[res.tapIndex].isAllow
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 一键挂号
   */
  toRegister: function () {
    this.setData({
      isLoading: true
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