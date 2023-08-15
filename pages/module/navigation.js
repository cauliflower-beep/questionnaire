// pages/index/module/navigation.js

// var amapFile = require('../../../utils/amap-wx.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // height: 700,
    /**
     * 标记点
     */
    // markers: [{
    //   // 显示的图标
    //   iconPath: "../../../resources/images/navigate.png",
    //   // marker点击事件回调会返回此id
    //   id: 0,
    //   // 纬度
    //   latitude: 30.423164,
    //   // 经度
    //   longitude: 114.435376,
    //   // 标注点名称
    //   title:"湖北经济学院校医院",
    //   // 标注图标宽度
    //   width: 50,
    //   // 标注图标高度
    //   height: 50
    // }],

    /**
     * 指定一系列坐标点，从数组第一项连线至最后一项
     */
    // polyline: [{
    //   // 经纬度数组
    //   points: [{
    //     longitude: 114.435376,
    //     latitude: 30.423164
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   // 线的颜色
    //   color: "#FF0000DD",
    //   // 线的宽度
    //   width: 2,
    //   // 是否虚线
    //   dottedLine: true,
    // }],

    /**
     * 在地图上显示控件，控件不随着地图移动
     */
    // controls: [{
    //   // 在控件点击事件回调会返回此id
    //   id: 1,
    //   // 显示的图标
    //   iconPath: '../../../resources/images/navigate.png',
    //   // 控件在地图的位置
    //   position: {
    //     // 距离地图的左边界多远
    //     left: 0,
    //     // 距离地图的上边界多远
    //     top: 300 - 50,
    //     // 控件宽度
    //     width: 50,
    //     // 控件高度
    //     height: 50
    //   },
    //   // 是否可点击
    //   clickable: true
    // }]
  },

  /**
   * 视野发生变化时触发
   */
  // regionchange(e) {
  //   console.log(e.type)
  // },
  
  /**
   * 点击标记点时触发
   */
  // markertap(e) {
  //   console.log(e.markerId)
  // },

  /**
   * 点击控件时触发
   */
  // controltap(e) {
  //   console.log(e.controlId)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //       name: "湖北经济学院校医院",
    //       scale: 16
    //     })
    //   }
    // })
    wx.openLocation({
      latitude: 22.822522,
      longitude: 108.345482,
      name: "广西中医药大学第一附属医院",
      scale: 16
    })
  },

  back: function(){
    wx.switchTab({
      url: '../index/index'
    })
  }
})