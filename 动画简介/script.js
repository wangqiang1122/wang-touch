
// 初始化一些基础的变量
const TWO_PI = Math.PI * 2; // 是一个圆 也就是360度

var images = [],
    imageIndex = 0;

var image,
    imageWidth = 768,
    imageHeight = 485;

var vertices = [],
    indices = [],
    fragments = [];

var container = document.getElementById('container');

var clickPosition = [imageWidth * 0.5, imageHeight * 0.5];

window.onload = function() {
    // 立即设置目标的属性值而不产生过渡动画
    // 父级设置perspective属性(这个就相当于css3的景深) 就有了3d效果
    TweenMax.set(container, {perspective:100}); // 第一个参数 需要动画的对象
    var urls = [
   'https://t13.baidu.com/it/u=2240253723,3037481941&fm=224&app=112&f=JPEG?w=768&h=458'   
        ],
        image,
        loaded = 0;
    // very quick and dirty hack to load and display the first image asap
    images[0] = image = new Image();
        image.onload = function() {
            if (++loaded === 1) {
                imagesLoaded();
                for (var i = 1; i < 4; i++) {
                    images[i] = image = new Image();

                    image.src = urls[0];
                }
            }
        };
        image.src = urls[0];
};

function imagesLoaded() {
    placeImage(false);
    // triangulate();
    // shatter();
}

function placeImage(transitionIn) {
    image = images[imageIndex];

    if (++imageIndex === images.length) imageIndex = 0;

    image.addEventListener('click', imageClickHandler);
    container.appendChild(image);

    if (transitionIn !== false) {
        TweenMax.fromTo(image, 0.75, {y:-1000}, {y:0, ease:Back.easeOut});
    }
}

function imageClickHandler(event) {
    var box = image.getBoundingClientRect(), // 获取元素位置 top,lef,right,bottom,width,height； 
        top = box.top,
        left = box.left;

    clickPosition[0] = event.clientX - left;//点击的x轴
    clickPosition[1] = event.clientY - top; // 点击的y轴

    triangulate();
    shatter();
}

function triangulate() {
    // 点击扩展的
    var rings = [
            {r:50, c:30},
            {r:150, c:20},
            {r:300, c:10},
            // {r:400, c:20},
            // {r:500, c:20},
            {r:800, c:15},
            // {r:1200, c:20} 
        ],
        x,
        y,
        centerX = clickPosition[0],
        centerY = clickPosition[1];

    vertices.push([centerX, centerY]); // 第一个点是 点击的坐标

    rings.forEach(function(ring) {
        var radius = ring.r,
            count = ring.c,
            variance = radius * 0.25; // 扩散半径

        for (var i = 0; i < count; i++) {
            x = Math.cos((i / count) * TWO_PI) * radius + centerX + randomRange(-variance, variance);
            y = Math.sin((i / count) * TWO_PI) * radius + centerY + randomRange(-variance, variance);
            vertices.push([x, y]);
        }
    });

    vertices.forEach(function(v) { // 需要做一个过滤 把大于图片长款的换掉
        v[0] = clamp(v[0], 0, imageWidth); // 
        v[1] = clamp(v[1], 0, imageHeight);
    });
    console.log(vertices)
    indices = Delaunay.triangulate(vertices); // 三角剖分算法 算出点的坐标
    console.log(indices)
}

function shatter() {
    var p0, p1, p2,
        fragment;

    // 构建一个TimelineMax实例，创建时间轴。
    //  onComplete:shatterCompleteHandler
    var tl0 = new TimelineMax({ }); // onComplete: Function 动画结束时触发
    for (var i = 0; i < indices.length; i += 3) {
        p0 = vertices[indices[i + 0]];
        p1 = vertices[indices[i + 1]];
        p2 = vertices[indices[i + 2]];

        fragment = new F(p0, p1, p2);   
        var dx = fragment.centroid[0] - clickPosition[0],
            dy = fragment.centroid[1] - clickPosition[1],
            d = Math.sqrt(dx * dx + dy * dy),
            rx = 30 * sign(dy),
            ry = 90 * -sign(dx),
            delay = d * 0.003 * randomRange(0.9, 1.1);
        fragment.canvas.style.zIndex = Math.floor(d).toString();

        var tl1 = new TimelineMax();


        tl1.to(fragment.canvas, 1, { // 图片向下动画
            z:-500,
            rotationX:rx,
            rotationY:ry,
            ease:Cubic.easeIn
        });
        tl1.to(fragment.canvas, 0.4,{alpha:0}, 0.6); // 图片消失动画

        tl0.insert(tl1, delay);

        fragments.push(fragment);
        container.appendChild(fragment.canvas);
    }

    container.removeChild(image);
    image.removeEventListener('click', imagesLoaded);
}

function shatterCompleteHandler() { // 完成之后触发
    // add pooling?
    fragments.forEach(function(f) {
        container.removeChild(f.canvas);
    });
    fragments.length = 0;
    vertices.length = 0;
    indices.length = 0;

    placeImage();
}


function randomRange(min, max) { // 随机数
    return min + (max - min) * Math.random();
}

function clamp(x, min, max) { // 点的坐标最大不许超过width 和height
    return x < min ? min : (x > max ? max : x);
}

function sign(x) {
    return x < 0 ? -1 : 1;
}

//
var F = function(v0, v1, v2) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;

    this.computeBoundingBox(); // 计算最值和最小值 长宽高
    this.computeCentroid(); // 计算三角形的中心点
    this.createCanvas(); // 新建canvas元素 赋值属性
    this.clip(); // 剪裁图片
};
F.prototype = {
    computeBoundingBox:function() {
        // 计算最大值和最小值
        var xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]),
            xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]),
            yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]),
            yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

        this.box ={
            x:xMin,
            y:yMin,
            w:xMax - xMin, // 最大x - 最小x 等于宽
            h:yMax - yMin
        };
    },
    computeCentroid:function() { // 三角形的中心点动画的时候需要
        var x = (this.v0[0] + this.v1[0] + this.v2[0]) / 3,
            y = (this.v0[1] + this.v1[1] + this.v2[1]) / 3;

        this.centroid = [x, y];
    },
    createCanvas:function() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.box.w;
        this.canvas.height = this.box.h;
        this.canvas.style.width = this.box.w + 'px';
        this.canvas.style.height = this.box.h + 'px';
        this.canvas.style.left = this.box.x + 'px';
        this.canvas.style.top = this.box.y + 'px';
        this.ctx = this.canvas.getContext('2d');
    },
    clip:function() {
        this.ctx.translate(-this.box.x, -this.box.y);
        this.ctx.beginPath();
        this.ctx.moveTo(this.v0[0], this.v0[1]);
        this.ctx.lineTo(this.v1[0], this.v1[1]);
        this.ctx.lineTo(this.v2[0], this.v2[1]);
        this.ctx.closePath();
        this.ctx.clip();
        this.ctx.drawImage(image, 0, 0);
    }
};