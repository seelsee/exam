const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const max_min = document.querySelector('.max_min');
const time = document.querySelector('.time');

function randomNum(m, n) {  
    return Math.floor(Math.random() * (n - m + 1) + m);  
}

// function week() {
var week = new Date().getDay();
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
// function isNumber(value) {
//     var patrn = /^[0-9]*$/;
//     if (patrn.exec(value) == null || value == "") {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(isNumber(week1));













// var $ = function (sel) {
//     var domArr = document.querySelectorAll(sel),
//     l = domArr.length;
//     if(l === 1) {
//         return domArr[0]
//     } else {
//         return domArr;
//         }
// }


    

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


// var x = week1 +6;

ajax({
    method: 'POST',
    url: '/weather',
    success: function(xhr) {
        // var json = JSON.parse(xhr);
        // console.log(xhr)
         var jjj = JSON.parse(xhr)
        // console.log()
        // console.log(JSON.stringify(xhr));
        // console.log(xhr.id);
        for(var i=0;i<jjj.length;i++){
        console.log(jjj[i]);
        // console.log(jjj[i].max_temp);
        // if (week == 0) {
        weather.innerHTML = jjj[week].weather;
        temp.innerHTML = randomNum(jjj[week].min_temp,jjj[week].max_temp) + '°';
        max_min.innerHTML = jjj[week].min_temp + '~' + jjj[week].max_temp + '°';
        time.innerHTML = month + '月' + day + '日' +' '+ weekday;

            
        // }
    }
        
     
    },
    // asyn: true
})
    