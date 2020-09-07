// 1 cookie 存储有限 主要是存放后台需要的cookie接口会默认带cookie传给后台   sessionStorage临时性本地存储 关闭网页数据清除
// localStorage永久行本地存储除非手动清除

// 2 答案 1 1  答案 0 1
// 3 答案 1

// 4 二插搜索树
// var TreeNode = function (data,value) {
//     this.data = data;
//     this.leftChild = null;
//     this.rightChild = null;
//     this.parent = null;
//     this.value = value;
// }
// function Searchtree() {
//     var root = null;
//     // 插入
//     function insert_data(node,data,val) {
//         if (root===null) {
//             root = new TreeNode(data,val)
//             return true
//         }
//         if (data<node.data) {
//             if (node.leftChild) {
//                 return insert_data(node.leftChild,data)
//             } else {
//                 var new_data = new TreeNode(data,val);
//                 node.leftChild = new_data;
//                 new_data.parent = node;
//             }
//             return true;
//         } else if(data>node.data) {
//             if (node.rightChild) {
//                 return insert_data(node.rightChild,data)
//             } else {
//                 var new_data1 = new TreeNode(data,val);
//                 node.rightChild = new_data1;
//                 new_data1.parent = node;
//             }
//             return true;
//         } else {
//             return false;
//         }
//     }
//     function search_data(node,data) {
//         if (node === null) {
//             return null
//         }
//         if (data === node.data) {
//             return node;
//         } else if(data>node.data) {
//             return search_data(node.rightChild,data)
//         } else if (data<node.data) {
//             return search_data(node.leftChild,data)
//         } else {
//             return null;
//         }
//     }
// }
//
// // 5题
// var josn1 = [
//     { id:1,name:'a'},
//     { id:2,name:'b' },
//     { id:3,name:'c' }
// ];
//
// var josn2 = [
//     { id:1,age:21},
//     { id:2,age:33 },
//     { id:3,age:44 }
// ];
// // 找到相对应的id
//
// function getJsonId(arr,id) {
//    let ind ;
//     arr.forEach((item,index)=>{
//         if (id==item.id) {
//             ind = index
//         }
//     });
//     return {
//         item: arr.splice(ind,1)[0],
//         len: arr.length
//     }
// }
//
// function merageJson(josn) {
//     return josn.map((item)=>{
//         return Object.assign(item,getJsonId(josn2,item.id).item)
//     });
// }
// merageJson(josn1);
//
// // 6题
//
// // 找到
// function getJsonFatherId(arr,id) {
//     let ind ;
//     arr.forEach((item,index)=>{
//         if (id==item.fatherid) {
//             ind = index
//         }
//     });
//     return {
//         item: arr.splice(ind,1)[0],
//         len: arr.length
//     }
// }
//
// let json3= [
//     { id:1,name:'a',fatherid:';' },
//     { id:2,name:'b',fatherid:'1' },
//     { id:3,name:'c',fatherid:'2' },
//     { id:4,name:'d',fatherid:'1' },
//     { id:5,name:'e',fatherid:'4' },
//     { id:6,name:'f',fatherid:'4' },
//     { id:7,name:'g',fatherid:'6' },
// ];
//
// var obj = null;  // 新的数据添加
// // 数据追加
// function appenddata(o,item) {
//     if (!o) {
//         obj = {
//             id: item.id,
//             name: item.name
//         };
//     } else {
//       if (o.id==item.fatherid) {
//           if (!o.children) {
//               o.children = [];
//           }
//           o.children.push({
//               name: item.name,
//               id: item.id
//           })
//       } else {
//           if(!o.children) {
//               return
//           }
//           o.children.forEach(p=>{
//               appenddata(p,item)
//           })
//       }
//     }
// }
//
// function initdata(arr) {
//     var root = getJsonFatherId(arr,';').item;
//     appenddata(obj,root);
//     arr.forEach((item,index)=>{
//         appenddata(obj,item);
//     })
// }
// initdata(json3)
//
// console.log(new Array(100).fill())
let name = "Bob";
String.raw `Hi\n${name}!`;
