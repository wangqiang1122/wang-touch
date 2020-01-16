var graph_dict = {
    0: { "5":2,"4":3 },
    1: { "2":7,"3":7,"4":2,"5":2 },
    2: { "8":8,"6":7,"1":7 },
    3: { "6":2,"10":3,"7":1,"1":7 },
    4: { "1":2,"7":3,"0":3 },
    5: { "14":10,"1":2,"0":2 },
    6: { "9":1,"12":4,"3":2,"2":7 },
    7: { "3":1,"11":2,"4":3 },
    8: { "9":4,"2":8,"14":1 },
    9: { "13":9,"6":1,"8":4 },
    10: { "12":6,"11":8,"3":3 },
    11: { "10":8,"7":2 },
    12: { "13":2,"10":6,"6":4},
    13: { "12":2,"9":9 },
};
var INF=9999;
function dijkstra(graph,start,end) {
    var arr_v = [];// 遍历过节点放入路面
    var dis = {}; // 使用字典dis存储顶点v到达各个顶点的最短距离
    var path = {};// 存储最短距离
    // 第一步初始化，初始化dis从顶点v到达每一个顶点的距离都设置为INF=9999
    for(var i in graph) {
        dis[i] = INF; //
        path[i] = start; // 路径
    }
    dis[start] = 0;
    var min_v = start;
    while (true) {
        arr_v.push(min_v);
        var v_link = graph[min_v];
        for (var a in v_link) {
            if (dis[min_v]+v_link[a]<dis[a]) {
                dis[a]=dis[min_v]+v_link[a];
                path[a] = min_v;
            }
        }
        var min_dis = INF;
        for (var key in graph) {
            if (arr_v.indexOf(key)>=0) {
                continue
            }
            if (dis[key]<min_dis) { // 已经被赋值的 并不是初始化的值
                min_dis = dis[key];
                min_v = key;

            }
        }
        if (min_dis==INF) {
            break;
        }
    }
    console.log(path)
    var link_path = [];
    var tmp_v =path[end];
    link_path.push(end);
    while (tmp_v) {
        link_path.push(tmp_v);
        tmp_v = path[tmp_v];
        if (start ==tmp_v) {
            link_path.push(start);
            break;
        }
    }
    return link_path;
}

var mst = dijkstra(graph_dict,1,0);
console.log(mst)