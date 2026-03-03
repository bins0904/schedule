// 課表資料
const scheduleData = [
    // Week 1
    { w: 1, date: "2026/2/23", day: "一", time: "08:10-10:00", type: "緒論", title: "臨床醫學簡介", teacher: "方基存", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/23", day: "一", time: "10:10-12:00", type: "臨診", title: "病史詢問與理學檢查方法", teacher: "方基存", loc: "B0204", note: "需帶臨診手冊" },
    { w: 1, date: "2026/2/23", day: "一", time: "13:10-14:00", type: "臨技", title: "課程簡介、臨床輪訓介紹", teacher: "謝明儒", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/23", day: "一", time: "14:10-17:00", type: "臨技實作", title: "實作(一) 獲取同意書", teacher: "謝明儒/溫志聰", loc: "各診間", note: "G1-G12 分組跑台" },
    { w: 1, date: "2026/2/24", day: "二", time: "09:10-10:00", type: "緒論", title: "精準醫學簡介", teacher: "謝佳訓", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/24", day: "二", time: "10:10-11:00", type: "臨診", title: "心臟與血管檢查", teacher: "許隆安", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/24", day: "二", time: "11:10-12:00", type: "緒論", title: "臨床推理", teacher: "鄭昌錡", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/24", day: "二", time: "13:10-14:00", type: "臨技", title: "病房作業、肌肉/皮內/皮下注射", teacher: "林慧玲", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/24", day: "二", time: "14:10-15:00", type: "臨技", title: "耳鼻喉檢查", teacher: "傅嘉祥", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/24", day: "二", time: "15:10-17:00", type: "臨技", title: "基礎心電圖", teacher: "王兆弘", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/25", day: "三", time: "10:10-11:00", type: "臨診", title: "胸腔與肺部檢查", teacher: "林恕民", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/25", day: "三", time: "11:10-12:00", type: "緒論", title: "影像診斷學緒論", teacher: "蕭庭毅", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/25", day: "三", time: "13:10-15:00", type: "臨診工作坊", title: "前導：病史詢問實作", teacher: "鄭昌錡", loc: "B0204", note: "G1-G8 適用" },
    { w: 1, date: "2026/2/25", day: "三", time: "15:10-16:00", type: "臨技", title: "醫療公共議題與倡議", teacher: "謝明儒", loc: "B0204", note: "" },
    { w: 1, date: "2026/2/25", day: "三", time: "16:10-17:00", type: "臨技", title: "醫病溝通", teacher: "陳姵蓉", loc: "B0204", note: "" },

    // Week 2
    { w: 2, date: "2026/3/2", day: "一", time: "08:10-10:00", type: "臨診", title: "神經學檢查", teacher: "張㝢智", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/2", day: "一", time: "10:10-11:00", type: "臨診", title: "造血系統檢查", teacher: "張鴻", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/2", day: "一", time: "11:10-12:00", type: "臨診", title: "脊椎與四肢檢查", teacher: "郭昶甫", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/2", day: "一", time: "14:10-17:00", type: "臨診工作坊", title: "前導：技能實作", teacher: "謝明儒/徐稟智", loc: "B2 技能中心", note: "G1-G8 全體技能實作" },
    { w: 2, date: "2026/3/3", day: "二", time: "08:10-11:00", type: "臨診工作坊", title: "前導：Neuro實作", teacher: "廖庭偉/馮博裕", loc: "第一會議室/多功能教室", note: "G1-G8 全體Neuro實作" },
    { w: 2, date: "2026/3/3", day: "二", time: "11:10-12:00", type: "臨診", title: "婦科檢查", teacher: "徐振傑", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/3", day: "二", time: "14:10-17:00", type: "臨診工作坊", title: "前導：分站跑台 (GI/Chest/GYN/CV)", teacher: "多位醫師", loc: "各教室", note: "G1-G8 依組別跑台" },
    { w: 2, date: "2026/3/4", day: "三", time: "10:10-11:00", type: "臨診", title: "內分泌系統檢查", teacher: "林嘉鴻", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/4", day: "三", time: "11:10-12:00", type: "緒論", title: "住院與病程病歷記錄", teacher: "許翔皓", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/4", day: "三", time: "13:10-14:00", type: "緒論", title: "核醫學簡介", teacher: "林昆儒", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/6", day: "五", time: "08:10-09:00", type: "臨診", title: "眼睛檢查", teacher: "林耕國", loc: "B0204", note: "" },
    { w: 2, date: "2026/3/6", day: "五", time: "10:10-12:00", type: "臨技", title: "牙科與全身健康", teacher: "林秀娜", loc: "B0204", note: "" },

    // Week 3
    { w: 3, date: "2026/3/9", day: "一", time: "08:10-10:00", type: "緒論", title: "口腔預防保健", teacher: "林秀娜", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/9", day: "一", time: "10:10-12:00", type: "臨診", title: "老年牙科病理", teacher: "林秀娜", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/10", day: "二", time: "09:10-10:00", type: "臨診", title: "耳鼻喉頭頸檢查", teacher: "方谷豪", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/10", day: "二", time: "10:10-11:00", type: "臨診", title: "男性泌尿生殖檢查", teacher: "邵翊紘", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/10", day: "二", time: "14:10~17:00", type: "前導工作坊", title: "前導：GYN/GI/CV/chest", teacher: "不同老師", loc: "B2臨床技能中心", note: "G1~G8" },
    { w: 3, date: "2026/3/11", day: "三", time: "10:10-11:00", type: "臨診", title: "皮膚毛髮指甲檢查", teacher: "莊雅慧", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/11", day: "三", time: "11:10-12:00", type: "臨診", title: "小兒科病人檢查", teacher: "江東和", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/11", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第1次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 3, date: "2026/3/13", day: "五", time: "09:10-10:00", type: "緒論", title: "老年醫學簡介", teacher: "廖國臣", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/13", day: "五", time: "10:10-11:00", type: "緒論", title: "醫學專業素養", teacher: "廖國臣", loc: "B0204", note: "" },
    { w: 3, date: "2026/3/13", day: "五", time: "11:10-12:00", type: "臨診", title: "腹部與直腸乙狀結腸檢查", teacher: "鄭文睿", loc: "B0204", note: "" },

    // Week 4
    { w: 4, date: "2026/3/16", day: "一", time: "10:10-11:00", type: "心血管", title: "心律不整與處置", teacher: "張伯丞", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/16", day: "一", time: "11:10-12:00", type: "心血管", title: "心臟腫瘤與創傷", teacher: "周宗川", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/16", day: "一", time: "13:10-14:00", type: "臨技", title: "臨床推理與虛擬電子病人 (DxR)", teacher: "謝明儒", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/16", day: "一", time: "14:10-15:00", type: "臨技", title: "骨折觀念與石膏技巧", teacher: "高軒楷", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/16", day: "一", time: "15:10-17:00", type: "臨技實作", title: "實作(二) 石膏操作技巧", teacher: "高軒楷", loc: "骨科診間", note: "G1-G12 分組跑台" },
    { w: 4, date: "2026/3/17", day: "二", time: "09:10-10:00", type: "心血管", title: "冠狀動脈疾病", teacher: "張其任", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/17", day: "二", time: "10:10-11:00", type: "心血管", title: "動脈粥狀硬化外科治療", teacher: "覃紹凱", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/17", day: "二", time: "11:10-12:00", type: "心血管", title: "動脈粥狀硬化與血脂異常", teacher: "鄭正一", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/17", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第2次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 4, date: "2026/3/18", day: "三", time: "10:10-11:00", type: "心血管", title: "胎兒循環與先天性心臟病外科", teacher: "武孟餘", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/18", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第3次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 4, date: "2026/3/20", day: "五", time: "08:10-09:00", type: "心血管", title: "深部靜脈栓塞/肺高壓", teacher: "賀萬靖", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/20", day: "五", time: "10:10-11:00", type: "心血管", title: "心包膜疾病/心肌病變", teacher: "許隆安", loc: "B0204", note: "" },
    { w: 4, date: "2026/3/20", day: "五", time: "11:10-12:00", type: "心血管", title: "心臟復健", teacher: "黃書群", loc: "B0204", note: "" },

    // Week 5
    { w: 5, date: "2026/3/23", day: "一", time: "09:10-10:00", type: "心血管", title: "心衰竭 Part 1", teacher: "林佳濱", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/23", day: "一", time: "10:10-11:00", type: "心血管", title: "主動脈與周邊動脈疾病", teacher: "劉國聖", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/23", day: "一", time: "11:10-12:00", type: "心血管", title: "瓣膜心臟病外科治療", teacher: "陳紹緯", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/23", day: "一", time: "13:10-17:00", type: "臨技實作", title: "實作(三) 手術室無菌/刷手", teacher: "許志杰/陳怡甫", loc: "另發通知", note: "G1-G12 各組別請留意集合時間" },
    { w: 5, date: "2026/3/23", day: "一", time: "18:10-20:00", type: "考試", title: "🔥 臨診考試", teacher: "張玉喆", loc: "工學六樓", note: "Physical Dx Exam" },
    { w: 5, date: "2026/3/24", day: "二", time: "08:10-09:00", type: "心血管", title: "心導管與冠狀動脈攝影", teacher: "謝宜璋", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/24", day: "二", time: "10:10-11:00", type: "心血管", title: "非侵入性檢查: Echo & Nuclear", teacher: "王俊力", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/24", day: "二", time: "11:10-12:00", type: "心血管", title: "非侵入性檢查: MRI/CT", teacher: "許銘益", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/24", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第4次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 5, date: "2026/3/25", day: "三", time: "10:10-11:00", type: "心血管", title: "瓣膜心臟病內科治療", teacher: "陳俊吉", loc: "B0204", note: "" },
    { w: 5, date: "2026/3/25", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第5次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 5, date: "2026/3/25", day: "三", time: "18:10-20:00", type: "考試", title: "🔥 緒論筆試", teacher: "方基存", loc: "工學六樓", note: "Intro Final Exam" },
    { w: 5, date: "2026/3/27", day: "五", time: "07:10-09:00", type: "PBL", title: "CV PBL-1", teacher: "15位老師", loc: "R4-R18", note: "" },

    // Week 6
    { w: 6, date: "2026/3/30", day: "一", time: "07:10-09:00", type: "PBL", title: "CV PBL-2", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 6, date: "2026/3/30", day: "一", time: "09:10-10:00", type: "心血管", title: "高血壓診斷與處置", teacher: "洪國竣", loc: "B0204", note: "" },
    { w: 6, date: "2026/3/30", day: "一", time: "10:10-12:00", type: "心血管", title: "發紺性先天性心臟病/川崎氏症", teacher: "李昱昕", loc: "B0204", note: "" },
    { w: 6, date: "2026/3/30", day: "一", time: "13:10-16:00", type: "臨技實作", title: "實作(四) 溝通訓練", teacher: "唐婉如", loc: "另發通知", note: "G1-G12 Workshop" },
    { w: 6, date: "2026/3/30", day: "一", time: "18:10-20:00", type: "考試", title: "🔥 臨技期中考", teacher: "謝明儒", loc: "工學六樓", note: "Skills Midterm" },
    { w: 6, date: "2026/3/31", day: "二", time: "08:10-09:00", type: "心血管", title: "心衰竭 Part 2: 處置", teacher: "謝明哲", loc: "B0204", note: "" },
    { w: 6, date: "2026/3/31", day: "二", time: "09:10-10:00", type: "心血管", title: "心律不整生理與處置", teacher: "詹益欣", loc: "B0204", note: "" },
    { w: 6, date: "2026/3/31", day: "二", time: "10:10-12:00", type: "心血管", title: "非發紺性先天性心臟病", teacher: "鍾宏濤", loc: "B0204", note: "" },
    { w: 6, date: "2026/3/31", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第6次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },

    // Week 7
    { w: 6, date: "2026/4/1", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第7次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 7, date: "2026/4/7", day: "二", time: "09:10-10:10", type: "呼吸", title: "呼吸道發育與氣喘", teacher: "邱志勇", loc: "B0204", note: "" },
    { w: 7, date: "2026/4/7", day: "二", time: "10:10-12:00", type: "呼吸", title: "重症: 呼吸衰竭與ARDS", teacher: "呂紹煒", loc: "B0204", note: "" },
    { w: 7, date: "2026/4/7", day: "二", time: "13:10-17:00", type: "臨技實作", title: "分組跑台時段", teacher: "多位醫師", loc: "B2 技能中心", note: "G1-G12 (請見臨技附表確認當日項目)" },
    { w: 7, date: "2026/4/8", day: "三", time: "10:10-12:00", type: "呼吸", title: "氣道與間質性肺病", teacher: "林鴻銓", loc: "B0204", note: "" },
    { w: 7, date: "2026/4/8", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第8次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 7, date: "2026/4/10", day: "五", time: "07:10-09:00", type: "PBL", title: "Pul PBL-1", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 7, date: "2026/4/10", day: "五", time: "10:10-11:00", type: "呼吸", title: "肺部手術 (VATS)", teacher: "陳維勳", loc: "B0204", note: "" },

    // Week 8
    { w: 8, date: "2026/4/13", day: "一", time: "07:10-09:00", type: "PBL", title: "Pul PBL-2", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 8, date: "2026/4/13", day: "一", time: "09:10-10:00", type: "呼吸", title: "呼吸控制與睡眠呼吸中止", teacher: "莊立邦", loc: "B0204", note: "" },
    { w: 8, date: "2026/4/13", day: "一", time: "10:10-11:00", type: "呼吸", title: "核醫學與肺癌RTO", teacher: "王俊傑/何宗穎", loc: "B0204", note: "" },
    { w: 8, date: "2026/4/13", day: "一", time: "11:10-12:00", type: "呼吸", title: "小兒重症", teacher: "林建志", loc: "B0204", note: "" },
    { w: 8, date: "2026/4/13", day: "一", time: "13:10-17:00", type: "臨技實作", title: "分組跑台時段", teacher: "多位醫師", loc: "B2 技能中心", note: "G1-G12 (請見臨技附表確認當日項目)" },
    { w: 8, date: "2026/4/14", day: "二", time: "08:10-10:00", type: "呼吸", title: "腫瘤性肺病", teacher: "鍾福財", loc: "B0204", note: "" },
    { w: 8, date: "2026/4/14", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第9次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 8, date: "2026/4/15", day: "三", time: "10:10-11:00", type: "呼吸", title: "胸壁與縱膈腔", teacher: "邱健宏", loc: "B0204", note: "" },
    { w: 8, date: "2026/4/15", day: "三", time: "11:10-12:00", type: "呼吸", title: "肺部影像診斷", teacher: "黃耀祥", loc: "B0204", note: "" },
    { w: 8, date: "2026/4/15", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第10次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 8, date: "2026/4/15", day: "三", time: "19:00-21:00", type: "呼吸", title: "感染性肺病", teacher: "林恕民", loc: "B0204", note: "晚間課程" },
    { w: 8, date: "2026/4/17", day: "五", time: "18:10-20:00", type: "考試", title: "🔥 心血管筆試", teacher: "謝宜璋", loc: "工學六樓", note: "CV Final Exam" },

    // Week 9
    { w: 9, date: "2026/4/20", day: "一", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第11次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 9, date: "2026/4/21", day: "二", time: "13:10-17:00", type: "臨技實作", title: "分組跑台時段", teacher: "多位醫師", loc: "B2 技能中心", note: "G1-G12 (請見臨技附表確認當日項目)" },
    { w: 9, date: "2026/4/22", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第12次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 9, date: "2026/4/24", day: "五", time: "07:10-09:00", type: "PBL", title: "GI PBL-1", teacher: "15位老師", loc: "R4-R18", note: "" },

    // Week 10
    { w: 10, date: "2026/4/27", day: "一", time: "07:10-09:00", type: "PBL", title: "GI PBL-2", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 10, date: "2026/4/27", day: "一", time: "13:10-17:00", type: "臨技實作", title: "分組跑台時段", teacher: "多位醫師", loc: "B2 技能中心", note: "G1-G12 (請見臨技附表確認當日項目)" },
    { w: 10, date: "2026/4/27", day: "一", time: "18:10-20:00", type: "考試", title: "🔥 呼吸筆試", teacher: "林鴻銓", loc: "工學六樓", note: "Pul Final Exam" },
    { w: 10, date: "2026/4/28", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第13次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 10, date: "2026/4/29", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第14次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },

    // Week 11
    { w: 11, date: "2026/5/4", day: "一", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第15次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 11, date: "2026/5/5", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第16次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 11, date: "2026/5/6", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第17次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 11, date: "2026/5/8", day: "五", time: "10:10-12:00", type: "免疫", title: "課程介紹與病毒感染", teacher: "黃玉成", loc: "B0204", note: "" },

    // Week 12
    { w: 12, date: "2026/5/11", day: "一", time: "08:10-09:00", type: "免疫", title: "黴菌感染", teacher: "黃柏諺", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/11", day: "一", time: "10:10-11:00", type: "免疫", title: "小兒感染 (1)", teacher: "蔡明翰", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/11", day: "一", time: "11:10-12:00", type: "免疫", title: "小兒感染 (2)", teacher: "何恭之", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/11", day: "一", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第18次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 12, date: "2026/5/12", day: "二", time: "08:10-09:00", type: "免疫", title: "小兒過敏", teacher: "陳力振", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/12", day: "二", time: "09:10-10:00", type: "免疫", title: "抗生素治療與管理", teacher: "邱政洵", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/12", day: "二", time: "10:10-12:00", type: "免疫", title: "SLE/血管炎/過敏氣喘", teacher: "余光輝", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/12", day: "二", time: "13:10-17:00", type: "臨技實作", title: "分組跑台時段", teacher: "多位醫師", loc: "B2 技能中心", note: "G1-G12 (請見臨技附表確認當日項目)" },
    { w: 12, date: "2026/5/13", day: "三", time: "10:10-11:00", type: "免疫", title: "疫苗接種", teacher: "謝育嘉", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/13", day: "三", time: "11:10-12:00", type: "免疫", title: "敗血症與宿主反應", teacher: "黃景泰", loc: "B0204", note: "" },
    { w: 12, date: "2026/5/13", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第19次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 12, date: "2026/5/15", day: "五", time: "07:10-09:00", type: "PBL", title: "HO PBL-1", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 12, date: "2026/5/15", day: "五", time: "10:10-12:00", type: "免疫", title: "結核病與非典型感染", teacher: "吳丁樹", loc: "B0204", note: "" },

    // Week 13
    { w: 13, date: "2026/5/18", day: "一", time: "07:10-09:00", type: "PBL", title: "HO PBL-2", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 13, date: "2026/5/18", day: "一", time: "09:10-10:00", type: "免疫", title: "HIV與性傳染病", teacher: "陳南伃", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/18", day: "一", time: "11:10-12:00", type: "免疫", title: "重要侵襲性細菌感染", teacher: "鄭鈞文", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/18", day: "一", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第20次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 13, date: "2026/5/18", day: "一", time: "18:10-20:00", type: "考試", title: "🔥 消化筆試", teacher: "許朝偉", loc: "工學六樓", note: "GI Final Exam" },
    { w: 13, date: "2026/5/19", day: "二", time: "08:10-09:00", type: "免疫", title: "移植免疫學", teacher: "李威震", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/19", day: "二", time: "09:10-11:00", type: "免疫", title: "RA/關節炎/脊椎關節病變", teacher: "郭昶甫", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/19", day: "二", time: "11:10-12:00", type: "免疫", title: "小兒風濕病", teacher: "葉國偉", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/19", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第21次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 13, date: "2026/5/20", day: "三", time: "10:10-11:00", type: "免疫", title: "關節炎復健治療", teacher: "陳柏旭", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/20", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第22次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 13, date: "2026/5/22", day: "五", time: "08:10-09:00", type: "免疫", title: "風濕免疫感染影像學", teacher: "吳振德", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/22", day: "五", time: "10:10-11:00", type: "免疫", title: "免疫系統發育", teacher: "林思偕", loc: "B0204", note: "" },
    { w: 13, date: "2026/5/22", day: "五", time: "11:10-12:00", type: "免疫", title: "原發性免疫缺乏", teacher: "李文益", loc: "B0204", note: "" },

    // Week 14
    { w: 14, date: "2026/5/25", day: "一", time: "13:10-17:00", type: "臨技實作", title: "分組跑台時段", teacher: "多位醫師", loc: "B2 技能中心", note: "G1-G12 (請見臨技附表確認當日項目)" },
    { w: 14, date: "2026/5/26", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第23次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 14, date: "2026/5/27", day: "三", time: "14:00-17:00", type: "臨診、實診輪訓", title: "第24次輪訓", teacher: "各科醫師", loc: "各專科", note: "G1-G8 依輪訓大表前往各科" },
    { w: 14, date: "2026/5/28", day: "四", time: "18:10-20:00", type: "考試", title: "🔥 實診期末考", teacher: "誰啊", loc: "不知道", note: "" },
    { w: 14, date: "2026/5/29", day: "五", time: "07:10-09:00", type: "PBL", title: "Endo PBL-1", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 14, date: "2026/5/29", day: "五", time: "13:10-16:00", type: "臨技", title: "OSCE 考前自主練習", teacher: "自由參加", loc: "B2技能", note: "G1-G12 分組練習" },

    // Week 15
    { w: 15, date: "2026/6/1", day: "一", time: "07:10-09:00", type: "PBL", title: "Endo PBL-2", teacher: "15位老師", loc: "R4-R18", note: "" },
    { w: 15, date: "2026/6/1", day: "一", time: "13:10-16:00", type: "臨技", title: "OSCE 考前自主練習", teacher: "自由參加", loc: "B2技能", note: "G1-G12 分組練習" },
    { w: 15, date: "2026/6/1", day: "一", time: "18:10-20:00", type: "考試", title: "🔥 免疫筆試", teacher: "黃玉成", loc: "工學六樓", note: "HO Final Exam" },
    { w: 15, date: "2026/6/2", day: "二", time: "13:10-16:00", type: "臨技", title: "OSCE 考前自主練習", teacher: "自由參加", loc: "B2技能", note: "G1-G12 分組練習" },
    { w: 15, date: "2026/6/3", day: "三", time: "13:10-16:00", type: "臨技", title: "OSCE 考前自主練習", teacher: "自由參加", loc: "B2技能", note: "G1-G12 分組練習" },

    // Week 16
    { w: 16, date: "2026/6/8", day: "一", time: "08:10-17:00", type: "考試", title: "🔥 期末 OSCE 考試", teacher: "謝明儒", loc: "另發通知", note: "整天" },
    { w: 16, date: "2026/6/8", day: "一", time: "14:00-17:00", type: "臨診、實診輪訓", title: "輪訓期末補充教學", teacher: "各科醫師", loc: "各專科", note: "" },
    { w: 16, date: "2026/6/9", day: "二", time: "08:10-17:00", type: "考試", title: "🔥 期末 OSCE 考試", teacher: "謝明儒", loc: "另發通知", note: "整天" },
    { w: 16, date: "2026/6/9", day: "二", time: "14:00-17:00", type: "臨診、實診輪訓", title: "輪訓期末補充教學", teacher: "各科醫師", loc: "各專科", note: "" },
    { w: 16, date: "2026/6/10", day: "三", time: "10:00-12:30", type: "考試", title: "🔥 DxR 考試", teacher: "謝明儒", loc: "B0204", note: "" },
    { w: 16, date: "2026/6/12", day: "五", time: "10:10-12:00", type: "考試", title: "🔥 內分泌筆試", teacher: "劉鳳炫", loc: "工學六樓", note: "Endo Final Exam" },

    // Week 17
    { w: 17, date: "2026/6/15", day: "一", time: "整天", type: "活動", title: "分組座談：專業素養", teacher: "", loc: "另發通知", note: "6/15-6/18" },
];

// 輪訓注意事項統一顯示
scheduleData.forEach((item) => {
    if (item.type === "臨診、實診輪訓") {
        item.note = "根據輪訓課表";
    }
    if (item.type && item.type.includes("考試")) {
        item.note = "";
    }
});

// 臨診、實診輪訓課表的 Google Sheet 連結
const ROTATION_SHEET_URL = "https://docs.google.com/spreadsheets/d/140pst2xkg9MrkzAR9pulCGINgD92W8LeTAKh2OXS-JE/edit?gid=1680614987#gid=1680614987";

// 系統課課表（PBL）的 Google Sheet 連結
const PBL_SHEET_URL = "https://docs.google.com/spreadsheets/d/1ijyCRlnWAL_tHmnb27sfoerfcsdwSWpPed9I-BcuI1A/edit?gid=0#gid=0";

// 輪訓規則 PDF（與 HTML 同資料夾下的檔案）
const ROTATION_RULE_PDF_URL = "輪訓規則.pdf";

// 狀態變數
let selectedWeek = null;
let selectedDate = "";
let isMidtermMode = false;

// DOM
const weekSelectEl = document.getElementById("week-select");
const dateSelectorEl = document.getElementById("date-selector");
const scheduleContainerEl = document.getElementById("schedule-container");
const midtermButtonEl = document.getElementById("midterm-button");
const rotationButtonEl = document.getElementById("rotation-button");
const pblButtonEl = document.getElementById("pbl-button");
const rotationRuleButtonEl = document.getElementById("rotation-rule-button");
const rotationModalEl = document.getElementById("rotation-modal");
const rotationIframeEl = document.getElementById("rotation-iframe");
const rotationCloseEl = document.getElementById("rotation-close");
const rotationOpenNewEl = document.getElementById("rotation-open-new");
const sheetModalTitleEl = document.getElementById("sheet-modal-title");

// 有課的週次
const availableWeeks = [...new Set(scheduleData.map((item) => item.w))].sort((a, b) => a - b);

// 工具：把 "2026/2/23" 轉成 Date 物件
function parseDate(value) {
    const [y, m, d] = value.split("/").map(Number);
    return new Date(y, m - 1, d);
}

function toGoogleSheetEmbedUrl(url) {
    if (!url) return "";
    const trimmed = String(url).trim();
    if (!trimmed) return "";

    // 已經是 pubhtml / preview 之類可嵌入形式
    if (trimmed.includes("/pubhtml") || trimmed.includes("/preview")) return trimmed;

    // 一般分享連結：.../spreadsheets/d/<ID>/edit?...(&gid=123)
    const match = trimmed.match(/https?:\/\/docs\.google\.com\/spreadsheets\/d\/([^/]+)\//i);
    if (!match) return trimmed;

    const id = match[1];
    let gid = "";
    try {
        const u = new URL(trimmed);
        const g = u.searchParams.get("gid");
        if (g) gid = g;
    } catch {
        // ignore
    }

    // 注意：若未「發布到網路」，iframe 可能會被擋；但 preview 是最常見可用的內嵌形式之一
    const base = `https://docs.google.com/spreadsheets/d/${id}/preview`;
    return gid ? `${base}?gid=${encodeURIComponent(gid)}` : base;
}

function openSheetModal(title, url) {
    if (!rotationModalEl || !rotationIframeEl || !rotationOpenNewEl || !sheetModalTitleEl) return;
    if (!url) {
        alert("尚未設定連結。");
        return;
    }

    sheetModalTitleEl.textContent = title || "Google Sheet";
    rotationIframeEl.title = title || "Google Sheet";
    rotationOpenNewEl.href = url;
    rotationIframeEl.src = toGoogleSheetEmbedUrl(url);

    rotationModalEl.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeRotationModal() {
    if (!rotationModalEl || !rotationIframeEl) return;
    rotationModalEl.hidden = true;
    rotationIframeEl.removeAttribute("src");
    document.body.style.overflow = "";
}

function getHomeworkFormData() {
    if (!hwDateEl || !hwTitleEl) return null;
    const date = hwDateEl.value;
    const title = hwTitleEl.value.trim();
    const course = hwCourseEl ? hwCourseEl.value : "";
    const deadline = hwDeadlineEl ? hwDeadlineEl.value : "";
    const note = hwNoteEl ? hwNoteEl.value.trim() : "";

    if (!date || !title) {
        alert("請至少填寫日期與作業內容。");
        return null;
    }
    return { date, title, course, deadline, note };
}

function handleAddHomework() {
    const data = getHomeworkFormData();
    if (!data) return;

    const baseItem = {
        ...data,
        createdAt: Date.now(),
        uid: currentUser ? currentUser.uid : null,
        done: false,
    };

    // 本機
    const localRaw = window.localStorage.getItem("schedule_homework_local") || "[]";
    let items;
    try {
        items = JSON.parse(localRaw);
    } catch {
        items = [];
    }
    items.push({ id: `local-${Date.now()}`, ...baseItem });
    window.localStorage.setItem("schedule_homework_local", JSON.stringify(items));

    // 雲端
    if (currentUser && firebaseDb) {
        firebaseDb.collection("homework").add(baseItem).catch((error) => {
            console.error("新增雲端作業失敗", error);
        });
    }

    currentHomeworkItems = items;
    renderHomeworkList(currentHomeworkItems);
    if (hwTitleEl) hwTitleEl.value = "";
    if (hwNoteEl) hwNoteEl.value = "";
    if (hwCourseEl) hwCourseEl.value = data.course || "";
    if (hwDeadlineEl) hwDeadlineEl.value = "";
    if (hwDateEl) {
        // 保持日期不變，方便連續輸入同一天的作業
    }

    // 關閉小視窗，回到清爽列表
    if (hwModalEl) {
        hwModalEl.hidden = true;
        document.body.style.overflow = "";
    }
}

function renderHomeworkList(items) {
    if (!hwListEl || !hwAlertEl) return;
    hwListEl.innerHTML = "";

    const now = new Date();
    const nowMs = now.getTime();
    const soonThresholdMs = nowMs + 2 * 24 * 60 * 60 * 1000; // 48 小時內

    let overdueCount = 0;
    let todayCount = 0;

    const sorted = [...items].sort((a, b) => {
        if (a.deadline && b.deadline) {
            return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        }
        return (a.createdAt || 0) - (b.createdAt || 0);
    });

    sorted.forEach((item) => {
        const li = document.createElement("li");
        li.className = "homework-item";
        if (item.done) {
            li.classList.add("homework-item--done");
        }

        const top = document.createElement("div");
        top.className = "homework-item__top";

        const titleEl = document.createElement("div");
        titleEl.className = "homework-item__title";
        titleEl.textContent = item.title;

        const badge = document.createElement("span");
        badge.className = "homework-item__badge homework-item__badge--normal";
        badge.textContent = "未設定截止";

        if (item.deadline) {
            const d = new Date(item.deadline);
            const dateLabel = `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
            badge.textContent = `截止：${dateLabel}`;

            const dMs = d.getTime();
            const isToday =
                d.getFullYear() === now.getFullYear() &&
                d.getMonth() === now.getMonth() &&
                d.getDate() === now.getDate();

            if (dMs < nowMs) {
                badge.className = "homework-item__badge homework-item__badge--overdue";
                overdueCount += 1;
            } else if (dMs <= soonThresholdMs) {
                badge.className = "homework-item__badge homework-item__badge--soon";
                if (isToday) todayCount += 1;
            }
        }

        top.appendChild(titleEl);
        top.appendChild(badge);

        const meta = document.createElement("div");
        meta.className = "homework-item__meta";
        const dateSpan = document.createElement("span");
        dateSpan.textContent = `日期：${item.date}`;
        meta.appendChild(dateSpan);
        if (item.course) {
            const courseSpan = document.createElement("span");
            courseSpan.textContent = `課程：${item.course}`;
            meta.appendChild(courseSpan);
        }

        li.appendChild(top);
        li.appendChild(meta);

        if (item.note) {
            const noteDiv = document.createElement("div");
            noteDiv.className = "homework-item__note";
            noteDiv.textContent = item.note;
            li.appendChild(noteDiv);
        }

        const actions = document.createElement("div");
        actions.className = "homework-item__actions";

        const doneBtn = document.createElement("button");
        doneBtn.type = "button";
        doneBtn.className = "homework-item__button";
        doneBtn.textContent = item.done ? "已完成" : "完成";
        doneBtn.disabled = !!item.done;
        doneBtn.addEventListener("click", () => {
            markHomeworkDone(item, true);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "homework-item__button homework-item__button--delete";
        deleteBtn.textContent = "刪除";
        deleteBtn.addEventListener("click", () => {
            deleteHomework(item);
        });

        actions.appendChild(doneBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(actions);

        hwListEl.appendChild(li);
    });

    if (overdueCount > 0 || todayCount > 0) {
        hwAlertEl.hidden = false;
        if (overdueCount > 0) {
            hwAlertEl.textContent = `⚠️ 有 ${overdueCount} 筆作業已經超過截止時間，請儘快確認。`;
        } else {
            hwAlertEl.textContent = `📝 今天有 ${todayCount} 筆作業截止。`;
        }
    } else if (sorted.length > 0) {
        hwAlertEl.hidden = false;
        hwAlertEl.textContent = "✅ 目前沒有即將到期的作業。";
    } else {
        hwAlertEl.hidden = true;
        hwAlertEl.textContent = "";
    }
}

function updateHomeworkCourseSuggestions() {
    if (!hwDateEl || !hwCourseListEl) return;
    const dateStr = hwDateEl.value;
    hwCourseListEl.innerHTML = "";

    if (!dateStr) return;

    // 將 YYYY-MM-DD 轉成 課表裡的 "YYYY/M/D" 格式
    const [y, m, d] = dateStr.split("-").map((v) => Number(v));
    if (!y || !m || !d) return;
    const scheduleDate = `${y}/${m}/${d}`;

    const titles = new Set(
        scheduleData
            .filter((c) => c.date === scheduleDate && c.title)
            .map((c) => c.title)
    );

    Array.from(titles)
        .sort()
        .forEach((title) => {
            const opt = document.createElement("option");
            opt.value = title;
            hwCourseListEl.appendChild(opt);
        });
}

function readLocalHomework() {
    const raw = window.localStorage.getItem("schedule_homework_local") || "[]";
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function writeLocalHomework(items) {
    window.localStorage.setItem("schedule_homework_local", JSON.stringify(items));
}

function markHomeworkDone(item, done) {
    // 更新雲端
    if (item.uid && item.id && firebaseDb && currentUser && item.uid === currentUser.uid) {
        firebaseDb.collection("homework").doc(item.id).update({ done }).catch((e) => {
            console.error("更新雲端作業狀態失敗", e);
        });
    }

    // 更新本機
    const locals = readLocalHomework();
    const updatedLocals = locals.map((it) =>
        it.id === item.id || (it.createdAt === item.createdAt && it.title === item.title)
            ? { ...it, done }
            : it
    );
    writeLocalHomework(updatedLocals);

    // 更新目前畫面中的資料
    currentHomeworkItems = currentHomeworkItems.map((it) =>
        it.id === item.id || (it.createdAt === item.createdAt && it.title === item.title)
            ? { ...it, done }
            : it
    );
    renderHomeworkList(currentHomeworkItems);
}

function deleteHomework(item) {
    if (!window.confirm("確定要刪除這筆作業嗎？")) return;

    // 刪除雲端
    if (item.uid && item.id && firebaseDb && currentUser && item.uid === currentUser.uid) {
        firebaseDb.collection("homework").doc(item.id).delete().catch((e) => {
            console.error("刪除雲端作業失敗", e);
        });
    }

    // 刪除本機
    const locals = readLocalHomework();
    const updatedLocals = locals.filter(
        (it) => !(it.id === item.id || (it.createdAt === item.createdAt && it.title === item.title))
    );
    writeLocalHomework(updatedLocals);

    currentHomeworkItems = currentHomeworkItems.filter(
        (it) => !(it.id === item.id || (it.createdAt === item.createdAt && it.title === item.title))
    );
    renderHomeworkList(currentHomeworkItems);
}

// 工具：顯示在週次 chip 上的小日期說明，例如 "2/23 起"
function getWeekLabelInfo(weekNumber) {
    const items = scheduleData.filter((item) => item.w === weekNumber);
    if (!items.length) return "";
    const dates = [...new Set(items.map((i) => i.date))].sort(
        (a, b) => parseDate(a) - parseDate(b)
    );
    const first = dates[0];
    const last = dates[dates.length - 1];

    // 顯示成「2/23 起」或「2/23–3/1」
    const [y1, m1, d1] = first.split("/").map(Number);
    const [y2, m2, d2] = last.split("/").map(Number);

    if (first === last) {
        return `${m1}/${d1} 起`;
    }
    return `${m1}/${d1}–${m2}/${d2}`;
}

function getUniqueSortedDatesForWeek(weekNumber) {
    const dates = [
        ...new Set(
            scheduleData.filter((item) => item.w === weekNumber).map((i) => i.date)
        ),
    ].sort((a, b) => parseDate(a) - parseDate(b));
    return dates;
}

function pickBestDateInWeek(weekNumber, targetDateObj) {
    const dates = getUniqueSortedDatesForWeek(weekNumber);
    if (!dates.length) return "";

    const targetMs = targetDateObj.getTime();
    const dated = dates.map((dateStr) => ({ dateStr, ms: parseDate(dateStr).getTime() }));

    // 優先選「今天(含)之後」最近的一天；若都沒有，就選「今天之前」最近的一天（也就是該週最後一天）
    let bestFuture = null;
    for (const d of dated) {
        if (d.ms >= targetMs) {
            bestFuture = d;
            break;
        }
    }
    if (bestFuture) return bestFuture.dateStr;
    return dated[dated.length - 1].dateStr;
}

// 渲染週次下拉選單
function renderWeeks() {
    if (!weekSelectEl) return;
    weekSelectEl.innerHTML = "";

    availableWeeks.forEach((w) => {
        const option = document.createElement("option");
        option.value = String(w);
        const weekInfo = getWeekLabelInfo(w);
        option.textContent = weekInfo ? `第 ${w} 週｜${weekInfo}` : `第 ${w} 週`;
        if (w === selectedWeek) {
            option.selected = true;
        }
        weekSelectEl.appendChild(option);
    });
}

// 切換週次（可選指定日期）
function handleWeekChange(w, specificDate) {
    selectedWeek = w;
    isMidtermMode = false;
    if (midtermButtonEl) {
        midtermButtonEl.classList.remove("is-active");
    }

    const daysInWeekMap = new Map();
    scheduleData
        .filter((item) => item.w === w)
        .forEach((item) => {
            if (!daysInWeekMap.has(item.date)) {
                daysInWeekMap.set(item.date, { date: item.date, day: item.day });
            }
        });
    const daysInWeek = Array.from(daysInWeekMap.values()).sort(
        (a, b) => parseDate(a.date) - parseDate(b.date)
    );

    if (daysInWeek.length > 0) {
        if (specificDate && daysInWeek.some((d) => d.date === specificDate)) {
            selectedDate = specificDate;
        } else {
            selectedDate = daysInWeek[0].date;
        }
    } else {
        selectedDate = "";
    }

    renderWeeks();
    renderDates(daysInWeek);
    renderClasses();
}

// 渲染日期按鈕
function renderDates(daysInWeek) {
    dateSelectorEl.innerHTML = "";

    daysInWeek.forEach((d) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chip";
        if (d.date === selectedDate) {
            btn.classList.add("is-active");
        }

        const [y, m, day] = d.date.split("/");
        btn.textContent = `${m}/${day}（${d.day}）`;

        btn.addEventListener("click", () => handleDateChange(d.date));
        dateSelectorEl.appendChild(btn);
    });
}

// 切換日期
function handleDateChange(dateStr) {
    selectedDate = dateStr;
    isMidtermMode = false;
    if (midtermButtonEl) {
        midtermButtonEl.classList.remove("is-active");
    }

    const daysInWeekMap = new Map();
    scheduleData
        .filter((item) => item.w === selectedWeek)
        .forEach((item) => {
            if (!daysInWeekMap.has(item.date)) {
                daysInWeekMap.set(item.date, { date: item.date, day: item.day });
            }
        });

    renderDates(
        Array.from(daysInWeekMap.values()).sort(
            (a, b) => parseDate(a.date) - parseDate(b.date)
        )
    );
    renderClasses();
}

// 類型對應樣式（用於課程類別 badge）
function getTypeClass(type) {
    if (type.includes("考試")) return "pill pill--exam";
    if (type.includes("心血管")) return "pill pill--cv";
    if (type.includes("呼吸")) return "pill pill--resp";
    if (type.includes("免疫")) return "pill pill--immu";
    if (type.includes("臨診、實診輪訓")) return "pill pill--ward";
    if (type.includes("工作坊")) return "pill pill--clinic";
    if (type.includes("臨診")) return "pill pill--clinic";
    if (type.includes("臨技實作") || type.includes("臨技")) return "pill pill--skill";
    if (type.includes("PBL")) return "pill pill--pbl";
    return "pill pill--default";
}

// 只顯示考試（type 含「考試」）
function renderMidterms() {
    const exams = scheduleData
        .filter((item) => item.type.includes("考試"))
        .sort((a, b) => {
            const dDiff = parseDate(a.date) - parseDate(b.date);
            if (dDiff !== 0) return dDiff;
            return a.time.localeCompare(b.time);
        });

    if (!exams.length) {
        scheduleContainerEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📝</div>
                <p class="empty-title">目前找不到任何標記為「考試」的課程</p>
                <p class="empty-text">之後如果課表新增考試，只要更新資料即可在這裡看到。</p>
            </div>
        `;
        return;
    }

    const list = document.createElement("div");
    list.className = "card-list";

    exams.forEach((cls) => {
        const [startTime, endTimeRaw] = cls.time.split("-");
        const endTime = endTimeRaw || "";

        const card = document.createElement("article");
        card.className = "class-card";

        const timeCol = document.createElement("div");
        timeCol.className = "class-time";
        const timeMain = document.createElement("div");
        timeMain.className = "class-time-main";
        timeMain.innerHTML = `<span>${startTime}</span>${endTime ? `<span>–</span><span>${endTime}</span>` : ""}`;

        const typeBadgeMobile = document.createElement("span");
        typeBadgeMobile.className = "class-type-badge--mobile " + getTypeClass(cls.type);
        typeBadgeMobile.textContent = cls.type;

        timeCol.appendChild(timeMain);
        timeCol.appendChild(typeBadgeMobile);

        const body = document.createElement("div");
        body.className = "class-body";

        const header = document.createElement("div");
        header.className = "class-header";

        const title = document.createElement("h2");
        title.className = "class-title";
        title.textContent = cls.title;

        const typeBadge = document.createElement("span");
        typeBadge.className = "class-type-badge " + getTypeClass(cls.type);
        typeBadge.textContent = cls.type;

        header.appendChild(title);
        header.appendChild(typeBadge);

        const meta = document.createElement("div");
        meta.className = "class-meta";

        const dateInfo = document.createElement("div");
        dateInfo.className = "meta-item";
        dateInfo.innerHTML = `<span class="meta-label">Date</span><span class="meta-value">${cls.date}（第 ${cls.w} 週 ${cls.day}）</span>`;

        const teacher = document.createElement("div");
        teacher.className = "meta-item";
        teacher.innerHTML = `<span class="meta-label">Teacher</span><span class="meta-value">${cls.teacher || "未指定"}</span>`;

        const location = document.createElement("div");
        location.className = "meta-item";
        location.innerHTML = `<span class="meta-label">Location</span><span class="meta-value">${cls.loc}</span>`;

        meta.appendChild(dateInfo);
        meta.appendChild(teacher);
        meta.appendChild(location);

        body.appendChild(header);
        body.appendChild(meta);

        if (cls.note) {
            const isWarning = cls.note.includes("⚠️") || cls.note.includes("G");
            const noteDiv = document.createElement("div");
            noteDiv.className = "note " + (isWarning ? "note--warning" : "note--info");

            const iconSpan = document.createElement("span");
            iconSpan.className = "note-icon";
            iconSpan.textContent = isWarning ? "⚠️" : "💡";

            const textSpan = document.createElement("span");
            textSpan.className = "note-text";
            textSpan.textContent = cls.note;

            noteDiv.appendChild(iconSpan);
            noteDiv.appendChild(textSpan);

            body.appendChild(noteDiv);
        }

        card.appendChild(timeCol);
        card.appendChild(body);
        list.appendChild(card);
    });

    scheduleContainerEl.innerHTML = "";
    scheduleContainerEl.appendChild(list);
}

// 渲染當日課程
function renderClasses() {
    if (!selectedDate) {
        scheduleContainerEl.innerHTML = "";
        return;
    }

    const currentClasses = scheduleData
        .filter((item) => item.date === selectedDate)
        .sort((a, b) => a.time.localeCompare(b.time));

    if (!currentClasses.length) {
        scheduleContainerEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🗓️</div>
                <p class="empty-title">這天目前沒有排定課程</p>
                <p class="empty-text">可以試著切換其他週次或日期查看安排。</p>
            </div>
        `;
        return;
    }

    const list = document.createElement("div");
    list.className = "card-list";

    currentClasses.forEach((cls) => {
        const [startTime, endTimeRaw] = cls.time.split("-");
        const endTime = endTimeRaw || "";

        const card = document.createElement("article");
        card.className = "class-card";

        const timeCol = document.createElement("div");
        timeCol.className = "class-time";
        const timeMain = document.createElement("div");
        timeMain.className = "class-time-main";
        timeMain.innerHTML = `<span>${startTime}</span>${endTime ? `<span>–</span><span>${endTime}</span>` : ""}`;

        const typeBadgeMobile = document.createElement("span");
        typeBadgeMobile.className = "class-type-badge--mobile " + getTypeClass(cls.type);
        typeBadgeMobile.textContent = cls.type;

        timeCol.appendChild(timeMain);
        timeCol.appendChild(typeBadgeMobile);

        const body = document.createElement("div");
        body.className = "class-body";

        const header = document.createElement("div");
        header.className = "class-header";

        const title = document.createElement("h2");
        title.className = "class-title";
        title.textContent = cls.title;

        const typeBadge = document.createElement("span");
        typeBadge.className = "class-type-badge " + getTypeClass(cls.type);
        typeBadge.textContent = cls.type;

        header.appendChild(title);
        header.appendChild(typeBadge);

        const meta = document.createElement("div");
        meta.className = "class-meta";

        const teacher = document.createElement("div");
        teacher.className = "meta-item";
        teacher.innerHTML = `<span class="meta-label">Teacher</span><span class="meta-value">${cls.teacher || "未指定"}</span>`;

        const location = document.createElement("div");
        location.className = "meta-item";
        location.innerHTML = `<span class="meta-label">Location</span><span class="meta-value">${cls.loc}</span>`;

        meta.appendChild(teacher);
        meta.appendChild(location);

        body.appendChild(header);
        body.appendChild(meta);

        if (cls.note) {
            const isWarning = cls.note.includes("⚠️") || cls.note.includes("G");
            const noteDiv = document.createElement("div");
            noteDiv.className = "note " + (isWarning ? "note--warning" : "note--info");

            const iconSpan = document.createElement("span");
            iconSpan.className = "note-icon";
            iconSpan.textContent = isWarning ? "⚠️" : "💡";

            const textSpan = document.createElement("span");
            textSpan.className = "note-text";
            textSpan.textContent = cls.note;

            noteDiv.appendChild(iconSpan);
            noteDiv.appendChild(textSpan);

            body.appendChild(noteDiv);
        }

        card.appendChild(timeCol);
        card.appendChild(body);
        list.appendChild(card);
    });

    scheduleContainerEl.innerHTML = "";
    scheduleContainerEl.appendChild(list);
}

// 初始化
function init() {
    if (!availableWeeks.length) {
        return;
    }
    selectedWeek = availableWeeks[0];
    renderWeeks();

    if (weekSelectEl) {
        weekSelectEl.addEventListener("change", (event) => {
            const value = Number(event.target.value);
            if (!Number.isNaN(value)) {
                handleWeekChange(value);
            }
        });
    }

    if (midtermButtonEl) {
        midtermButtonEl.addEventListener("click", () => {
            isMidtermMode = !isMidtermMode;
            if (isMidtermMode) {
                midtermButtonEl.classList.add("is-active");
                renderMidterms();
            } else {
                midtermButtonEl.classList.remove("is-active");
                // 回到目前選擇的週次與日期
                handleWeekChange(selectedWeek, selectedDate);
            }
        });
    }

    if (rotationButtonEl) {
        rotationButtonEl.addEventListener("click", () => {
            openSheetModal("臨診、實診輪訓課表", ROTATION_SHEET_URL);
        });
    }

    if (pblButtonEl) {
        pblButtonEl.addEventListener("click", () => {
            openSheetModal("系統課課表 (PBL)", PBL_SHEET_URL);
        });
    }

    if (rotationRuleButtonEl) {
        rotationRuleButtonEl.addEventListener("click", () => {
            openSheetModal("輪訓規則 (PDF)", ROTATION_RULE_PDF_URL);
        });
    }

    if (rotationCloseEl) {
        rotationCloseEl.addEventListener("click", closeRotationModal);
    }

    if (rotationModalEl) {
        rotationModalEl.addEventListener("click", (event) => {
            if (event.target === rotationModalEl) {
                closeRotationModal();
            }
        });
    }

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            if (rotationModalEl && !rotationModalEl.hidden) {
                closeRotationModal();
            }
        }
    });

    // 嘗試自動切到「今天」的課表
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayStr = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
    const todayItem = scheduleData.find((item) => item.date === todayStr);

    if (todayItem) {
        selectedWeek = todayItem.w;
        handleWeekChange(selectedWeek, todayItem.date);
        return;
    }

    // 今天沒有「剛好同一天」：至少跳到「當週」（用該週的日期範圍判斷）
    const weekRanges = availableWeeks
        .map((w) => {
            const dates = getUniqueSortedDatesForWeek(w);
            if (!dates.length) return null;
            const start = parseDate(dates[0]);
            const end = parseDate(dates[dates.length - 1]);
            return { w, start, end };
        })
        .filter(Boolean);

    let currentWeek = null;
    for (const r of weekRanges) {
        if (today.getTime() >= r.start.getTime() && today.getTime() <= r.end.getTime()) {
            currentWeek = r.w;
            break;
        }
    }

    if (currentWeek != null) {
        selectedWeek = currentWeek;
        const bestDate = pickBestDateInWeek(currentWeek, today);
        handleWeekChange(currentWeek, bestDate || undefined);
        return;
    }

    // 如果今天落在整份課表範圍外：跳到最接近的週（最早/最晚）
    if (weekRanges.length) {
        const first = weekRanges[0];
        const last = weekRanges[weekRanges.length - 1];
        if (today.getTime() < first.start.getTime()) {
            selectedWeek = first.w;
            handleWeekChange(first.w);
            return;
        }
        if (today.getTime() > last.end.getTime()) {
            selectedWeek = last.w;
            const bestDate = pickBestDateInWeek(last.w, today);
            handleWeekChange(last.w, bestDate || undefined);
            return;
        }
    }

    // 最後保底：維持原本預設（第一週的第一天）
    handleWeekChange(selectedWeek);
}

window.addEventListener("DOMContentLoaded", init);

