function merageConfig(config1,config2) {


    var obj = deepCopy(config1);
    /***
    * 简单的覆盖
    * */
    for (var attr in config2) {
        var val2 = config2[attr];
        var val1 = obj[attr];
      if (typeof val2 === 'object') {
           obj[attr] = deepMerage(val1,val2)
       } else {
           obj[attr] = val2
       }
    }
    return obj
}

/**
 * 合并到一起
 * @param config1
 * @param config2
 * @returns {*}
 */
function deepMerage(config1,config2) {
   var obj = deepCopy(config1);
   for(var attr in config2) {
       var val2 = config2[attr];
       var val1 = obj[attr];
       if (typeof val2 ==='object'&& typeof val1 ==='object') {
           obj[attr] = deepMerage(val1,val2)
       } else if (typeof val2 === 'object') {
           obj[attr] = deepCopy(val2)
       } else {
           obj[attr] = val2
       }
   }
   return obj
}


/****
 * 深拷贝的作用打断对象之间的引用关系
 *
 * @param config
 */
function isArray(val) {
    return {}.toString.call(val)==='[object Array]'
}

function deepCopy(config) {
   var obj = isArray(config)?[]:{};
   // if (!config) return obj
   for (var attr in config) {
       if (typeof config[attr] ==='object') {
           obj[attr] = deepCopy(config[attr])
       } else {
           obj[attr] = config[attr]
       }
   }
   return obj
}

export default {
    merageConfig: merageConfig,
}
