// pages/consultation/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    selectAllStatus: true,
    payment: []
  },

  /**
   * 选中缴费项
   */
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let payment = this.data.payment;                    // 获取购物车列表
    const selected = payment[index].selected;         // 获取当前商品的选中状态
    payment[index].selected = !selected;              // 改变状态
    this.setData({
      payment: payment
    });
    this.getTotalPrice();                           // 重新获取总价
  },

  /**
   * 查看详情
   */
  toDetail: function (e) {
    wx.navigateTo({
      url: 'paymentDetail?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 全选
   */
  checkAll: function () {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let payment = this.data.payment;

    for (let i = 0; i < payment.length; i++) {
      payment[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      payment: payment
    });
    this.getTotalPrice();                               // 重新获取总价
  },

  /**
   * 计算总价
   */
  getTotalPrice: function () {
    let payment = this.data.payment;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < payment.length; i++) {         // 循环列表得到每个数据
      if (payment[i].selected) {                   // 判断选中才会计算价格
        total += payment[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      payment: payment,
      totalPrice: total.toFixed(2)
    });
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
      payment: [
        {
          id: 0,
          name: "医药费",
          price: 258,
          time: "2018-08-06 08:54:00",
          selected: true
        },
        {
          id: 1,
          name: "挂号费",
          price: 50,
          time: "2018-08-06 08:54:00",
          selected: true
        }
      ]
    })
    this.getTotalPrice();
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