 // //1.设置canvas大小
    // var can = document.getElementById("Canvas"); //为can元素设置宽高，而不是画布getcontext
    // //var can=document.getContext(canva);
    // var w = window.innerWidth; //使用全局变量保存宽高，减少访问，便于调用
    // var h = window.innerHeight; //属性名字为inner-width/height
    // can.width = w;
    // can.height = h;
    // window.onresize = function() {
    //   w = window.innerWidth;
    //   h = window.innerHeight; //需要重新为w,h赋值
    //   can.width = w;
    //   can.height = h;
    // };

    // function random(min, max) {
    //   return Math.random() * (max - min) + min;
    // }
    // //雨滴原型
    // function Rain() {}
    // var canContent = can.getContext("2d");
    // Rain.prototype = {
    //   init: function() {
    //     //参数
    //     this.x = random(0, w);
    //     this.y = 0; //起点
    //     this.l = random(0.8 * h, 0.9 * h); //下落高度
    //     this.v = random(4, 5); //下落速度
    //     this.r = 1; //水花的初始半径
    //     this.vr = random(1, 2); //半径扩大的速度
    //     this.rmax = random(40, 50); //开始变透明的半径
    //     this.a = 1; //初始透明度
    //     this.va = 0.98; //透明度的变化
    //     this.amin = 0.2;
    //   },
    //   draw: function() {
    //     //绘制
    //     //.1绘制下落
    //     if (this.y < this.l) {
    //       canContent.fillStyle = "rgb(0,255,255)";
    //       canContent.fillRect(this.x, this.y, 2, 20); //雨滴位置变化
    //     } else {
    //       //.2绘制水花
    //       canContent.strokeStyle = "rgba(0,255,255," + this.a + ")"; //
    //       //"rgba(0,255,255,this.a)";//会出错，读取字符串，无法获得变量变化值
    //       canContent.beginPath();
    //       canContent.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    //       canContent.stroke();
    //     }
    //   },
    //   update: function() {
    //     //更新坐标值,并绘制
    //     //.1下落过程的坐标更新
    //     if (this.y < this.l) {
    //       this.y += this.v;
    //     } else {
    //       //.2水花过程的坐标更新（坐标不变，半径变化，透明度变化）
    //       //更新后绘制雨滴：

    //       /*
    //             ////透明度的变化取决于半径大小
    //             this.r+=this.vr;
    //             if(this.r<this.rmax){
    //                 this.a*=this.va;
    //             }else{
    //                 this.init();
    //             }
    //             }
    //             */
    //       //透明度的变化取决于半径大小,半径大小取决于透明度大小
    //       if (this.a > this.amin) {
    //         this.r += this.vr;
    //         if (this.r > this.rmax) {
    //           this.a *= this.va; //乘更自然
    //         }
    //       } else {
    //         this.init(); //透明度变了的话，回到天上
    //       }
    //     }
    //     this.draw();
    //   }
    // };

    // //创建30个雨滴实例，不同时间落下
    // var rainArray = []; //使用数组定位雨滴

    // //创建雨滴
    // function createRain() {
    //   var rain = new Rain();
    //   rain.init(); //基本配置
    //   rain.draw();
    //   rainArray.push(rain); //出现的时候添加logo/gps
    // }

    // //每隔一段时间生成一个雨滴
    // for (var i = 0; i < 30; i++) {
    //   setTimeout(createRain, 300 * i); //隔300*i ms执行一次createRain
    // } //任务栈：同时创建30个setTimeout，但每个setTimeout开始执行的时间不同
    // //?不能使用creatRain(),而要使用createRain？

    // //移动雨滴
    // function moveRain() {
    //   //生生透明度遮盖层，进行叠加，遮盖之前的雨滴实现渐暗效果，视觉上为雨滴下落
    //   canContent.fillStyle = "rgba(0,0,0,0.05)";
    //   canContent.fillRect(0, 0, w, h);
    //   //如何获取生成的雨滴？数组下标进行定位
    //   for (var k = 0; k < rainArray.length; k++) {
    //     rainArray[k].update();
    //     //rainArray.length的长度会不断更新，不能直接使用var l=rainArray.length
    //   }
    // }

    // setInterval(moveRain, 1000 / 60);