document.writeln("<style>#full_scroll{display:none;top:0;left:0;position:fixed;z-index:10000}#full_opacity{-moz-opacity:.6;opacity:.6;background-color:#000;display:block;top:0;left:0;position:fixed;z-index:-100;width:2000px;height:20000px}#full{position:relative;border:none;max-width:400px;height:100%;margin:50px auto 0;padding:0 10px 10px}#closediv{height:30px}#closebtn{float:right;margin-right:10px;width:30px;height:30px;cursor:pointer;text-align:center;line-height:30px}</style><div id=\'full_scroll\'><div id=\'full\'><div id=\'closediv\'><img src=\'//gw.alicdn.com/tfs/TB16l86YLb2gK0jSZK9XXaEgFXa-92-92.png_48x48.jpg\' id=\'closebtn\'></div><a href=\'https://s.click.taobao.com/B59vRnu\' target=\'_blank\'><img src=\'//p.pstatp.com/origin/pgc-image/40574b46b218470197f86ceab4d56497\' style=\'max-width:80vw;max-height:80vh;margin:auto\'></a></div><div id=\'full_opacity\'></div></div>");


$(document).ready(function(){var jumpurl=$("#jumpurl").text();if(getck("showdiv")==""){var data=new Date();var timestr=data.getFullYear()+"-"+(Number(data.getMonth())+1)+"-"+data.getDate()+" "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();document.cookie="showdiv="+timestr}else{var date_=convertdate(getck("showdiv"));var data=new Date();var num=Number(data.getTime())-Number(date_.getTime());if(num>=12*3600000){document.cookie="showdiv="}}$("#closebtn").click(function(){document.cookie="isshow=true";$("#full_scroll").fadeOut("slow")});$("#add_fav").click(function(){window.open(jumpurl);document.cookie="isshow=true";$("#full_scroll").fadeOut("slow")});$("#welcome_img").click(function(){window.open(jumpurl);document.cookie="isshow=true";$("#full_scroll").fadeOut("slow")});setTimeout("showdiv()",1)});function showdiv(){if(getck("isshow")=="true"){return}else{if(getck("showdiv")==""){$("#full_scroll").width(document.body.clientWidth);$("#full_scroll").height(document.body.clientHeight);$("#full_scroll").show()}else{var date_=convertdate(getck("showdiv"));var data=new Date();var num=Number(data.getTime())-Number(date_.getTime());if(num>=12*3600000){document.cookie="showdiv=";$("#full_scroll").width(document.body.clientWidth);$("#full_scroll").height(document.body.clientHeight);$("#full_scroll").show()}}}}var acookie=document.cookie.split("; ");function getck(sname){for(var i=0;i<acookie.length;i++){var arr=acookie[i].split("=");if(sname==arr[0]){if(arr.length>1)return unescape(arr[1]);else return""}}return""}function convertdate(datestr){var date_hidden=datestr;date_hidden=date_hidden.replace(":","-");date_hidden=date_hidden.replace(":","-");date_hidden=date_hidden.replace(" ","-");var date=new Date(Number(date_hidden.split("-")[0]),Number(date_hidden.split("-")[1])-1,Number(date_hidden.split("-")[2]),Number(date_hidden.split("-")[3]),Number(date_hidden.split("-")[4]),Number(date_hidden.split("-")[5]));return date}function clearcookie(){document.cookie="showdiv=";document.cookie="isshow=";location.href=location.href}
