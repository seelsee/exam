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


function randomNum(m, n) {  
    return Math.floor(Math.random() * (n - m + 1) + m);  
}

// function week() {
var week = new Date().getDay();
// var week = 3
var day = new Date().getDate();
var month = new Date().getMonth() + 1;
  if (week == 0) {
    weekday = "星期日";
    
  }
  else if (week == 1) {
    weekday = "星期一";
    
  }
  else if (week == 2) {
    weekday = "星期二";
    
  }
  else if (week == 3) {
    weekday = "星期三";
    
  }
  else if (week == 4) {
    weekday = "星期四";
    
  }
  else if (week == 5) {

    weekday = "星期五";
  }
  else if (week == 6) {
    weekday = "星期六";
    
  }


//canvas max

var canvas = document.querySelector('#canvas');
var context = canvas.getContext("2d");
// console.log(canvas)
var cWidth = 784;//canvas宽
var cHeitht = 117.6;//canvas高
canvas.width = cWidth;
canvas.height = cHeitht;

function canvas_max(ctx,lw,bgheight,next_y,y2,y3,y4,y5,y6) {
    var jiange = 120;
    ctx.lineWidth = lw;
    ctx.strokeStyle = "rgb(255,121,41)";
    ctx.translate(20,100);
    ctx.beginPath();
    ctx.moveTo(0, -bgheight);
    ctx.quadraticCurveTo(65, -bgheight, jiange, -next_y);
    ctx.moveTo(jiange,-next_y);
    ctx.quadraticCurveTo(65 + jiange, -next_y, jiange*2, -y2);
    ctx.moveTo(jiange*2,-y2);
    ctx.quadraticCurveTo(65 + jiange*2, -y2, jiange*3, -y3);
    ctx.moveTo(jiange*3,-y3);
    ctx.quadraticCurveTo(65 + jiange*3, -y3, jiange*4, -y4);
    ctx.moveTo(jiange*4,-y4);
    ctx.quadraticCurveTo(65 + jiange*4, -y4, jiange*5, -y5);
    ctx.moveTo(jiange*5,-y5);
    ctx.quadraticCurveTo(65 + jiange*5, -y4, jiange*6, -y6);

    ctx.stroke();
    ctx.closePath();    
}

//canvas min
var canvas2 = document.querySelector('#canvas2');
var context2 = canvas2.getContext("2d");
canvas2.width = cWidth;
canvas2.height = cHeitht;
function canvas_min(ctx,lw,bgheight,next_y,y2,y3,y4,y5,y6) {
    var jiange = 120;
    ctx.lineWidth = lw;
    ctx.strokeStyle = "rgb(0, 163, 207)";
    ctx.translate(20,80);
    ctx.beginPath();
    ctx.moveTo(0, -bgheight);
    ctx.quadraticCurveTo(65, -bgheight, jiange, -next_y);
    ctx.moveTo(jiange,-next_y);
    ctx.quadraticCurveTo(65 + jiange, -next_y, jiange*2, -y2);
    ctx.moveTo(jiange*2,-y2);
    ctx.quadraticCurveTo(65 + jiange*2, -y2, jiange*3, -y3);
    ctx.moveTo(jiange*3,-y3);
    ctx.quadraticCurveTo(65 + jiange*3, -y3, jiange*4, -y4);
    ctx.moveTo(jiange*4,-y4);
    ctx.quadraticCurveTo(65 + jiange*4, -y4, jiange*5, -y5);
    ctx.moveTo(jiange*5,-y5);
    ctx.quadraticCurveTo(65 + jiange*5, -y4, jiange*6, -y6);

    ctx.stroke();
    ctx.closePath(); 
    console.log(1)
}

function weath(w1,w2,w3,w4,w5,w6,w7) {
    w_1.innerHTML = w1;

    w_2.innerHTML = w2;
    w_3.innerHTML = w3;
    w_4.innerHTML = w4;
    w_5.innerHTML = w5;
    w_6.innerHTML = w6;
    w_7.innerHTML = w7;
    console.log(weather);
}
    

ajax = function (json) {
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
        xhr.open( method, url, asyn); //提示 ： 顺序不能错 错了顺序也要报错
        // xhr.setRequestHeader('content‐type' , 'application/x‐www‐form‐urlencoded');
        xhr.send(data);
}

