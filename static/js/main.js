//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}
//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
function accDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    // with(Math){
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return accMul((r1/r2), (Math.pow(10,t2-t1)));
    // }
}
//加法函数，用来得到精确的加法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}
//减法函数
function accSub(arg1,arg2){
     var r1,r2,m,n;
     try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
     try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
     m=Math.pow(10,Math.max(r1,r2));
     //last modify by deeka
     //动态控制精度长度
     n=(r1>=r2)?r1:r2;
     return ((arg2*m-arg1*m)/m).toFixed(n);
}

//nav最高
var opMax = ''
//nav最低
var opMin = ''
var open = ''
//获取今日日期
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var Today = new Date().Format("yyyy-MM-dd");
var MonthAgo = new Date(new Date().getTime() - 7 * 24 * 3600 * 1000)
var MonthAgoTime = MonthAgo.Format("yyyy-MM-dd");

//找最大值
function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
function compareMin(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}


//股票图日期
function addZero(val, len, top) {
    if (!arguments[1]) len = 2;
    if (!arguments[2]) top = true;

    if (val.toString().length < len) {
        while (len != val.toString().length) {
            if (top) val = "0" + val.toString();
            else val = val.toString() + "0";
        }
    }
    return val.toString();
}
function getCurDate() {
    return [new Date().getFullYear(), addZero(new Date().getMonth() + 1), addZero(new Date().getDate())].join("");
}
var short_date = getCurDate();
var time_pos = "08:55";
var time_poss = "09:25";
// 基于准备好的dom，初始化echarts实例
// 初始化 x轴
var dtCurDate = new Date();

var daytime = [];
daytime.push('08:55')
daytime.push('08:56')
daytime.push('08:57')
daytime.push('08:58')
daytime.push('08:59')

//早上08：55~11:30
var dtTimeAM = new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 9, 0, 0, 0)
for (var i = 0; i <= 150; i++) {
    daytime.push([addZero(dtTimeAM.getHours()), addZero(dtTimeAM.getMinutes())].join(":"));
    dtTimeAM = new Date(dtTimeAM.getTime() + 60 * 1000);
}
//下午13：00~15:30
var dtTimePM = new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 13, 0, 0, 0)
for (var i = 0; i <= 150; i++) {
    daytime.push([addZero(dtTimePM.getHours()), addZero(dtTimePM.getMinutes())].join(":"));
    dtTimePM = new Date(dtTimePM.getTime() + 60 * 1000);
}

// 我的组合和十条数据
var arrCurTimef = [];
arrCurTimef.push('09:25')
arrCurTimef.push('09:26')
arrCurTimef.push('09:27')
arrCurTimef.push('09:28')
arrCurTimef.push('09:29')
//早上09：30~11:30
var dtTimeAMf = new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 9, 30, 0, 0)
for (var i = 0; i <= 120; i++) {
    arrCurTimef.push([addZero(dtTimeAMf.getHours()), addZero(dtTimeAMf.getMinutes())].join(":"));
    dtTimeAMf = new Date(dtTimeAMf.getTime() + 60 * 1000);
}
//下午13：00~15:00
var dtTimePMf = new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 13, 0, 0, 0)
for (var i = 0; i <= 120; i++) {
    arrCurTimef.push([addZero(dtTimePMf.getHours()), addZero(dtTimePMf.getMinutes())].join(":"));
    dtTimePMf = new Date(dtTimePMf.getTime() + 60 * 1000);
}

//初始化arrCurTime
var dayData = [], newDyDate = []  //实时净值
var alDayData=[],newAldate=[]     //敞口
var ctaDayData=[],newCtadate=[]   //CTA-轧差计算
var commodityData=[],commoditydate=[]   //CTA-非轧差计算
var itemData=[],Itemdate=[]   //CTA-单个商品
var myGroup_datas = [];
var myGroup_datas1 = [];
var line_data1 = [];
var line_data2 = [];
var line_data3 = [];
var line_data4 = [];
var line_data5 = [];
var line_data6 = [];
var line_data7 = [];
var line_data8 = [];
var line_data9 = [];
var line_data10 = [];

// 早盘
for (var i = 0; i < daytime.length; i++) {
    dayData.push({ name: daytime[i], value: "-" });
    newDyDate.push({ name: daytime[i], value: 0 });
    alDayData.push({ name: daytime[i], value: "-" });
    newAldate.push({ name: daytime[i], value: 0 });
    ctaDayData.push({ name: daytime[i], value: "-" });
    newCtadate.push({ name: daytime[i], value: 0 });
    commodityData.push({ name: daytime[i], value: "-" });
    commoditydate.push({ name: daytime[i], value: 0 });
    itemData.push({ name: daytime[i], value: "-" });
    Itemdate.push({ name: daytime[i], value: 0 });
}

//我的组合和十条数据
for (var i = 0; i < arrCurTimef.length; i++) {
    myGroup_datas.push({ name: arrCurTimef[i], value: "-" });
    myGroup_datas1.push({ name: arrCurTimef[i], value: "-" });
    line_data1.push({ name: arrCurTimef[i], value: "-" });
    line_data2.push({ name: arrCurTimef[i], value: "-" });
    line_data3.push({ name: arrCurTimef[i], value: "-" });
    line_data4.push({ name: arrCurTimef[i], value: "-" });
    line_data5.push({ name: arrCurTimef[i], value: "-" });
    line_data6.push({ name: arrCurTimef[i], value: "-" });
    line_data7.push({ name: arrCurTimef[i], value: "-" });
    line_data8.push({ name: arrCurTimef[i], value: "-" });
    line_data9.push({ name: arrCurTimef[i], value: "-" });
    line_data10.push({ name: arrCurTimef[i], value: "-" });
}

