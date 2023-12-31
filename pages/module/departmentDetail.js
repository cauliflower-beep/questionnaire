// pages/index/module/departmentDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    content: [
      {
        name: "脑病科一病区",
        equipment:"",
        service: "脑病科一病区是国家临床重点专科、国家中医药管理局重点建设专科、广西中医脑病临床医学研究中心、广西高校高等学校高水平创新团队、广西卫健委临床重点专科和重点建设学科、广西中医药管理局重点学科、广西中医药大学重点学科，广西中医脑病区域诊疗中心，国家重大疑难疾病（脑梗死）中西医临床协作试点单位，广西中医药学会脑病专业委员会和广西中医药学会老年病专业委员会挂靠单位，并下辖国家中医药管理局中医扶阳法重点研究室、国家中医药管理局扶阳学术流派传承工作室、国家中医药管理局二级科研实验室，广西名中医工作室，广西第七批自治区级人才小高地“疑难重症中医诊疗研究人才小高地”项目实施基地之一、广西中医药发展联合体脑病专科联盟牵头单位、中西医结合卒中中心、广西中西医眩晕中心。"
      },
      {
        name: "脑病科二病区",
        equipment: "",
        service: "脑病科二病区是邕桂地区中医脑病的医疗、教学及科研中心之一。是国家临床重点专科、国家中医药管理局重点专科、广西医疗卫生重点建设学科、广西卫健委临床重点专科、广西中医药重点建设学科、广西中医药大学重点学科。科室现有东葛和仙葫两个病区，开放床位120张。经过几代人的努力发展，科室在脑血管病溶栓与介入、眩晕、头痛、神经心理与失眠、肌张力障碍、痴呆等亚专业领城保持高水平发展，与国内一流学科同步，引领和带动广西中医脑病学科的建设和发展。"
      },
      {
        name: "肝病科一病区",
        equipment: "",
        service: "肝病科一病区现为国家中医临床研究基地重点病种肝衰竭挂靠专科、国家临床重点肝病专科(卫生部)、国家中医药管理局重点培育学科、国家中医药管理局重点专科、国家中医药管理局“慢性重型肝炎解毒化瘀”重点研究室的挂靠学科、广西政府首批中西医结合肝病特聘专家岗位挂靠学科(中医类唯一的岗位)、广西中医肝病临床医学研究中心、广西中医肝病研究所、广西中医肝病治疗中心、广西高等学校高水平创新团队及卓越学者挂靠学科、广西医疗卫生重点建设学科广西重点中医专科、广西中医药大学重点学科。广西中西医结合学会肝病分会、广西中医药学会肝胆病专业委员会挂靠学科。众多荣誉的获得充分彰显了本学科已成为国内著名、广西最具核心竞争力的临床优势学科及专科。同时，拥有中医内科学（肝病方向）博士学位点、硕士学位点，是集医疗、教学、科研及继续再教育为一体的综合性医疗中心。"
      },
      {
        name: "肝病科二病区",
        // equipment: "检耳镜、检眼镜、咽喉镜、前鼻镜。",
        service: "肝病科为第二批国家中医临床研究基地、国家临床重点专科、国家中医药管理局重点学科、国家中医药管理局重点专科、国家中医药管理局“慢性重型肝炎解毒化瘀”重点研究室挂靠学科；广西中医肝病临床医学研究中心、广西政府首批和第五批中西医结合肝病防治研究特聘专家岗位、广西高校高水平创新团队及卓越学者挂靠学科；广西中医肝病治疗中心、广西医疗卫生重点建设学科、广西重点中医专科等。是中国民族医药学会肝病分会副会长单位，广西中西医结合肝病学会和广西中医药学会肝胆病专业委员会挂靠科室。"
      },
      {
        name: "心血管内科一区",
        // equipment: "牙科综合治疗椅一台、高温灭菌器、超声清洗器、超声洁牙机。",
        service: "心血管内科一病区为国家临床重点专科、国家中医重点专科，广西实力最强的中医心血管病治疗中心。科室开放床位55张，其中CCU床位11张，配备有2个心导管介入室，美国GE数字平板血管造影机、多导电生理仪及射频消融仪、主动脉球囊反搏仪、心电图运动平板测试仪、美国惠普监护除颤仪、中央监护仪、日本光电遥测心电监护仪，美国GE多功能床边监护仪，临时心脏起搏分析仪、Drager呼吸机、沙立文多功能无创呼吸机等一系列先进的专科诊疗设备。拥有1个全国名老中医工作室，1个心脏康复治疗中心和心脏生物医学实验中心。同时拥有全国名老中医、广西名中医，教授、博士、硕士等高素质人才构成的医疗护理技术团队。经过几代人的努力，该科目前已经发展为除病房和门诊外同时拥有冠心病重症监护室(CCU)、心脏介入治疗中心，集临床、科研、教学为一体的综合性科室。"
      },
      {
        name: "检验科",
        equipment: "全自动生化仪、半自动生化仪、全自动血球生化仪、尿液分析仪。",
        service: "血液分析、尿液分析、乙肝五项、肝功能全套（ALT、AST、TP、ALB、TB、DB）、肾功能全套（Cre、BUN）、血脂（CHO、TG、HDL、LDL）、尿酸、血糖、葡萄糖、血型、妊娠试验、大便常规、大便隐血。"
      },
      {
        name: "B超室",
        equipment: "美国进口B超",
        service: "腹部B超、小器官B超、妇科、产科检查。"
      },
      {
        name: "综合门诊部",
        equipment: "",
        service: "综合门诊部由三个全科诊室、急诊抢救室、输液观察室、换药室组成，该团队有六名医生和八名护士，全科诊室能对常见的内、外、皮肤科等疾病做出诊断和提出治疗方案。急诊抢救室拥有心电图机、心电监护仪、呼吸机等全套的急诊抢救设备，能及时的对各种急、危、重症进行抢救治疗。换药室能为创伤、手术病人提供换药，为骨折病人进行石膏固定，开展脓肿切排、拔甲等门诊小手术。"
      },
      {
        name: "康复科",
        equipment: "多功能牵引床、超短波治疗仪、中频治疗仪、低周波治疗仪、TDP神灯。",
        service: "超短波治疗机、中频治疗仪、低周波治疗仪、颈腰痛治疗仪、TDP神灯、能采用牵引、按摩手法、理疗、火罐、药物离子透入、也能通过多种手段治疗偏头痛、尤其在治疗颈椎小关节紊乱、颈椎病、腰椎小关节紊乱、腰椎间盘突出症、退行性腰椎病、网球肘、腕管综合症、跟骨痛等疾病方面疗效显著。"
      },
      {
        name: "公共卫生科",
        equipment: "",
        service: "公共卫生科由办公室、儿保室、妇保室、计划生育指导室组成。常年开展健康体检、妇女保健、儿童保健、儿童4、2、1体检，对外承接各种体检任务，组织开展健康教育、健康咨询、心理咨询、计划生育服务、上门服务及妇产科的常见疾病进行诊断和治疗等工作。组织对环境卫生和食堂卫生的检查和监督，对传染性疾病进行监测、报告和管理，在校党委和校行政的领导下做好我校突发性公共卫生事件进行调查和处理。"
      },
      {
        name: "洪山门诊部",
        equipment: "",
        service: "洪山门诊部是为原老校区离退休同志的医疗就诊专门设立的门诊部，有经验丰富的副主任医师坐诊，对老年病患者给予了极大的医疗帮助。每周还安排医护人员到老校区巡诊、送药。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name
    });
    // 修改页面标题
    wx.setNavigationBarTitle({
      title: options.name
    })
  }
})