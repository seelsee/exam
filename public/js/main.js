var $ = function (sel) {
    var domArr = document.querySelectorAll(sel),
    l = domArr.length;
    if(l === 1) {
        return domArr[0]
    } else {
        return domArr;
        }
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
    method: 'GET',
    url: '/',
    success: function(xhr) {
        var json = JSON.parse(xhr);
        console.log(json);
        $('.q').innerHTML = json.success;
    },
    // asyn: true
})