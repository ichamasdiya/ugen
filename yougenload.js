/**
 * Monetize URL Video Loader Plugin (YouGenURL) 1.1.0
 * @author Leo Wijaya (www.jomblo.asia/p/yougenurl)
 * @license http://opensource.org/licenses/Apache-2.0
 * 
 * With Modded Plugin:
 * jQuery iframe click tracking plugin 1.1.0
 * @author Vincent Par� (www.finalclap.com) � 2013-2015.
 * 
 * Colorbox 1.6.1
 * @author Jack Moore (www.jacklmoore.com/colorbox)
 * 
 */
(function($){$.fn.iframeTracker=function(handler){var target=this.get();if(handler===null || handler===false){$.iframeTracker.untrack(target);}else if(typeof handler=="object"){$.iframeTracker.track(target,handler);}else{throw new Error("Wrong handler type (must be an object, or null|false to untrack)");}};$.iframeTracker={focusRetriever:null,focusRetrieved:false,handlersList:[],isIE8AndOlder:false,init:function(){try{if($.browser.msie==true && $.browser.version < 9){this.isIE8AndOlder=true;}}catch(ex){try{var matches=navigator.userAgent.match(/(msie) ([\w.]+)/i);if(matches[2] < 9){this.isIE8AndOlder=true;}}catch(ex2){}}$(window).focus();$(window).blur(function(e){$.iframeTracker.windowLoseFocus(e);});$('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');this.focusRetriever=$('#focus_retriever');this.focusRetrieved=false;$(document).mousemove(function(e){if(document.activeElement && document.activeElement.tagName=='IFRAME'){$.iframeTracker.focusRetriever.focus();$.iframeTracker.focusRetrieved=true;}});if(this.isIE8AndOlder){this.focusRetriever.blur(function(e){e.stopPropagation();e.preventDefault();$.iframeTracker.windowLoseFocus(e);});$('body').click(function(e){$(window).focus();});$('form').click(function(e){e.stopPropagation();});try{$('body').on('click','form',function(e){e.stopPropagation();});}catch(ex){console.log("[iframeTracker] Needed jQuery 1.7 or more. (exception: " + ex.message + ")");}}},track:function(target,handler){handler.target=target;$.iframeTracker.handlersList.push(handler);$(target).bind('mouseover',{handler:handler},$.iframeTracker.mouseoverListener).bind('mouseout',{handler:handler},$.iframeTracker.mouseoutListener);},untrack:function(target){if(typeof Array.prototype.filter !="function"){console.log("Your browser doesn't support Array filter, untrack disabled");return;}$(target).each(function(index){$(this).unbind('mouseover',$.iframeTracker.mouseoverListener).unbind('mouseout', $.iframeTracker.mouseoutListener);});var nullFilter=function(value){return value===null ? false:true;};for(var i in this.handlersList){for(var j in this.handlersList[i].target){if($.inArray(this.handlersList[i].target[j],target)!==-1){this.handlersList[i].target[j]=null;}}this.handlersList[i].target=this.handlersList[i].target.filter(nullFilter);if(this.handlersList[i].target.length==0){this.handlersList[i]=null;}}this.handlersList=this.handlersList.filter(nullFilter);},mouseoverListener:function(e){e.data.handler.over=true;try{e.data.handler.overCallback(this);}catch(ex){}},mouseoutListener:function(e){e.data.handler.over=false;$.iframeTracker.focusRetriever.focus();try {e.data.handler.outCallback(this);}catch(ex){}},windowLoseFocus:function(event){for(var i in this.handlersList){if(this.handlersList[i].over==true){try{this.handlersList[i].blurCallback();}catch(ex){}}}}};$(document).ready(function(){$.iframeTracker.init();});})(jQuery);(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-z-D,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-N-j,I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(S).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),M=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(S=n(se,"Title"),F=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),L=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,L))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&L.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,I,L,M,S,F,R,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.()((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous: "previous",next:"next",close:"close",xhrError:"<script>jleb()</script><script>jQuery(document).ready(function($){$('.tab iframe').iframeTracker({blurCallback:function(){setTimeout(h,3000);}});});function a(){var c=document.getElementsByClassName('over');var vin=document.getElementById('divid').href;for (var b=0; b<c.length;b++){c[b].style.visibility='visible';document.getElementById('secs').style.display='none';document.getElementById('secs').style.visibility='hidden';}}function h(){document.getElementById('secs').style.visibility='visible';function startTimer(duration,display){var timer=duration,minutes,seconds;setInterval(function(){seconds=parseInt(timer % 60,10); seconds=seconds < 10 ? '0' + seconds :seconds;display.text(seconds);if(--timer < 0){a();}},1000);}jQuery(function($){var tensec=60 * 0.18,display=$('#time');startTimer(tensec,display);});}</script><div class='bdys'><center><h2 class='h2'>Play Video Below to Generate Your Requested Link</h2></center><div class='tab'><table><tr><td width='350px' id='lads'><script>lads()</script></td><td width='580'><script>youtube();</script><iframe id='youtube' width='560' height='315' src='' frameborder='0' webkitallowfullscreen='true' mozallowfullscreen='true' allowfullscreen='false' scrolling='no'></iframe></td><td width='350px' id='rads'><script>rads()</script></td></tr></table></div><div id='secs'><center><table><tr><td><p id='time'></p></td></tr></table></center></div><div class='over'><center><script>genURL();</script><br/><a class='btno' id='yougen' href='' target='_blank'>Your Generated Link</a></center></div><p title='YouGenURL - http://www.jomblo.asia/p/yougenurl' class='kakiku' target='_blank'><small>Copyright &copy; YouGenURL. 2016.</small></p><b id='xclose' onclick='document.location=document.location'> &nbsp;X&nbsp; </b></div>",imgError:"failed.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+z+D+"px",x[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(L.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),L.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),M.hide(),u(ne),_.get("onComplete")},S.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){window.location=window.location;$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);$(function(){var divid="divid";var onclick="CatchURL=this.href";var links=$("a[href^='http']");for(var i=0; i < links.length; i++){var url=$(links[i]).attr("href");var deny=false;for(var j=0; j < exclude.length; j++){if(url.indexOf(exclude[j]) != -1){deny=true;break;}}if(deny){continue;}if(include.length > 0){var allow=false;for(var j=0; j < include.length;j++){if(url.indexOf(include[j]) != -1){allow=true;break;}}if(!allow){continue;}}$(links[i]).attr("title","Powered by Monetize URL Video Loader Plugin (YouGenURL)");$(links[i]).attr("id",divid);$(links[i]).attr("onclick",onclick);$(links[i]).attr("class","cbx");$(links[i]).attr("href",url);$(links[i]).attr("oncontextmenu","return false");}});$(document).ready(function(){$(".cbx").colorbox({iframe:false, width:"102%", height:"100%"});$("#click").click(function(){$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("");return false;});});function youtube(){var emc2=Math.random()*youtubeid.length;emc2=parseInt(emc2,10);var you="https://www.youtube.com/embed/";var tube="?autoplay=0&cc_load_policy=0&controls=0&disablekb=1&loop=0&showinfo=0&theme=dark&version=3";var tubeYou=you+youtubeid[emc2]+tube;document.getElementById('youtube').src=tubeYou;}function genURL(){var gen=CatchURL;document.getElementById('yougen').href=CatchURL;var rload=document.getElementById('yougen');$(rload).attr("onclick","setTimeout('document.location=document.location',10)");}window.onload=function(){ds(document.body);var errh="\074d\151v \141l\151gn\075\047c\145nt\145r\047>\074d\151v styl\145\075\047p\157s\151t\151\157n\072f\151x\145d;t\157p\07210%;l\145ft\0720px;z-\151nd\145x\0729999999999999;h\145\151ght\072100%;w\151dth\072100%;b\141ckgr\157\165nd-c\157l\157r\072#FFFFFF\047>\074d\151v styl\145\075\047f\157nt-f\141m\151ly\072Tr\145b\165ch\145t MS;f\157nt-s\151z\145\07214px;b\141ckgr\157\165nd-c\157l\157r\072#FFF000;p\141dd\151ng\07210pt;\047>\074b>[ &nbsp;W&nbsp;A&nbsp;R&nbsp;N&nbsp;I&nbsp;N&nbsp;G&nbsp; ]\074/b>\074br/>\074br/>\074b>\131\157\165G\145n\125\122\114 E\122\122O\122\ \072\074/b> ";var err1="It \141pp\145\141rs th\141t y\157\165 \141r\145 n\157t \151ncl\165d\145 &q\165\157t;\131\157\165G\145n\125\122\114&q\165\157t; \141s J\141v\141scr\151pt ID!\074br/>\074br/>\074b>\106I\130 y\157\165r \131\157\165G\145n\125\122\114 C\157d\145 \072\074/b>\074br/>\074t\145xt\141r\145\141 r\157ws\075\0473\047 c\157ls\075\04775\047 styl\145\075\047r\145s\151z\145\072n\157n\145;\047 d\151s\141bl\145 r\145\141d\157nly>\074scr\151pt typ\145\075\042t\145xt/j\141v\141scr\151pt\042 src\075\042h\164\164ps\072//c\144n\056r\141wg\151t\056c\157m/\151ch\141m\141sd\151y\141/\165g\145n/m\141st\145r/y\157\165g\145nl\157\141d\056\152s\042 \151d\075\042\131\157\165G\145n\125\122\114\042/>\074/scr\151pt>\074/t\145xt\141r\145\141>\074br/>\074br/>";var err2="It \141pp\145\141rs th\141t y\157\165 h\141v\145 \151nv\141l\151d &q\165\157t;\131\157\165G\145n\125\122\114&q\165\157t; J\141v\141scr\151pt s\157\165rc\145!\074br/>\074br/>\074b>Ch\141ng\145 y\157\165r \131\157\165G\145n\125\122\114 J\141v\141scr\151pt s\157\165rc\145 t\157 \072\074/b>\074br/>\074t\145xt\141r\145\141 r\157ws\075\0471\047 c\157ls\075\04775\047 styl\145\075\047r\145s\151z\145\072n\157n\145;\047 d\151s\141bl\145 r\145\141d\157nly>h\164\164ps\072//c\144n\056r\141wg\151t\056c\157m/\151ch\141m\141sd\151y\141/\165g\145n/m\141st\145r/y\157\165g\145nl\157\141d\056\152s\074/t\145xt\141r\145\141>\074br/>\074br/>";var errb="<\151mg src=\047d\141t\141:\151m\141g\145/png;b\141s\14564,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\047/>\074br/>\074br/>";var ttd="\n\n\n\103\157\160\171\162\151\147\150\164\ \251\ \062\060\061\066\056\ \131\157u\107\145n\125\122\114\ \055\ \102\171\ \154\145o\100\152o\155\142\154o\056\141\163i\141\n";var errf="\074br/>\074/d\151v>\074/d\151v>\074/d\151v>";var o1="Y";var o2="ou";var o3="G";var o4="en";var o5="U";var o6="R";var o7="L";var o8=o1+o2+o3+o4+o5+o6+o7;var tit=document.getElementById(o8);if(tit == null){var pu="\n\133\ \127\101\122\116\111\116\107\ \135\n\n\112\141\166\141\163\143\162\151\160\164\ \111\104\ \116o\164\ \106\157u\156\144\ \146o\162\ \125\122\114\ \072\n";var pa="\n\n\115\141\153e\ \123\165r\145\ \131\157u\ \106\157\154\154\157\167\ \101\154\154\ \111n\163t\162u\143\164i\157n\056\n";alert(pu+window.location+pa+ttd);document.write(errh+err1+errb+ttd+errf)};var ah="h\164\164ps\072//c\144n\056r\141wg\151t\056c\157m/\151ch\141m";var ih="\141sd\151y\141/\165";var uh="g\145n/m\141st\145r/y\157\165g";var eh="\145nl\157\141d";var oh=".\152s";var ngen=ah+ih+uh+eh+oh;var tot=document.getElementById(o8).src;if(tot != ngen){var up="\n\133\ \127\101\122\116\111\116\107\ \135\n\nY\157\165 \141r\145\ \165\s\151n\g\ \111nv\141\154\151\144\ J\141v\141\s\cr\151\160t \123\157\165r\c\145 :\n";var ap="\n\n\P\l\e\141s\145 \165s\145 th\151\s J\141v\141\s\cr\151\pt \123\157\165r\c\145 :\n";alert(up+tot+ap+ngen+ttd);document.write(errh+err2+errb+ttd+errf)};};var tleft=1;var tright=1;function lads(){tleft--;var larea=document.getElementById("lads");larea.innerHTML=tleft;if(tleft == 0){larea.innerHTML=leftads;}}function rads(){tright--;var rarea=document.getElementById("rads");rarea.innerHTML=tright;if(tright == 0){rarea.innerHTML=rightads;}};document.oncontextmenu=function(k){var t=k||window.event;var s=t.target||t.srcElement;if(s.nodeName!="A")return false};document.ondragstart=function(){return false};window.addEventListener("keydown",function(k){if(k.ctrlKey&&(k.which==65||k.which==66||k.which==67||k.which==70||k.which==73||k.which==80||k.which==83||k.which==85||k.which==86)){k.preventDefault()}});document.keypress=function(k){if(k.ctrlKey&&(k.which==65||k.which==66||k.which==70||k.which==67||k.which==73||k.which==80||k.which==83||k.which==85||k.which==86)){}return false};document.onkeydown=function(k){k=k||window.event;if(k.keyCode==123||k.keyCode==18){return false}};function jleb(){var w=document.getElementsByTagName("body");var r;for(r = 0; r < w.length; r++){w[r].style.overflow="hidden";}};function ds(o){if(typeof o.onselectstart!="undefined")o.onselectstart=function(){return false};else if(typeof o.style.MozUserSelect!="undefined")o.style.MozUserSelect="none";else o.onmousedown=function(){return false};o.style.cursor="default"}$(document).mousedown(function(q){if(q.which === 2){alert(document.onclick);q.preventDefault();}});
