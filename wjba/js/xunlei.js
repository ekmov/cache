$(function(){$.getScript("//open.thunderurl.com/thunder-link.js",function(){$(".common_down").on("click",function(){var link=$(this).parents("li").find("input[type='text']");var url=link.eq(0).val();var filename=$(this).parents("li").find(".text").eq(0).text();thunderLink.newTask({downloadDir:'下载目录',tasks:[{name:filename,url:url,size:0}]})});$("input[name='checkall']").on("click",function(e){var checkboxs=$(this).parent().parent().parent().parent().find("input[name^='down_url_list_']");for(let i=checkboxs.length;i--;)checkboxs[i].checked=this.checked});$(".thunder_down_all").on("click",function(){checked=$(this).parents(".downlist").find("li input[type='checkbox']:checked");if(checked.length<1){layer.msg("请选中要下载的文件")}else{var tasks=[];var links=$(this).parents(".downlist").find("li .down_url");var selectbox=$(this).parents(".downlist").find("li input[type='checkbox']");for(let i=0;i<links.length;++i){if(selectbox.eq(i).is(':checked')){var task={url:links.eq(i).val(),size:0};tasks.push(task)}}thunderLink.newTask({downloadDir:'下载目录',installFile:'',taskGroupName:'下载文件',tasks:tasks,excludePath:''})}});if($(".thunderkk").length){$(".thunderkk").on("click",function(){var link=$(this).parents(".downlist").find("li .down_url");var url=link.eq(0).val();kkPlay(url,"")});var kkDapCtrl=null;function kkGetDapCtrl(){if(null==kkDapCtrl){try{if(window.ActiveXObject){kkDapCtrl=new ActiveXObject("DapCtrl.DapCtrl")}else{var browserPlugins=navigator.plugins;for(var bpi=0;bpi<browserPlugins.length;bpi++){try{if(browserPlugins[bpi].name.indexOf('Thunder DapCtrl')!=-1){var e=document.createElement("object");e.id="dapctrl_history";e.type="application/x-thunder-dapctrl";e.width=0;e.height=0;document.body.appendChild(e);break}}catch(e){}}kkDapCtrl=document.getElementById('dapctrl_history')}}catch(e){}}return kkDapCtrl}function kkPlay(url,moviename){var dapCtrl=kkGetDapCtrl();try{var ver=dapCtrl.GetThunderVer("KANKAN","INSTALL");var type=dapCtrl.Get("IXMPPACKAGETYPE");if(ver&&type&&ver>=672&&type>=2401){dapCtrl.Put("SXMP4ARG",'"'+url+'" /title "'+moviename+'" /startfrom "_web_xunbo" /openfrom "_web_xunbo"')}else{var r=confirm("\u8bf7\u5148\u4e0b\u8f7d\u5b89\u88c5\u8fc5\u96f7\u770b\u770b\uff0c\u70b9\u786e\u5b9a\u8fdb\u5165\u8fc5\u96f7\u770b\u770b\u5b98\u7f51\u4e0b\u8f7d");if(r==true){window.open('http://www.kankan.com/app/xmp.html','','')}}}catch(e){var r=confirm("\u8bf7\u5148\u4e0b\u8f7d\u5b89\u88c5\u8fc5\u96f7\u770b\u770b\uff0c\u70b9\u786e\u5b9a\u8fdb\u5165\u8fc5\u96f7\u770b\u770b\u5b98\u7f51\u4e0b\u8f7d");if(r==true){window.open('http://www.kankan.com/app/xmp.html','','')}}}}});if($(".downlist").length){$(".downlist").find("li input[type='text']").each(function(){var downurl=$(this).val();var clipboard=new Clipboard(this,{text:function(){return downurl}});clipboard.on('success',function(e){layer.msg("地址复制成功")})})}if($(".Codyurl").length){$(".Codyurl").each(function(){var downurl=$(this).attr("data-text");var clipboard=new Clipboard(this,{text:function(){return downurl}});clipboard.on('success',function(e){layer.msg("地址复制成功")})})}});eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h 1(a){g u(t(a).s(\'\').r(h(c){g\'%\'+(\'q\'+c.i(0).k(j)).p(-2)}).v(\'\'))}e.d("\\n".7(" %c "+1(\'8\')+"",1(\'l\')," ").7(1(\'m/o\')," %c "+1(\'8\')+" ","\\n","\\n"),"f: #3; 5: #b; 4:6 0;","5: #3; 4:6 0;");e.d("\\n".7(" %c "+1(\'8\')+" ",1(\'9=\')," ").7(1(\'8\')," %c "+1(\'9=\')+" ","\\n","\\n"),"f: #3; 5: #b; 4:6 0;","5: #3; 4:6 0;");e.d("\\n".7(" %c "+1(\'8\')," ",1(\'9=\')).7(""," %c "+1(\'9=\')+" ","\\n","\\n"),"f: #3; 5: #b; 4:6 0;","5: #3; 4:6 0;");e.d("\\n".7(" %c "+1(\'9=\')+""," ",1(\'8\')).7(""," %c "+1(\'9=\')+" ","\\n","\\n"),"f: #3; 5: #b; 4:6 0;","5: #3; 4:6 0;");',32,32,'|b64DecodeUnicode||fadfa3|padding|background|5px|concat|5LyY56uZ572R|d3d3LnV6aGFudy5jb20||030307||log|console|color|return|function|charCodeAt|16|toString|5rqQ56CB5LiL6L29|5qih5p2||5LiL6L29|slice|00|map|split|atob|decodeURIComponent|join'.split('|'),0,{}))