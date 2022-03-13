function select_lang(num)
{
    if(num==1){
        lang_selected=1;
    }
    else if(num==2){
        lang_selected=2;
    }
}

function get_trans_result()
{
    target=document.getElementById("trans_target").value;
    if(!target){
        alert("请输入翻译内容");
        return;
    }

    if(lang_selected==0){
        alert("请选择翻译方式");
        return;
    }else if(lang_selected==1){
        var from = 'zh';
        var to = 'en';
    }else if(lang_selected==2){
        var from = 'en';
        var to = 'zh';
    }

    //此处appid和key得获得，可参考https://fanyi-api.baidu.com/doc/21。
    var appid = '';
    var key = '';
    var salt = (new Date).getTime();
    var query = target;
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'

    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
    $.ajax({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
        },
        success: function (data) {
            str_pretty1 = JSON.stringify(data)
            console.log(data);
            document.write("<p>"+str_pretty1+"</p>")
        }
    });
}

