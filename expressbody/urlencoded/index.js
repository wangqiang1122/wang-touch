const express = require('express');
const querystring = require('querystring');
const url = require('url');

exports.a = function (req,res,next) {
    var str = '';
   req.on('data',function (d) {
       str+=d
   });
   req.on('end',function () {
       req.body = querystring.parse(str);
       console.log('aaa')
       next()
   })
};