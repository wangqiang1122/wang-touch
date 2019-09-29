const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default; // 解析 parser 解析出来的ast语法树
const path  = require('path');

// 需要@babel/parser对识别出来的js分析形成ast抽象语法树 这事bable7的一个工具

// ast抽象语法树返回的值分析结果，遍历出所有的引⼊入模块，
// 但是⽐比较麻烦，这⾥还是 推荐babel推荐的⼀一个模块@babel/traversenode.source.value

//把代码处理理成浏览器器可运⾏行行的代码，需要借助@babel/core，和@babel/preset-env，把ast语法树转换 成合适的代码
const babel = require('@babel/core'); // 语法转换

const bundle = (entry)=>{
    const flie = fs.readFileSync(entry,"utf-8");
    // 解析文件成ast文件语法树
    const ast = parser.parse(flie,{
       sourceType: 'module',   // 规定是哪一种模块引入规范的
    });
    // console.log(ast.program.body)
    const yilai = {}; //放入import引入的路径   需要对路径进行分支 得到相对于根目录的路径
       traverse(ast,{
           // 得到分析路径的文件目录
            // 解析ast语法树里   ImportDeclaration类型的
              ImportDeclaration({ node }){
                  const dirname = (path.dirname(entry));
                  yilai[dirname,node.source.value] = './'+path.join(dirname,node.source.value);
                  // yilai.push('./'+path.join(dirname,node.source.value))
              }
        });
        const {code}= babel.transformFromAst(ast,null,{
             presets:['@babel/preset-env']
        });
   console.log(code);
};

bundle('./src/index.js');