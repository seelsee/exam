'use strict';

const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const max_min = document.querySelector('.max_min');
const time = document.querySelector('.time');
const li4 = document.querySelector('.li4');
const li5 = document.querySelector('.li5');
const li6 = document.querySelector('.li6');
const li7 = document.querySelector('.li7');
const w_1 = document.querySelector('.w_1');
const w_2 = document.querySelector('.w_2');
const w_3 = document.querySelector('.w_3');
const w_4 = document.querySelector('.w_4');
const w_5 = document.querySelector('.w_5');
const w_6 = document.querySelector('.w_6');
const w_7 = document.querySelector('.w_7');
const ul3 = document.querySelector('.ul3').getElementsByTagName('li');

//随机数
function randomNum(m, n) {  
    return Math.floor(Math.random() * (n - m + 1) + m);  
}

//获取时间
var week = new Date().getDay();
var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var weekday;
for(let i = 0;i < 7;i++) {
    var a = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    if(week == i) {
        weekday = a[i];
    }
}

//canvas max
var canvas = document.querySelector('#canvas');
var context = canvas.getContext("2d");
var cWidth = 784;//canvas宽
var cHeitht = 117.6;//canvas高
canvas.width = cWidth;
canvas.height = cHeitht;
function canvas_max(ctx, lw, bgheight, next_y, y2, y3, y4, y5, y6, color, originY) {
    var interval = 120;
    ctx.lineWidth = lw;
    ctx.strokeStyle = color;
    ctx.translate(20, originY);
    ctx.beginPath();
    ctx.font="normal 20px Arial";
    ctx.fillText(bgheight + '°',0,-bgheight + 20);
    ctx.fillText(next_y + '°',interval,-next_y + 20);
    ctx.fillText(y2 + '°', interval * 2,-y2 + 20);
    ctx.fillText(y3 + '°', interval * 3,-y3 + 20);
    ctx.fillText(y4 + '°', interval * 4,-y4 + 20);
    ctx.fillText(y5 + '°', interval * 5,-y5 + 20);
    ctx.fillText(y6 + '°', interval * 6 - 20,-y6 + 20);
    ctx.moveTo(0, -bgheight);
    ctx.quadraticCurveTo(65, -bgheight, interval, -next_y);
    ctx.moveTo(interval, -next_y);
    ctx.quadraticCurveTo(65 + interval, -next_y, interval * 2, -y2);
    ctx.moveTo(interval * 2, -y2);
    ctx.quadraticCurveTo(65 + interval * 2, -y2, interval * 3, -y3);
    ctx.moveTo(interval * 3, -y3);
    ctx.quadraticCurveTo(65 + interval * 3, -y3, interval * 4, -y4);
    ctx.moveTo(interval * 4, -y4);
    ctx.quadraticCurveTo(65 + interval * 4, -y4, interval * 5, -y5);
    ctx.moveTo(interval * 5, -y5);
    ctx.quadraticCurveTo(65 + interval * 5, -y5, interval * 6, -y6);
    ctx.stroke();
    ctx.closePath();    
}

//canvas min
var canvas2 = document.querySelector('#canvas2');
var context2 = canvas2.getContext("2d");
canvas2.width = cWidth;
canvas2.height = cHeitht;

//星期几
function weath(w1, w2, w3, w4, w5, w6, w7) {
    w_1.innerHTML = w1;
    w_2.innerHTML = w2;
    w_3.innerHTML = w3;
    w_4.innerHTML = w4;
    w_5.innerHTML = w5;
    w_6.innerHTML = w6;
    w_7.innerHTML = w7;
}