ajax({
    method: 'POST',
    url: '/weather',
    success: function(xhr) {

         var jjj = JSON.parse(xhr)

        // for(var i=0;i<jjj.length;i++){
        console.log(jjj);

        weather.innerHTML = jjj[week].weather;
        temp.innerHTML = randomNum(jjj[week].min_temp,jjj[week].max_temp) + '°';
        max_min.innerHTML = jjj[week].min_temp + '~' + jjj[week].max_temp + '°';
        time.innerHTML = month + '月' + day + '日' +' '+ weekday;
        
            
        // }
    // }

        //待优化，啊啊啊啊
        if (week == 0) {
            li4.innerHTML = "星期二";
            li5.innerHTML = "星期三";
            li6.innerHTML = "星期四";
            li7.innerHTML = "星期五";
            weath(jjj[week+6].weather, jjj[week].weather, jjj[week+1].weather, jjj[week+2].weather, jjj[week+3].weather, jjj[week+4].weather,jjj[week+5].weather);

            canvas_max(context, 3, jjj[week].max_temp, jjj[week+1].max_temp,jjj[week+2].max_temp, jjj[week+3].max_temp, jjj[week+4].max_temp,jjj[week+5].max_temp, jjj[week+6].max_temp);
            canvas_min(context2, 3, jjj[week].min_temp, jjj[week+1].min_temp,jjj[week+2].min_temp, jjj[week+3].min_temp, jjj[week+4].min_temp,jjj[week+5].min_temp, jjj[week+6].min_temp);
           
    
        }
        if (week == 1) {
            li4.innerHTML = "星期三";
            li5.innerHTML = "星期四";
            li6.innerHTML = "星期五";
            li7.innerHTML = "星期六";
             weath(jjj[week-1].weather, jjj[week].weather, jjj[week+1].weather, jjj[week+2].weather, jjj[week+3].weather, jjj[week+4].weather,jjj[week+5].weather);
             canvas_max(context, 3, jjj[week].max_temp, jjj[week+1].max_temp,jjj[week+2].max_temp, jjj[week+3].max_temp, jjj[week+4].max_temp,jjj[week+5].max_temp, jjj[week-1].max_temp);
             canvas_min(context2, 3, jjj[week].min_temp, jjj[week+1].min_temp,jjj[week+2].min_temp, jjj[week+3].min_temp, jjj[week+4].min_temp,jjj[week+5].min_temp, jjj[week-1].min_temp);
        }
        if (week == 2) {
            li4.innerHTML = "星期四";
            li5.innerHTML = "星期五";
            li6.innerHTML = "星期六";
            li7.innerHTML = "星期日";
            weath(jjj[week-1].weather, jjj[week].weather, jjj[week+1].weather, jjj[week+2].weather, jjj[week+3].weather, jjj[week+4].weather,jjj[week-2].weather);
            canvas_max(context, 3, jjj[week].max_temp, jjj[week+1].max_temp,jjj[week+2].max_temp, jjj[week+3].max_temp, jjj[week+4].max_temp,jjj[week-1].max_temp, jjj[week-2].max_temp);
            canvas_min(context2, 3, jjj[week].min_temp, jjj[week+1].min_temp,jjj[week+2].min_temp, jjj[week+3].min_temp, jjj[week+4].min_temp,jjj[week-1].min_temp, jjj[week-2].min_temp);
        }
        if (week ==3) {
            li4.innerHTML = "星期五";
            li5.innerHTML = "星期六";
            li6.innerHTML = "星期日";
            li7.innerHTML = "星期一";
            weath(jjj[week-1].weather, jjj[week].weather, jjj[week+1].weather, jjj[week+2].weather, jjj[week+3].weather, jjj[week-3].weather,jjj[week-2].weather);
            canvas_max(context, 3, jjj[week].max_temp, jjj[week+1].max_temp,jjj[week+2].max_temp, jjj[week+3].max_temp, jjj[week-3].max_temp,jjj[week-2].max_temp, jjj[week-1].max_temp);
            canvas_min(context2, 3, jjj[week].min_temp, jjj[week+1].min_temp,jjj[week+2].min_temp, jjj[week+3].min_temp, jjj[week-3].min_temp,jjj[week-2].min_temp, jjj[week-1].min_temp);
        }
        if (week == 4) {
            li4.innerHTML = "星期六";
            li5.innerHTML = "星期日";
            li6.innerHTML = "星期一";
            li7.innerHTML = "星期二";
            weath(jjj[week-1].weather, jjj[week].weather, jjj[week+1].weather, jjj[week+2].weather, jjj[week-4].weather, jjj[week-3].weather,jjj[week-2].weather);
            canvas_max(context, 3, jjj[week].max_temp, jjj[week+1].max_temp,jjj[week+2].max_temp, jjj[week-4].max_temp, jjj[week-3].max_temp,jjj[week-2].max_temp, jjj[week-1].max_temp);
            canvas_min(context2, 3, jjj[week].min_temp, jjj[week+1].min_temp,jjj[week+2].min_temp, jjj[week-4].min_temp, jjj[week-3].min_temp,jjj[week-2].min_temp, jjj[week-1].min_temp);
        }
        if (week == 5) {
            li4.innerHTML = "星期日";
            li5.innerHTML = "星期一";
            li6.innerHTML = "星期二";
            li7.innerHTML = "星期三";
            weath(jjj[week-1].weather, jjj[week].weather, jjj[week+1].weather, jjj[week-5].weather, jjj[week-4].weather, jjj[week-3].weather,jjj[week-2].weather);
            canvas_max(context, 3, jjj[week].max_temp, jjj[week+1].max_temp,jjj[week-5].max_temp, jjj[week-4].max_temp, jjj[week-3].max_temp,jjj[week-2].max_temp, jjj[week-1].max_temp);
            canvas_min(context2, 3, jjj[week].min_temp, jjj[week+1].min_temp,jjj[week-5].min_temp, jjj[week-4].min_temp, jjj[week-3].min_temp,jjj[week-2].min_temp, jjj[week-1].min_temp);
        }
        if (week == 6) {
            li4.innerHTML = "星期一";
            li5.innerHTML = "星期二";
            li6.innerHTML = "星期三";
            li7.innerHTML = "星期四";
            weath(jjj[week-1].weather, jjj[week].weather, jjj[week-6].weather, jjj[week-5].weather, jjj[week-4].weather, jjj[week-3].weather,jjj[week-2].weather);
            canvas_max(context, 3, jjj[week].max_temp, jjj[week-6].max_temp,jjj[week-5].max_temp, jjj[week-4].max_temp, jjj[week-3].max_temp,jjj[week-2].max_temp, jjj[week-1].max_temp);
            canvas_min(context2, 3, jjj[week].min_temp, jjj[week-6].min_temp,jjj[week-5].min_temp, jjj[week-4].min_temp, jjj[week-3].min_temp,jjj[week-2].min_temp, jjj[week-1].min_temp);
        }
     
    },
    // asyn: true
})
    

// function max_c() {

// }


