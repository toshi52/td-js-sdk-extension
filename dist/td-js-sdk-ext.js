!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var r={},i=0,a=function(){function e(t){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{n=new CustomEvent(t.eventName)}catch(e){(n=window[t.targetWindow].document.createEvent("CustomEvent")).initCustomEvent(t.eventName,!1,!1,{})}window[t.targetWindow].requestAnimationFrame=window[t.targetWindow].requestAnimationFrame||window[t.targetWindow].mozRequestAnimationFrame||window[t.targetWindow].webkitRequestAnimationFrame,function e(){if(window[t.targetWindow].requestAnimationFrame(e),o)return!1;o=setTimeout((function(){window[t.targetWindow].dispatchEvent(n),o=null}),t.eventFrequency)}()}var t,n,a;return t=e,(n=[{key:"addListener",value:function(e,t,n,o){return e.addEventListener(t,n,o),r[i]={element:e,type:t,listener:n,capture:o},i++}},{key:"removeListener",value:function(e){if(e in r){var t=r[e];t.element.removeEventListener(t.type,t.listener,t.capture)}}}])&&o(t.prototype,n),a&&o(t,a),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"generateId",value:function(){for(var e=(+new Date).toString(36),t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",o=0;o<32;o++)n+=t[Math.floor(Math.random()*t.length)];return"".concat(e,"-").concat(n)}},{key:"mergeObj",value:function(e){for(var t={},n=0;n<e.length;n++)for(var o in e[n])"object"!==d(e[n][o])||null===e[n][o]||Array.isArray(e[n][o])?Array.isArray(e[n][o])?t[o]=t[o]?t[o].concat(e[n][o]):e[n][o]:t[o]=e[n][o]:t[o]=t[o]?this.mergeObj([t[o],e[n][o]]):e[n][o];return t}},{key:"getPerformanceInfo",value:function(){var e=window.performance.timing,t=e.domInteractive-e.domLoading,n=e.domContentLoadedEventStart-e.domLoading,o=e.domComplete-e.domLoading,r=+new Date-e.domainLookupStart,i=+new Date-e.requestStart,a=+new Date-e.domLoading;return{performance_interactive:t>=0?t:void 0,performance_dcl:n>=0?n:void 0,performance_complete:o>=0?o:void 0,performance_ts_dns:r>=0?r:void 0,performance_ts_req:i>=0?i:void 0,performance_ts_dl:a>=0?a:void 0}}},{key:"getMediaInfo",value:function(e){return!!e&&{media_src:e.src,media_type:e.type||void 0,media_width:e.clientWidth||void 0,media_height:e.clientHeight||void 0,media_current_time:Math.round(10*e.currentTime)/10,media_duration:Math.round(10*e.duration)/10,media_played_percent:Math.round(e.currentTime/e.duration*1e3)/10,media_player_id:e.playerId||void 0,media_muted:e.muted||!1,media_default_muted:e.defaultMuted||!1,media_autoplay:e.autoplay||!1,media_attr:e.dataset?JSON.stringify(e.dataset):void 0}}},{key:"getFormStats",value:function(e,t,n,o){var r=n.name||n.id||"-",i=0;if("select"===n.tagName.toLowerCase())for(var a=0;a<n.length;a++)n[a].selected&&i++;else i="input"!==n.tagName.toLowerCase()||"checkbox"!==n.type&&"radio"!==n.type?n.value.length:n.checked?1:0;return"hidden"!==n.type&&(e.fmItems[r]={status:t,length:i}),e.fmFirstItem||(e.fmFirstItem=n.name||n.id||"-",e.fmStartedSinceInitMs=+new Date-o),e.fmLastItem=n.name||n.id||"-",e.fmEndedSinceInitMs=+new Date-o,e.fmDurationMs=e.fmEndedSinceInitMs-e.fmStartedSinceInitMs,e}},{key:"getVisibility",value:function(e,t){var n=0,o={};try{o=e.getBoundingClientRect(),n=e.innerText.length}catch(e){o={}}var r=window[t].innerHeight,i=window[t].document.documentElement.scrollHeight,a=window[t].document.visibilityState||"unknown",d="pageYOffset"in window[t]?window[t].pageYOffset:(window[t].document.documentElement||window[t].document.body.parentNode||window[t].document.body).scrollTop,c=d+r,l=o.height,u=o.top<=0?0:o.top,s=-1*(o.bottom-r)<=0?0:-1*(o.bottom-r),m=c,f=c/i,p=null,v=null,g=!1;return o.top>=0&&o.bottom>r&&o.top>=r?(p=null,v=null,g=!1):o.top>=0&&o.bottom>r&&o.top<r?(p=0,v=r-o.top,g=!0):o.top<0&&o.bottom>r?(v=(p=-1*o.top)+r,g=!0):o.top>=0&&o.bottom<=r?(p=0,v=l,g=!0):o.top<0&&o.bottom>=0&&o.bottom<=r?(p=l+o.top,v=l,g=!0):o.top<0&&o.bottom<0?(p=null,v=null,g=!1):g=!1,{dHeight:i,dIsVisible:a,dVisibleTop:d,dVisibleBottom:c,dScrollUntil:m,dScrollRate:f,tHeight:l,tVisibleTop:p,tVisibleBottom:v,tMarginTop:u,tMarginBottom:s,tScrollUntil:v,tScrollRate:v/l,tViewableRate:(v-p)/l,tIsInView:g,tLength:n}}},{key:"queryMatch",value:function(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"data-trackable",r="button",i=[];for(3===t.nodeType&&(t=t.parentNode);t&&t!==window.parent.document;){var a=(t.matches||t.msMatchesSelector||function(){return!1}).bind(t);t.hasAttribute(o)&&i.unshift(t.getAttribute(o)),!n&&a(e)&&(r="a"===t.tagName.toLowerCase()?"link":t.tagName.toLowerCase(),n=t),t=t.parentNode}return!!(n&&i.length>0)&&{element:n,category:r,path:i.join(">")}}}])&&c(t.prototype,n),o&&c(t,o),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s,m,f,p,v,g,w=+new Date,h={media:[]},y=+new Date,b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"init",value:function(e){s=e,v=new l,m=s.targetWindow||"self",f=s.tdNs||"td",this.rootId=v.generateId(),g="onbeforeunload"in window[m]?"beforeunload":"onpagehide"in window[m]?"pagehide":"unload",s.eventName&&s.eventFrequency&&void 0===p&&(p=new a({eventName:s.eventName,eventFrequency:s.eventFrequency,targetWindow:m})),"performance"in window[m]&&("interactive"===window[m].document.readyState||"complete"===window[m].document.readyState?this.trackAction("rum","page",{}):this.trackPerformance(m)),s.options&&s.options.unload&&s.options.unload.enable&&this.trackUnload(),s.options&&s.options.scroll&&s.options.scroll.enable&&this.trackScroll(),s.options&&s.options.read&&s.options.read.enable&&this.trackRead(s.options.read.target),s.options&&s.options.clicks&&s.options.clicks.enable&&this.trackClicks(),s.options&&s.options.media&&s.options.media.enable&&this.trackMedia()}},{key:"trackAction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unknown",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unknown",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,i=+new Date,a={action:e,category:t,root_id:this.rootId,ext_version:"0.1.6",since_init_ms:i-w,since_prev_ms:i-y},d=v.mergeObj([a,n,v.getPerformanceInfo()]);y=i,window[m][f].trackEvent(s.table,d,o,r)}},{key:"trackPageview",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;this.trackAction("view","page",e,t,n)}},{key:"trackPerformance",value:function(){var e=this;p.removeListener(h.performance),h.performance=p.addListener(window[m].document,"DOMContentLoaded",(function(){e.trackAction("rum","page",{})}),!1)}},{key:"trackUnload",value:function(){var e=this;p.removeListener(h.unload),h.unload=p.addListener(window[m],g,(function(){e.trackAction("unload","page",{})}),!1)}},{key:"trackClicks",value:function(){var e=this;p.removeListener(h.click),h.click=p.addListener(window[m].document.body,"click",(function(t){var n=s.options.clicks.targetAttr||"data-trackable",o=v.queryMatch('a, button, input, [role="button"]',t.target,n),r=null;o&&(r=o.element,e.trackAction("click",o.category,{click_tag:r.tagName,click_id:r.id||void 0,click_class:r.className||void 0,click_path:o.path||void 0,click_link:r.href||void 0,click_text:r.innerText||r.value||void 0,click_attr:r.dataset?JSON.stringify(r.dataset):void 0}))}),!1)}},{key:"trackScroll",value:function(){var e=this,t=s.options.scroll.granularity||20,n=100/t,o=1e3*s.options.scroll.threshold||2e3,r={},i=0,a=0,d="percent";p.removeListener(h.scroll),h.scroll=p.addListener(window[m],s.eventName,(function(){"hidden"!==(r=v.getVisibility(null,m)).dIsVisible&&"prerender"!==r.dIsVisible&&("percent"===s.options.scroll.unit?i=Math.floor(r.dScrollRate*n)*t:(i=r.dScrollUntil,d="pixel"),("percent"===d&&i>a&&i>=0&&i<=100||"pixel"===d&&i>a&&i>=t)&&setTimeout((function(){i>a&&(e.trackAction("scroll","page",{page_height:r.dHeight,scroll_depth:i,scroll_unit:d}),a="percent"===d?i:i+t)}),o))}),!1)}},{key:"trackRead",value:function(e){var t=this;if(e){var n,o,r,i=s.options.read.granularity||20,a=100/i,d=1e3*s.options.read.threshold||2e3,c=+new Date;p.removeListener(h.read),h.read=p.addListener(window[m],s.eventName,(function(){o=o||0,r=r||0,"hidden"!==(n=v.getVisibility(e,m)).dIsVisible&&"prerender"!==n.dIsVisible&&n.tIsInView&&(o=Math.floor(n.tScrollRate*a)*i)>r&&o>=0&&o<=100&&setTimeout((function(){o>r&&e&&(t.trackAction("read","content",{read_id:e.id||void 0,read_start_with:e.innerText.substring(0,12)||void 0,read_target_height:n.tHeight,read_text_length:n.tLength,read_rate:o,read_attr:e.dataset?JSON.stringify(e.dataset):void 0,read_elapsed_ms:+new Date-c}),r=o)}),d)}),!1)}}},{key:"trackMedia",value:function(){for(var e=this,t=["play","pause","ended"],n=s.options.media.heartbeat||5,o={},r=0;r<t.length;r++)p.removeListener(h.media[t[r]]),h.media[t[r]]=p.addListener(window[m].document.body,t[r],(function(t){e.trackAction(t.type,t.target.tagName.toLowerCase(),v.getMediaInfo(t.target))}),{capture:!0});p.removeListener(h.media.timeupdate),h.media.timeupdate=p.addListener(window[m].document,"timeupdate",(function(t){if(o[t.target.src])return!1;o[t.target.src]=setTimeout((function(){!0!==t.target.paused&&!0!==t.target.ended&&e.trackAction(t.type,t.target.tagName.toLowerCase(),v.getMediaInfo(t.target)),o[t.target.src]=!1}),1e3*n)}),{capture:!0})}},{key:"trackForm",value:function(){var e=this;if(this.trackFormTargets&&0!==this.trackFormTargets.length)for(var t=["focus","change"],n=function(n){for(var o={form_name:e.trackFormTargets[n].name||e.trackFormTargets[n].id||"-",form_attr:e.trackFormTargets[n].dataset,form_items:{}},r=function(r){p.removeListener(h.form[t[r]]),h.form[t[r]]=p.addListener(e.trackFormTargets[n],t[r],(function(e){o=v.getFormStats(o,t[r],e.target,w)}),!0)},i=0;i<t.length;i++)r(i);p.removeListener(h.unload),h.unload=p.addListener(window[m],g,(function(){e.trackAction("stats","form",o)}),!1)},o=0;o<this.trackFormTargets.length;o++)n(o)}}])&&u(t.prototype,n),o&&u(t,o),e}();window.tdext=new b}]);