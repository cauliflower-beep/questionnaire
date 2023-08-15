// pages/index/module/department.js
const CONFIG = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: CONFIG.IMAGE.DEPARTMENT_SETTING,

    /* 肾病科 耳鼻咽喉头颈外科 重症医学科 肝胆外科 胸心血管外科 消化内镜诊疗部 胃肠肛门外科一区 胃肠肛门外科二区 脊柱骨伤科 四肢骨伤科 内分泌科 妇科 产科 眼科 康复医学科 呼吸与危重症医学科 风湿病科 血液内科 老年病科、干部病区 中医经典科 泌尿外科 创面修复、周围血管科 神经外科 甲状腺、乳腺外科 麻醉科 中医治未病中心 介入科
    */
    departmentList: [{
        name: "脑病科一病区"
      },
      {
        name: "脑病科二病区"
      },
      {
        name: "肝病科一病区"
      },
      {
        name: "肝病科二病区"
      },
      {
        name: "心血管内科一区"
      },
      {
        name: "心血管内科二区"
      },
      {
        name: "儿科"
      },
      {
        name: "脾胃病科一病区"
      },
      {
        name: "脾胃病科二病区"
      },
      {
        name: "针灸科"
      },
      {
        name: "推拿科"
      }
    ]
  }
})