// 我的组合
function getMyGroups(time) {
    for (var i = 0; i < myGroup_datas.length; i++) {
        if (time == myGroup_datas[i].name &&
            time == myGroup_datas1[i].name) return i;
    }
}
//十条数据
function getTenDataPos(time) {
    for (var i = 0; i < line_data1.length; i++) {
        if (time == line_data1[i].name && time == line_data2[i].name && time == line_data3[i].name &&
            time == line_data4[i].name && time == line_data5[i].name && time == line_data6[i].name &&
            time == line_data7[i].name && time == line_data8[i].name && time == line_data9[i].name &&
            time == line_data10[i].name) return i;
    }
}


//早盘
function dayPos(time) {
    for (var i = 0; i < dayData.length; i++) {
        if (time == dayData[i].name) return i;
    }
}

//早盘
var option = {
    tooltip: {
        trigger: 'axis',
        transitionDuration: 0,
        confine: true,
        position: function (point, params, dom) {
            var width = dom.clientWidth;
            return [point[0] - width / 2, 20];
        },
        padding: 0,
    },
    grid: {
        top: '6%',
        left: '8%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: {
            show: true,
            interval: function (index, value) {
                if (value == "09:00"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00"
                    || value == "15:30") {
                    return true;
                }
                else return false;
            }
        },
        data: daytime,
        scale: true,
        axisTick: {
            show: true,
            interval: function (index, value) {
                if (value == "09:00"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00"
                    || value == "15:30") {
                    return true;
                }
                else return false;
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            formatter: function (value, index) {
                if (value == "09:00"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00"
                    || value == "15:30") {
                    return value;
                } else {
                    return "";
                }
            }
        },
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    series: [{
        name: '最新净值',
        type: 'line',
        smoothMonotone: 'y',
        symbol: 'none',
        data: dayData,
        markLine: {
            silent: true,
            symbol: false,
            label: {
                normal: {
                    show: false
                }
            },
            lineStyle: {
                normal: {
                    type: "solid",
                    color: "#CE1C08"
                }
            }
        }
    }]
};
//我的组合
var myGroup = {
    legend: {
        data: ['我的组合', '业绩基准']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        position: 'top'
    },
    grid: {
        top: '6%',
        left: '8%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        boundaryGap: false,
        type: 'category',
        axisLine: { onZero: false },
        splitLine: {
            show: true,
            interval: function (index, value) {
                if (value == "09:15"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00") {
                    return true;
                }
                else return false;
            }
        },
        data: arrCurTimef,
        scale: true,
        axisTick: {
            show: true,
            interval: function (index, value) {
                if (value == "09:15"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00") {
                    return true;
                }
                else return false;
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            formatter: function (value, index) {
                if (value == "09:15"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00") {
                    return value;
                } else {
                    return "";
                }
            }
        },
    },
    yAxis: [{
        scale: true,
        splitArea: {
            show: true
        }
    }],
    series: [{
        name: '我的组合',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: myGroup_datas
    },
    {
        name: '业绩基准',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: myGroup_datas1
    },
    ]
};

//十条数据图表
var options = {
    backgroundColor: '#c3bfb8',
    legend: {
        top: '2%',
        data: ['SIZE', 'EARNYILD', 'GROWTH', 'BOTP', 'LEVERAGE', 'MOMENTUM', 'SIZENL', 'BETA', 'LIQUIDTY', 'RESVOL']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        position: 'top'
    },
    grid: {
        top: '7%',
        left: '4%',
        right: '3%',
        bottom: '8%'
    },
    xAxis: {
        boundaryGap: false,
        type: 'category',
        axisLine: { onZero: false },
        splitLine: {
            show: true,
            interval: function (index, value) {
                if (value == "09:15"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00") {
                    return true;
                }
                else return false;
            }
        },
        data: arrCurTimef,
        scale: true,
        axisTick: {
            show: true,
            interval: function (index, value) {
                if (value == "09:15"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00") {
                    return true;
                }
                else return false;
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            formatter: function (value, index) {
                if (value == "09:15"
                    || value == "09:30"
                    || value == "10:30"
                    || value == "11:30"
                    || value == "14:00"
                    || value == "15:00") {
                    return value;
                } else {
                    return "";
                }
            }
        },
    },
    yAxis: [{
        scale: true,

    }],
    series: [
        {
            name: 'SIZE',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: line_data1
        },
        {
            name: 'EARNYILD',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dashed'
                }
            },
            data: line_data2
        },
        {
            name: 'GROWTH',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            data: line_data3
        },
        {
            name: 'BOTP',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            data: line_data4
        },
        {
            name: 'LEVERAGE',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            data: line_data5
        },
        {
            name: 'MOMENTUM',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            data: line_data6
        },
        {
            name: 'SIZENL',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dashed'
                }
            },
            data: line_data7
        },
        {
            name: 'BETA',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: line_data8
        },
        {
            name: 'LIQUIDTY',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: line_data9
        },
        {
            name: 'RESVOL',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            data: line_data10
        },
    ]
};