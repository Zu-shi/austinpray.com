/*
 *  Project: Scrolly : parallax is easy as a matter of fact !
 *  Description: Based on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave web agency
 *  Licence: MIT
 */function FastClick(e){"use strict";var t,n=this;this.trackingClick=!1;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=e;if(!e||!e.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)};if(FastClick.notNeeded(e))return;if(this.deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,!0);e.addEventListener("mousedown",this.onMouse,!0);e.addEventListener("mouseup",this.onMouse,!0)}e.addEventListener("click",this.onClick,!0);e.addEventListener("touchstart",this.onTouchStart,!1);e.addEventListener("touchend",this.onTouchEnd,!1);e.addEventListener("touchcancel",this.onTouchCancel,!1);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;t==="click"?i.call(e,t,n.hijacked||n,r):i.call(e,t,n,r)};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;t==="click"?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):i.call(e,t,n,r)}}if(typeof e.onclick=="function"){t=e.onclick;e.addEventListener("click",function(e){t(e)},!1);e.onclick=null}}function slideMenu(e,t){var n=e,r=t,i=!1,s=this;n.click(function(e){e.preventDefault();s.slide()});this.slide=function(){if(i){i=!1;n.html("&#201;")}else{i=!0;n.html("X")}r.slideToggle(100).redraw()}}(function(e,t,n,r){function u(t,n){this.element=t;this.$element=e(this.element);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="scrolly",s={bgParallax:!1},o=!1;u.prototype.init=function(){var t=this;this.startPosition=this.$element.position().top;this.offsetTop=this.$element.offset().top;this.height=this.$element.outerHeight(!0);this.velocity=this.$element.attr("data-velocity");this.bgStart=parseInt(this.$element.attr("data-fit"),10);e(n).scroll(function(){t.didScroll=!0});setInterval(function(){if(t.didScroll){t.didScroll=!1;t.scrolly()}},10)};u.prototype.scrolly=function(){var n=e(t).scrollTop(),r=e(t).height(),i=this.startPosition;this.offsetTop>=n+r?this.$element.addClass("scrolly-invisible"):this.$element.hasClass("scrolly-invisible")?i=this.startPosition+(n+(r-this.offsetTop))*this.velocity:i=this.startPosition+n*this.velocity;this.bgStart&&(i+=this.bgStart);this.options.bgParallax===!0?this.$element.css({backgroundPosition:"50% "+i+"px"}):this.$element.css({top:i})};e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new u(this,t))})}})(jQuery,window,document);(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},t=[].slice;(function(e,t){return typeof define=="function"&&define.amd?define("waypoints",["jquery"],function(n){return t(n,e)}):t(e.jQuery,e)})(this,function(n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;i=n(r);c=e.call(r,"ontouchstart")>=0;u={horizontal:{},vertical:{}};a=1;l={};f="waypoints-context-id";d="resize.waypoints";v="scroll.waypoints";m=1;g="waypoints-waypoint-ids";y="waypoint";b="waypoints";s=function(){function e(e){var t=this;this.$element=e;this.element=e[0];this.didResize=!1;this.didScroll=!1;this.id="context"+a++;this.oldScroll={x:e.scrollLeft(),y:e.scrollTop()};this.waypoints={horizontal:{},vertical:{}};e.data(f,this.id);l[this.id]=this;e.bind(v,function(){var e;if(!t.didScroll&&!c){t.didScroll=!0;e=function(){t.doScroll();return t.didScroll=!1};return r.setTimeout(e,n[b].settings.scrollThrottle)}});e.bind(d,function(){var e;if(!t.didResize){t.didResize=!0;e=function(){n[b]("refresh");return t.didResize=!1};return r.setTimeout(e,n[b].settings.resizeThrottle)}})}e.prototype.doScroll=function(){var e,t=this;e={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};c&&(!e.vertical.oldScroll||!e.vertical.newScroll)&&n[b]("refresh");n.each(e,function(e,r){var i,s,o;o=[];s=r.newScroll>r.oldScroll;i=s?r.forward:r.backward;n.each(t.waypoints[e],function(e,t){var n,i;if(r.oldScroll<(n=t.offset)&&n<=r.newScroll)return o.push(t);if(r.newScroll<(i=t.offset)&&i<=r.oldScroll)return o.push(t)});o.sort(function(e,t){return e.offset-t.offset});s||o.reverse();return n.each(o,function(e,t){if(t.options.continuous||e===o.length-1)return t.trigger([i])})});return this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}};e.prototype.refresh=function(){var e,t,r,i=this;r=n.isWindow(this.element);t=this.$element.offset();this.doScroll();e={horizontal:{contextOffset:r?0:t.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:t.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[b]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(e,function(e,t){return n.each(i.waypoints[e],function(e,r){var i,s,o,u,a;i=r.options.offset;o=r.offset;s=n.isWindow(r.element)?0:r.$element.offset()[t.offsetProp];if(n.isFunction(i))i=i.apply(r.element);else if(typeof i=="string"){i=parseFloat(i);r.options.offset.indexOf("%")>-1&&(i=Math.ceil(t.contextDimension*i/100))}r.offset=s-t.contextOffset+t.contextScroll-i;if(r.options.onlyOnScroll&&o!=null||!r.enabled)return;if(o!==null&&o<(u=t.oldScroll)&&u<=r.offset)return r.trigger([t.backward]);if(o!==null&&o>(a=t.oldScroll)&&a>=r.offset)return r.trigger([t.forward]);if(o===null&&t.oldScroll>=r.offset)return r.trigger([t.forward])})})};e.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([d,v].join(" "));return delete l[this.id]}};return e}();o=function(){function e(e,t,r){var i,s;r=n.extend({},n.fn[y].defaults,r);r.offset==="bottom-in-view"&&(r.offset=function(){var e;e=n[b]("viewportHeight");n.isWindow(t.element)||(e=t.$element.height());return e-n(this).outerHeight()});this.$element=e;this.element=e[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=t;this.enabled=r.enabled;this.id="waypoints"+m++;this.offset=null;this.options=r;t.waypoints[this.axis][this.id]=this;u[this.axis][this.id]=this;i=(s=e.data(g))!=null?s:[];i.push(this.id);e.data(g,i)}e.prototype.trigger=function(e){if(!this.enabled)return;this.callback!=null&&this.callback.apply(this.element,e);if(this.options.triggerOnce)return this.destroy()};e.prototype.disable=function(){return this.enabled=!1};e.prototype.enable=function(){this.context.refresh();return this.enabled=!0};e.prototype.destroy=function(){delete u[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};e.getWaypointsByElement=function(e){var t,r;r=n(e).data(g);if(!r)return[];t=n.extend({},u.horizontal,u.vertical);return n.map(r,function(e){return t[e]})};return e}();p={init:function(e,t){var r;t==null&&(t={});(r=t.handler)==null&&(t.handler=e);this.each(function(){var e,r,i,u;e=n(this);i=(u=t.context)!=null?u:n.fn[y].defaults.context;n.isWindow(i)||(i=e.closest(i));i=n(i);r=l[i.data(f)];r||(r=new s(i));return new o(e,r,t)});n[b]("refresh");return this},disable:function(){return p._invoke(this,"disable")},enable:function(){return p._invoke(this,"enable")},destroy:function(){return p._invoke(this,"destroy")},prev:function(e,t){return p._traverse.call(this,e,t,function(e,t,n){if(t>0)return e.push(n[t-1])})},next:function(e,t){return p._traverse.call(this,e,t,function(e,t,n){if(t<n.length-1)return e.push(n[t+1])})},_traverse:function(e,t,i){var s,o;e==null&&(e="vertical");t==null&&(t=r);o=h.aggregate(t);s=[];this.each(function(){var t;t=n.inArray(this,o[e]);return i(s,t,o[e])});return this.pushStack(s)},_invoke:function(e,t){e.each(function(){var e;e=o.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return!0})});return this}};n.fn[y]=function(){var e,r;r=arguments[0],e=2<=arguments.length?t.call(arguments,1):[];return p[r]?p[r].apply(this,e):n.isFunction(r)?p.init.apply(this,arguments):n.isPlainObject(r)?p.init.apply(this,[null,r]):r?n.error("The "+r+" method does not exist in jQuery Waypoints."):n.error("jQuery Waypoints needs a callback function or handler option.")};n.fn[y].defaults={context:r,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1};h={refresh:function(){return n.each(l,function(e,t){return t.refresh()})},viewportHeight:function(){var e;return(e=r.innerHeight)!=null?e:i.height()},aggregate:function(e){var t,r,i;t=u;e&&(t=(i=l[n(e).data(f)])!=null?i.waypoints:void 0);if(!t)return[];r={horizontal:[],vertical:[]};n.each(r,function(e,i){n.each(t[e],function(e,t){return i.push(t)});i.sort(function(e,t){return e.offset-t.offset});r[e]=n.map(i,function(e){return e.element});return r[e]=n.unique(r[e])});return r},above:function(e){e==null&&(e=r);return h._filter(e,"vertical",function(e,t){return t.offset<=e.oldScroll.y})},below:function(e){e==null&&(e=r);return h._filter(e,"vertical",function(e,t){return t.offset>e.oldScroll.y})},left:function(e){e==null&&(e=r);return h._filter(e,"horizontal",function(e,t){return t.offset<=e.oldScroll.x})},right:function(e){e==null&&(e=r);return h._filter(e,"horizontal",function(e,t){return t.offset>e.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(e,t){return p[e]=t},_invoke:function(e){var t;t=n.extend({},u.vertical,u.horizontal);return n.each(t,function(t,n){n[e]();return!0})},_filter:function(e,t,r){var i,s;i=l[n(e).data(f)];if(!i)return[];s=[];n.each(i.waypoints[t],function(e,t){if(r(i,t))return s.push(t)});s.sort(function(e,t){return e.offset-t.offset});return n.map(s,function(e){return e.element})}};n[b]=function(){var e,n;n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[];return h[n]?h[n].apply(null,e):h.aggregate.call(null,n)};n[b].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[b]("refresh")})})}).call(this);(function(){(function(e,t){return typeof define=="function"&&define.amd?define(["jquery","waypoints"],t):t(e.jQuery)})(this,function(e){var t,n;t={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"};n=function(t,n){t.wrap(n.wrapper);t.each(function(){var t;t=e(this);t.parent().height(t.outerHeight());return!0});return t.parent()};return e.waypoints("extendFn","sticky",function(r){var i,s;r=e.extend({},e.fn.waypoint.defaults,t,r);i=n(this,r);s=r.handler;r.handler=function(t){var n,i;n=e(this).children(":first");i=t==="down"||t==="right";n.toggleClass(r.stuckClass,i);if(s!=null)return s.call(this,t)};i.waypoint(r);return this})})}).call(this);FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(this.deviceIsIOS&&e.type==="file"||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur();r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null);n.forwardedTouchEvent=!0;e.dispatchEvent(n)};FastClick.prototype.focus=function(e){"use strict";var t;if(this.deviceIsIOS&&e.setSelectionRange){t=e.value.length;e.setSelectionRange(t,t)}else e.focus()};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1)return!0;t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(this.deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return!1}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=!0;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;e.timeStamp-this.lastClickTime<200&&e.preventDefault();return!0};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1};FastClick.prototype.findControl=function(e){"use strict";return e.control!==undefined?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(this.touchHasMoved(e)){this.trackingClick=!1;this.targetElement=null}if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<200){this.cancelNextClick=!0;return!0}this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=!1;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(this.deviceIsAndroid)return!1;o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return!1}this.focus(o);if(!this.deviceIsIOS4||r!=="select"){this.targetElement=null;e.preventDefault()}return!1}if(this.deviceIsIOS&&!this.deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop)return!0}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return!1};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement)return!0;if(e.forwardedTouchEvent)return!0;if(!e.cancelable)return!0;if(!this.needsClick(this.targetElement)||this.cancelNextClick){e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0;e.stopPropagation();e.preventDefault();return!1}return!0};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=!1;return!0}if(e.target.type==="submit"&&e.detail===0)return!0;t=this.onMouse(e);t||(this.targetElement=null);return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(this.deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,!0);e.removeEventListener("mousedown",this.onMouse,!0);e.removeEventListener("mouseup",this.onMouse,!0)}e.removeEventListener("click",this.onClick,!0);e.removeEventListener("touchstart",this.onTouchStart,!1);e.removeEventListener("touchend",this.onTouchEnd,!1);e.removeEventListener("touchcancel",this.onTouchCancel,!1)};FastClick.notNeeded=function(e){"use strict";var t;if(typeof window.ontouchstart=="undefined")return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!FastClick.prototype.deviceIsAndroid)return!0;t=document.querySelector("meta[name=viewport]");if(t&&t.content.indexOf("user-scalable=no")!==-1)return!0}return e.style.msTouchAction==="none"?!0:!1};FastClick.attach=function(e){"use strict";return new FastClick(e)};if(typeof define!="undefined"&&define.amd)define(function(){"use strict";return FastClick});else if(typeof module!="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else window.FastClick=FastClick;(function(){var e=!1,t=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(n){function o(){!e&&this.init&&this.init.apply(this,arguments)}var r=this.prototype;e=!0;var i=new this;e=!1;for(var s in n)i[s]=typeof n[s]=="function"&&typeof r[s]=="function"&&t.test(n[s])?function(e,t){return function(){var n=this._super;this._super=r[e];var i=t.apply(this,arguments);this._super=n;return i}}(s,n[s]):n[s];o.prototype=i;o.prototype.constructor=o;o.extend=arguments.callee;return o}})();(function(e,t){var n=function(e,t,n){var r;return function(){function u(){n||e.apply(s,o);r=null}var s=this,o=arguments;r?clearTimeout(r):n&&e.apply(s,o);r=setTimeout(u,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}})(jQuery,"smartresize");$.fn.redraw=function(){$(this).each(function(){return this.offsetHeight})};$(document).ready(function(){$(".parallax").scrolly({bgParallax:!0});$("#nav").waypoint("sticky");var e=$("#menu-button"),t=$("#nav-menu"),n=new slideMenu(e,t);t.find("a").each(function(){$(this).click(function(){$(window).width()<=767&&n.slide()})});$("#details-for-nerds").hide();$("#details-for-nerds-show").click(function(e){e.preventDefault();$("#details-for-nerds").slideToggle(100)});FastClick.attach(document.body)});$(window).smartresize(function(){var e=$(window).width();e>767&&$("#nav-menu").is(":hidden")&&$("#nav-menu").removeAttr("style")});