
$(document).ready(function(){var e="http://tun-droid.com/",t=10;$.ajax({url:""+e+"/feeds/posts/default?alt=json-in-script&amp;max-results="+t,type:"get",dataType:"jsonp",success:function(e){function t(){$("#recentpbreaking li:first").slideUp(function(){$(this).appendTo($("#recentpbreaking ul")).slideDown()})}var n,r,a="",i=e.feed.entry;if(void 0!==i){a="<ul>";for(var l=0;l<i.length;l++){for(var s=0;s<i[l].link.length;s++)if("alternate"==i[l].link[s].rel){n=i[l].link[s].href;break}r=i[l].title.$t,a+='<li><a href="'+n+'" target="_blank">'+r+"</a></li>"}a+="</ul>",$("#recentpbreaking").html(a),setInterval(function(){t()},5e3)}else $("#recentpbreaking").html("<span>No result!</span>")},error:function(){$("#recentpbreaking").html("<strong>حدث خطأ في جلب التغذية!</strong>")}})});(function(){window.Menu=(function(){Menu.init=function(){return $('[data-menu]').each(function(idx,el){return new Menu($(el))})};function Menu($el){this.nav=$el;this.menubtn=$('.menu-btn',this.nav);this.menubtn.on('click',(function(_this){return function(ev){_this.nav.toggleClass('active');return false}})(this))}return Menu})();$(function(){if($('[data-menu]').length){return Menu.init()}})}).call(this);$(document).ready(function(){var tbn=150;$('#PopularPosts1').find('img').each(function(n,image){var image=$(image);image.attr({src:image.attr('src').replace(/s\B\d{2,4}/,'s'+tbn)});image.attr('width',tbn);image.attr('height',tbn)})});

