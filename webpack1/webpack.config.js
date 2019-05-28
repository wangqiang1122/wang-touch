module.exports = {
    entry:  `${__dirname}/js/1.js`,               // 最好也写成绝对路径
    output: {
        filename: '2.bundle.js',
        path: `${__dirname}/dist/`    // 要写绝对路径
    },
};