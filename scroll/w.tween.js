/**
 * Created by heihei on 2017/1/5.
 */
var Tween = {
    linear: function (t, b, c, d){
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 2.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },
    bounceOut: function(t, b, c, d){
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
};

function startmove(obj,josn,times,type,fn,callin){
    var t=0;
    var d = Number(times) / 20;
    var c={};
    console.log(d)

    if(typeof times=="undefined" ){return}

    if(typeof type=="undefined"){type="linear"}
    var nun={};//缓存样式
    for(var attr in josn){
        nun[attr]=css(obj,attr); // 0
        c[attr]=josn[attr]-nun[attr]; //600
    }
    clearInterval(startmove.timer);

    startmove.timer=setInterval(function(){
        t++;
        if(t>=d){
            clearInterval(startmove.timer);
            if(fn){
                fn.call(obj)
            }
        }else{
            for(var attr1 in nun){
                callin&&callin.call(obj);
                var value=Number((Tween[type](t,nun[attr1],c[attr1],d)).toFixed(2));
                value=isNaN(value)?0:value;
                css(obj,attr1,value);
            }
        }

    },20)
}
function MTween(init){
    var t = 0;
    var b = {};
    var c = {};
    var d = init.time / 20;
    console.log(d)
    for(var s in init.target){
        b[s] = css(init.el, s);
        c[s] = init.target[s] - b[s];
    }
    clearInterval(init.el.timer);
    init.el.timer = setInterval(
        function(){
            t++;

            if(t>d){
                clearInterval(init.el.timer);
                init.callBack&&init.callBack.call(init.el);
            }
                init.callIn&&init.callIn.call(init.el);
                for(var s in b){
                    var val = Number((Tween[init.type](t,b[s],c[s],d)).toFixed(2));
                    val=isNaN(val)?0:val;
                    css(init.el, s, val);
                }

        },
        20
    );
}
function css(obj,attr,val){
    if(attr == "scale"||attr == "scaleX"
        ||attr == "scaleY"||attr == "scaleZ"
        ||attr == "rotateX"||attr == "rotateY"
        ||attr == "rotateZ"||attr == "rotate"
        ||attr == "skewX"||attr == "skewY"
        ||attr == "translateX"||attr == "translateY"
        ||attr == "translateZ") {
        return cssTransForm(obj, attr, val);
    }
    if(typeof val=="undefined"){
        if(attr=="opacity"){
            if(obj.currentStyle){
                return Math.round(obj.currentStyle[attr]*100);
            }else{
                return Math.round(getComputedStyle(obj)[attr]*100);
            }
        }else{
            if(obj.currentStyle){
                return parseFloat(obj.currentStyle[attr]);
            }else{
                return parseFloat(getComputedStyle(obj)[attr]);
            }
        }
    }else{
        if(attr=="opacity"){
            obj.style.opacity=val/100;
            obj.style.filter="alpha(opacity="+val+")";
        }else{
            obj.style[attr]=val+"px";
        }
    }
}


function cssTransForm(elem,attr,value){
    if(!elem.transform){
        elem.transform={};
    }
    if(typeof value==="undefined"){
            if(typeof elem.transform[attr] === "undefined"){
                switch(attr){
                    case "scale":
                    case "scaleX":
                    case "scaleY":
                    case "scaleZ":
                        elem.transform[attr] = 100;
                        break;
                    default:
                        elem.transform[attr] = 0;
                        console.log( elem.transform)
                }
            }

        return  elem.transform[attr];
    }else {
        elem.transform[attr]=value;
        var transformVal="";
        for(var i in  elem.transform){
            switch (i){
                case "scale":
                case "scaleX":
                case "scaleY":
                case "scaleZ":
                    transformVal+=" "+i+"("+elem.transform[i]/100+")";
                    break;
                case "rotate":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "skewX":
                case "skewY":
                    transformVal+=" "+i+"("+elem.transform[i]+"deg)";
                    break;
                default:
                    transformVal+=" "+i+"("+elem.transform[i]+"px)"
            }
        }
        elem.style.transform=elem.style.WiketTransform=transformVal;

    }
}