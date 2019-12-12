        $.ajaxSetup({
           data:{csrfmiddlewaretoken:'{{ csrf_token }}'}
      })
        $('#table1').bootstrapTable({
                            url: 'indexTable/',
                    method: "post",
                    dataType:"json",
                    striped: true,
                    pagination: true,
                    sidePagination:'client',
                    pageSize: 18,
                    pageList:[],
                    queryParams:{table:"index"},
                    contentType:"application/x-www-form-urlencoded; charset=UTF-8",
                    leftFixedColumns: true,
                    showRefresh: true,
                    search: true,
                    leftFixedNumber: 1,
                    rightFixedColumns: true,
                    rightFixedNumber: 1,
                    paginationPreText:"Previous",
                    paginationNextText:"Next",
                    theadClasses:"thead-light",
                    iconSize:"sm",
                    columns: [{ field:'基金代码',title: '基金代码',
                                formatter:function(value){
                                 var e = '<a href="fund_details/" >'+value+'</a>';
                                 return e;
                                 }
                                 },
                                              {field: '基金名称',title: '基金名称'},
                                              {field: '日增长率',title: '日增长率'},
                                              {field: '近一周',title: '近一周'},
                                              {field: '近一月',title: '近一月'},
                                              {field: '今年来',title: '今年来'},
                                              {field: '近一年',title: '近一年'},
                                              {field: '近三年',title: '近三年'},
                                              {field: '自成立',title: '自成立'},
                                              {field: '成立日',title: '成立日'},
                                              {field: '单位净值',title: '单位净值'},
                                              {field: '累计净值',title: '累计净值'},
                                              {field: '净资产',title: '净资产'},
                                              {field: '基金简介',title: '基金简介'},
                            ]
                         });

                    function exit(){
                        var a='<a href="exit/">';
                        return a;
                    }

