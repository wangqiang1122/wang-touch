var data = {
  'house': [
      { type: 'text', name: 'title', title: '标题'},
      { type: 'text', name: 'sub_title', title: '副标题'},
      { type: 'text', name: 'position_main', title: '主位置'},
      { type: 'text', name: 'position_second', title: '副位置'},
      { type: 'number', name:'ave_price', title: '均价'},
      { type: 'number', name:'area_min', title: '最小面积'},
      { type: 'number', name:'area_max', title: '最大面积'},
      { type: 'number', name:'tel', title: '电话'},
      { type: 'date', name:'sale_time', title: '开盘时间'},
      { type: 'date', name:'submit_time', title: '交房的日期'},
      { type: 'file', name: 'main_img', title: '大图'},
      { type: 'file', name: 'img1', title: '小图1(多选)',multiple: true},
      { type: 'text', name: 'building_type', title: '类型'},
      { type: 'text', name: 'property_types', title: '户型'},
      { type: 'file', name: 'property_img', title: '户型图'},
  ],
  ad: [
      { type: 'number', name: 'type', title: '类型'},
      { type: 'text', name: 'title', title: '标题'},
      { type: 'text', name: 'link', title: '链接'},
      { type: 'number', name: 'n_click', title: '点击次数'},
      { type: 'number', name: 'n_order', title: '计划'},
      { type: 'date', name: 'n_show', title: '展示时间'},
      { type: 'date', name:'expires', title: '过期时间'},
      { type: 'file', name: 'img', title: '图片'},
  ],
    link: [
        { type: 'text', name: 'type', title: '类型'},
        { type: 'text', name: 'title', title: '标题'},
        { type: 'text', name: 'link', title: '链接'},
        { type: 'text', name: 'n_order', title: '点击'},

        { type: 'date', name:'expires', title: '过期时间'},
    ],
    broker: [
        { type: 'text', name: 'title', title: '类型'},
        { type: 'file', name: 'img', title: '大头贴'},
    ],
};