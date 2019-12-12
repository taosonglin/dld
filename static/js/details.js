var tables=["基金表现概况","回报率","Jenson周级别","Jenson月级别","Jenson季度级别","抗风险能力周级别",
            "抗风险能力月级别","抗风险能力季度级别","风险调整后指标周级别","风险调整后指标月级别","风险调整后指标季度级别"];
var charts=["回报率-日级别","回报率-周级别","回报率-月级别"];
var map=new Map();
var chartUrl="../chart/";
var tableUrl="../table/";
var fields_1=[{field: "指标", title: "指标"}, {field: "近一个周", title:"近一个周"}, {field: "近一个月", title: "近一个月"}, {field:"近三个月",title:"近三个月"}];
var fields_2=[{field:"指标",title:"指标"},{field:"2019-04",title:"2019-04"}, {field:"2019-05",title:"2019-05"},{field:"2019-06",title:"2019-06"}];
var fields_3=[{field:"周级别",title:"周级别"},{field:"Jenson指数",title:"Jenson指数"},{field:"M2",title:"M2"}];
var fields_4=[{field:"月级别",title:"月级别"},{field:"Jenson指数",title:"Jenson指数"},{field:"M2",title:"M2"}];
var fields_5=[{field:"季度级别",title:"季度级别"},{field:"Jenson指数",title:"Jenson指数"},{field:"M2",title:"M2"}];
var fields_6=[{field:"周级别",title:"周级别"},{field:"Beta",title:"Beta"},{field:"相关系数",title:"相关系数"},{field:"标准差",title:"标准差"},{field:"下行离差",title:"下行离差"},{field:"偏度",title:"偏度"},{field:"峰度",title:"峰度"},{field:"回撤",title:"回撤"},{field:"盈亏比",title:"盈亏比"}];
var fields_7=[{field:"月级别",title:"月级别"},{field:"Beta",title:"Beta"},{field:"相关系数",title:"相关系数"},{field:"标准差",title:"标准差"},{field:"下行离差",title:"下行离差"},{field:"偏度",title:"偏度"},{field:"峰度",title:"峰度"},{field:"回撤",title:"回撤"},{field:"盈亏比",title:"盈亏比"}];
var fields_8=[{field:"季度级别",title:"季度级别"},{field:"Beta",title:"Beta"},{field:"相关系数",title:"相关系数"},{field:"标准差",title:"标准差"},{field:"下行离差",title:"下行离差"},{field:"偏度",title:"偏度"},{field:"峰度",title:"峰度"},{field:"回撤",title:"回撤"},{field:"盈亏比",title:"盈亏比"}];
var fields_9=[{field:"周级别",title:"周级别"},{field:"夏普比例",title:"夏普比例"},{field:"M2",title:"M2"},{field:"信息比率",title:"信息比率"},{field:"索提诺比率",title:"索提诺比率"}];
var fields_10=[{field:"月级别",title:"月级别"},{field:"夏普比例",title:"夏普比例"},{field:"M2",title:"M2"},{field:"信息比率",title:"信息比率"},{field:"索提诺比率",title:"索提诺比率"},{field:"Calmar比率",title:"Calmar比率"}];
var fields_11=[{field:"季度级别",title:"季度级别"},{field:"夏普比例",title:"夏普比例"},{field:"M2",title:"M2"},{field:"信息比率",title:"信息比率"},{field:"索提诺比率",title:"索提诺比率"},
                {field:"Calmar比率",title:"Calmar比率"},{field:"MAR比率",title:"MAR比率"},{field:"斯特林比率",title:"斯特林比率"}];
map.set("基金表现概况",fields_1);
map.set("回报率",fields_2);
map.set("Jenson周级别",fields_3);
map.set("Jenson月级别",fields_4);
map.set("Jenson季度级别",fields_5);
map.set("抗风险能力周级别",fields_6);
map.set("抗风险能力月级别",fields_7);
map.set("抗风险能力季度级别",fields_8);
map.set("风险调整后指标周级别",fields_9);
map.set("风险调整后指标月级别",fields_10);
map.set("风险调整后指标季度级别",fields_11);

  function setChartSize(id) {
    var tensor_obj = document.getElementById(id);
    var heigth_screen = window.screen.height;
    var width_screen = window.screen.width;
    heigth_screen = heigth_screen * 0.4;
    tensor_obj.style.height = heigth_screen + "px";
    width_screen = width_screen * 0.8;
    tensor_obj.style.width = width_screen + "px";
}

function setTableSize(table,h) {
    var tensor_obj = document.getElementById(table);
    var heigth_screen = window.screen.height;
    var width_screen = window.screen.width;
    {#heigth_screen = heigth_screen * h;#}
    {#tensor_obj.style.height = heigth_screen + "px";#}
    width_screen = width_screen * 0.8;
    tensor_obj.style.width = width_screen + "px";
  }

function generateChart(data,name){
    console.log(data);
    var myChart=echarts.init(document.getElementById(name));
    var option={
        
        title:{text:name},
        tooltip:{trigger:'axis'},
        axisLabel:{interval:0},
        legend:{data:data.图例},
        xAxis: {data:data.X},
        yAxis: {type: 'value',
                  axisLabel: {
                          show: true,
                          interval: 'auto',
                          formatter: '{value}%'
                      },
                  show: true},
        series: [{name:data.图例[0],type:data.type,data:data.量化基金A},
                {name:data.图例[1],type:data.type,data:data.上证指数}]
    };
    myChart.setOption(option);
 }

function generateTable(table,data,fields){
     $(table).bootstrapTable({
         theadClasses:"thead-light",
         striped: true,
         iconSize:"sm",
         columns:fields,
    });
    $(table).bootstrapTable('load',data);
}
ar result;

function Myajax(url,type,args){
    $.ajax({
        cache: false,
        type: type,
        url: url,
        traditional:true,
        dataType:'json',
        async: false,
        data:args,
        success: function(data) {
            result=data;
        }
        });
  }

  var i=0;
  function handTable(){
      var h=0.4;
      var table="#"+tables[i];
      var container=tables[i]+"container";
      if (table.indexOf("季")>=0){
          h=0.1;
      }
      else if(table.indexOf("月")>=0){
          h=0.2;
      };
      setTableSize(container,h);
      var args={"tables":tables[i]};
      Myajax(tableUrl,"POST",args);
      generateTable(table,result,map.get(tables[i]));
      if(++i<tables.length)handTable();
  }

  var j=0;
  function handleChart(){
      var name=charts[j];
      setChartSize(name);
      var args={"charts":charts[j]};
      Myajax(chartUrl,"POST",args);
      generateChart(result,name);
       if(++j<charts.length)handleChart();
  }

  handTable();
   handleChart();


