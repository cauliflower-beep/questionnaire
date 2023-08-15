// pages/index/module/consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contactList: [
      {
        name: "患者热线",
        phone: "027-81973575"
      },
      {
        name: "传真",
        phone: "027-81973575"
      },
      {
        name: "急救中心",
        phone: "027-81973798"
      },
      {
        name: "大学生医保",
        phone: "81977975"
      },
      {
        name: "预防接种",
        phone: "81976249"
      },
      {
        name: "急诊科",
        phone: "81973798"
      },
      {
        name: "国医堂",
        phone: "81973128"
      }
    ]
  },

  /**
   * 拨打电话
   */
  call: function (e) {
    console.log(e);
    wx.showModal({
      title: '系统提示',
      content: '是否拨打' + e.currentTarget.dataset.name +"电话？",
      success: function (res) {
        if (res.confirm) {
          //用户点击确定，拨打电话
          wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
          })
        } else if (res.cancel) {
          //用户点击取消
        }
      }
    })
  }
})