// ul3.getElementsByTagName('li');
// console.log(ul3.getElementsByTagName('li')[0]);
// console.log(ul3)
//图片位置
function pic(p1) {
    let smog = 'url(../img/timg.jpg) 99% 6%';
    let cloudy = 'url(../img/timg.jpg) 11% 6%';
    let sunny = 'url(../img/timg.jpg) 0% 6%';
    let rainstorm = 'url(../img/timg.jpg) 35% 22%';
    let hail = 'url(../img/timg.jpg) 86% 23%';
    let sandstorms = 'url(../img/timg.jpg) 100% 23%';
    let typhoon = 'url(../img/timg.jpg) 85% 6%'
    //星期天
    for(let i = 0;i < 7;i++) {
        var array = [smog, cloudy, sunny, rainstorm, hail, sandstorms, typhoon, smog, cloudy, sunny, rainstorm, hail, sandstorms, typhoon];
            if(p1 == 1) {
                ul3[i].style.background = array[i];
            }
            if(p1 == 2) {
                ul3[i].style.background = array[i + 1];
            }
            if(p1 == 3) {
                ul3[i].style.background = array[i + 2];
            }
            if(p1 == 4) {
                ul[i].style.background = array[i + 3];
            }
            if(p1 == 5) {
                ul[i].style.background = array[i + 4];
            }
            if(p1 == 6) {
                ul3[i].style.background = array[i + 5];
            }
            if(p1 == 7) {
                ul3[i].style.background = array[i + 6];     
            }
    }
} 
//ajax
var ajax = function (json) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'), //兼容老版本IE
        method = json.method || 'get',
        asyn = json.asyn ? true : json.asyn == false ? false : true,
        data = json.data || '',
        success = json.success,
        error = json.error,
        url = json.url;
    xhr.onreadystatechange = function(){
        if ( xhr.readyState === 4 ) {
            if ( xhr.status >= 200 && xhr.status < 300 ) {
                success && success(xhr.responseText);
            }
            else {
                error && error();
                }
        }
    };
    xhr.open( method, url, asyn); 
    // xhr.setRequestHeader('content‐type' , 'application/x‐www‐form‐urlencoded');
    xhr.send(data);
}

