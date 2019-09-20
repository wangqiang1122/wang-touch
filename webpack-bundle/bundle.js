const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default; // 解析 parser 解析出来的ast语法树

// 需要@babel/parser对识别出来的js分析形成ast抽象语法树 这事bable7的一个工具

// ast抽象语法树返回的值分析结果，遍历出所有的引⼊入模块，
// 但是⽐比较麻烦，这⾥还是 推荐babel推荐的⼀一个模块@babel/traverse

const bundle = (entry)=>{
    const flie = fs.readFileSync(entry,"utf-8");
    // 解析文件成ast文件语法树
    const ast = parser.parse(flie,{
       sourceType: 'module',   // 规定是哪一种模块引入规范的
    });
    // console.log(ast.program.body)
    const yilai = [];
   traverse(ast,{
        // 解析ast语法树里   ImportDeclaration类型的
          ImportDeclaration({ node }){
              yilai.push(node.source.value)
          }
    });
   console.log(yilai);
};

bundle('./src/index.js');