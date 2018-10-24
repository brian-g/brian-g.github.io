/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
//@codekit-prepend "jquery.parallax-1.1.3.js";
function loadLightBox(n,t){var i,e;n.data("album",t),e=n.find("figure"),(i=t.clone(!1)).css("display","none"),i.find("h4").text(t.parents(".thumbnail-album").children("h3").text()),n.find(".lightbox-content").append(i),0<e.length&&n.is(":visible")?(e.fadeOut("300ms",function(){e.remove()}),i.fadeIn("300ms",function(){})):e.remove()}function iterateOnAlbum(n,t){var i,e=n.data("album");"next"===t?0===(i=e.next()).length&&(i=e.parent().children(":first-child")):0===(i=e.prev()).length&&(i=e.parent().children(":last")),0<i.length&&loadLightBox(n,i)}!function(u){var c=u(window),h=c.height();c.resize(function(){h=c.height()}),u.fn.parallax=function(o,l,n){
// function to be called whenever the window is scrolled or resized
function t(){var e=c.scrollTop();i.each(function(){var n=u(this),t=n.offset().top,i;
// Check if totally above or totally below viewport
t+a(n)<e||e+h<t||n.css("backgroundPosition",o+" "+(r-e)*l+"px")})}var i=u(this),a,r;if("undefined"!=typeof Modernizr&&Modernizr.touch)return i;
//get the starting position of each element to have parallax applied to it                
i.each(function(){r=i.offset().top}),a=n?function(n){return n.outerHeight(!0)}:function(n){return n.height()},
// setup defaults if arguments aren't specified
(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===l)&&(l=.1),(arguments.length<3||null===n)&&(n=!0),c.bind("scroll",t).resize(t),t()}}(jQuery),$(document).ready(function(){$("body").parallax("0",.02),$(".thumbnails img").on("click",function(){var n=$("#lightbox");loadLightBox(n,$(this).parent()),n.show(),$("#lightbox figure").show()}),$(".close, #lightbox").on("click",function(){$("#lightbox").fadeOut("fast")}),$(".next").on("click",function(n){n.stopPropagation(),iterateOnAlbum($("#lightbox"),"next")}),$(".previous").on("click",function(n){n.stopPropagation(),iterateOnAlbum($("#lightbox"),"prev")})});