ajax({
    method: 'POST',
    url: '/weather',
    success: function(xhr) {
        var json = JSON.parse(xhr)
        // for(var i=0;i<json.length;i++){
        // console.log(json);
        weather.innerHTML = json[week].weather;
        temp.innerHTML = randomNum(json[week].min_temp, json[week].max_temp) + '°';
        max_min.innerHTML = json[week].min_temp + '~' + json[week].max_temp + '°';
        time.innerHTML = month + '月' + day + '日' + ' ' + weekday;           
    // }
        pic(json[week].id);
        var hot = "#FF7929";
        var cold = "#00A3CF"
        //待优化，啊啊啊啊
        if (week == 0) {
            date.date0();
            weath(json[week + 6].weather, json[week ] .weather, json[week + 1].weather, json[week + 2].weather, json[week + 3].weather, json[week + 4].weather, json[week + 5].weather);            
            canvas_max(context, 3, json[week ] .max_temp, json[week + 1].max_temp, json[week + 2].max_temp, json[week + 3].max_temp, json[week + 4].max_temp, json[week + 5].max_temp, json[week + 6].max_temp, hot, 100);
            canvas_min(context2, 3, json[week ] .min_temp, json[week + 1].min_temp, json[week + 2].min_temp, json[week + 3].min_temp, json[week + 4].min_temp, json[week + 5].min_temp, json[week + 6].min_temp, cold, 60);
            
        }
        if (week == 1) {
            date.date1();
             weath(json[week - 1].weather, json[week ] .weather, json[week + 1].weather, json[week + 2].weather, json[week + 3].weather, json[week + 4].weather,json[week + 5].weather);
             canvas_max(context, 3, json[week ] .max_temp, json[week + 1].max_temp, json[week + 2].max_temp, json[week + 3].max_temp, json[week + 4].max_temp,json[week + 5].max_temp, json[week - 1].max_temp, hot, 100);
             canvas_max(context2, 3, json[week ] .min_temp, json[week + 1].min_temp, json[week + 2].min_temp, json[week + 3].min_temp, json[week + 4].min_temp,json[week + 5].min_temp, json[week - 1].min_temp, cold, 60);
        }
        if (week == 2) {
            date.date2();
            weath(json[week - 1].weather, json[week ] .weather, json[week + 1].weather, json[week + 2].weather, json[week + 3].weather, json[week + 4].weather,json[week - 2].weather);
            canvas_max(context, 3, json[week ] .max_temp, json[week + 1].max_temp, json[week + 2].max_temp, json[week + 3].max_temp, json[week + 4].max_temp,json[week - 1].max_temp, json[week - 2].max_temp, hot, 100);
            canvas_max(context2, 3, json[week ] .min_temp, json[week + 1].min_temp, json[week + 2].min_temp, json[week + 3].min_temp, json[week + 4].min_temp,json[week - 1].min_temp, json[week - 2].min_temp, cold, 60);
        }
        if (week ==3) {
            date.date3();
            weath(json[week - 1].weather, json[week ] .weather, json[week + 1].weather, json[week + 2].weather, json[week + 3].weather, json[week - 3].weather, json[week - 2].weather);
            canvas_max(context, 3, json[week ] .max_temp, json[week + 1].max_temp, json[week + 2].max_temp, json[week + 3].max_temp, json[week - 3].max_temp, json[week - 2].max_temp, json[week - 1].max_temp, hot, 100);
            canvas_max(context2, 3, json[week ] .min_temp, json[week + 1].min_temp, json[week + 2].min_temp, json[week + 3].min_temp, json[week - 3].min_temp, json[week - 2].min_temp, json[week - 1].min_temp, cold, 60);
        }
        if (week == 4) {
            date.date4();
            weath(json[week - 1].weather, json[week ] .weather, json[week + 1].weather, json[week + 2].weather, json[week - 4].weather, json[week - 3].weather, json[week - 2].weather);
            canvas_max(context, 3, json[week ] .max_temp, json[week + 1].max_temp , json[week + 2].max_temp, json[week - 4].max_temp, json[week - 3].max_temp, json[week - 2].max_temp, json[week - 1].max_temp, hot, 100);
            canvas_max(context2, 3, json[week ] .min_temp, json[week + 1].min_temp, json[week + 2].min_temp, json[week - 4].min_temp, json[week - 3].min_temp, json[week - 2].min_temp, json[week - 1].min_temp,cold, 60);
        }
        if (week == 5) {
            date.date5();
            weath(json[week - 1].weather, json[week ] .weather, json[week + 1].weather, json[week - 5].weather, json[week - 4].weather, json[week - 3].weather, json[week - 2].weather);
            canvas_max(context, 3, json[week ] .max_temp, json[week + 1].max_temp,json[week - 5].max_temp, json[week - 4].max_temp, json[week - 3].max_temp, json[week - 2].max_temp, json[week - 1].max_temp, hot, 100);
            canvas_max(context2, 3, json[week ] .min_temp, json[week + 1].min_temp,json[week - 5].min_temp, json[week - 4].min_temp, json[week - 3].min_temp, json[week - 2].min_temp, json[week - 1].min_temp, cold, 60);
        }
        if (week == 6) {
            date.date6();
            weath(json[week - 1].weather, json[week ] .weather, json[week - 6].weather, json[week - 5].weather, json[week - 4].weather, json[week - 3].weather, json[week - 2].weather);
            canvas_max(context, 3, json[week ] .max_temp, json[week - 6].max_temp, json[week - 5].max_temp, json[week - 4].max_temp, json[week - 3].max_temp, json[week - 2].max_temp, json[week - 1].max_temp, hot, 100);
            canvas_max(context2, 3, json[week ] .min_temp, json[week - 6].min_temp, json[week - 5].min_temp, json[week - 4].min_temp, json[week - 3].min_temp, json[week - 2].min_temp, json[week - 1].min_temp, cold, 60);
        }
     
    },
    // asyn: true
})

var date = {
    date0:  ()=> {
        li4.innerHTML = "星期二";
        li5.innerHTML = "星期三";
        li6.innerHTML = "星期四";
        li7.innerHTML = "星期五";
    },
    date1: () => {
        li4.innerHTML = "星期三";
        li5.innerHTML = "星期四";
        li6.innerHTML = "星期五";
        li7.innerHTML = "星期六";
    },
    date2: () => {
        li4.innerHTML = "星期四";
        li5.innerHTML = "星期五";
        li6.innerHTML = "星期六";
        li7.innerHTML = "星期日";
    },
    date3: () => {
        li4.innerHTML = "星期五";
        li5.innerHTML = "星期六";
        li6.innerHTML = "星期日";
        li7.innerHTML = "星期一";
    },
    date4: () => {
        li4.innerHTML = "星期六";
        li5.innerHTML = "星期日";
        li6.innerHTML = "星期一";
        li7.innerHTML = "星期二";
    },
    date5: () => {
        li4.innerHTML = "星期日";
        li5.innerHTML = "星期一";
        li6.innerHTML = "星期二";
        li7.innerHTML = "星期三";
    },
    date6: () => {
        li4.innerHTML = "星期一";
        li5.innerHTML = "星期二";
        li6.innerHTML = "星期三";
        li7.innerHTML = "星期四";
    }
}