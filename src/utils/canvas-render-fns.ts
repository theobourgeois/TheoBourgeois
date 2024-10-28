"use client";

export const DEFAULT_WIDTH = 1920;
export const DEFAULT_HEIGHT = 1080;

export const sampleCode = `
!function(){"use strict";var c=window,t=c.document;function n(t,n,e,r){if(!t||!n||"function"!=typeof c[t])return r();try{c[t](n,e,(function(c,t){r(c,t)}))}catch(c){r()}}c.COMSCORE={_version:"1.6.0",beacon:function(e){n("__uspapi","getDoNotSell",1,(function(r,o){n("__tcfapi","getTCData",2,(function(n,p){var s=JSON.parse(JSON.stringify(e||{})),i=n&&n.gdprApplies||!1,f=c.YAHOO&&c.YAHOO.comscore||{},a=c.rapidInstance&&c.rapidInstance.getRapidAttribute;s.c1=s.c1||"2",s.c2=s.c2||f.c2||"7241469",s.c5=s.c5||a&&a("spaceid"),s.c7=s.c7||t.location.href,s.c8=s.c8||t.title||"",s.c9=s.c9||t.referrer||"",s.c14=s.c14||f.c14||"-1",s.gdpr=i?1:0,s.gdpr_consent="",i?p&&n&&(s.gdpr_consent=n.tcString||""):o&&r&&"boolean"==typeof r.doNotSell?s.cs_ucfr=r.doNotSell?0:1:s.cs_ucfr=0,s.cs_ucfr&&(s.cs_fpid=s.cs_fpid||f.cs_fpid),s.cs_fpid&&(s.cs_fpdm=f.cs_fpdm||null,s.cs_fpdt=f.cs_fpdt||"01",s.cs_fpit=f.cs_fpit||"c"),s.ns_c="UTF-8",s.ns__t=(new Date).getTime();var _=[];for(var d in s)if(s.hasOwnProperty(d)){var u=s[d],g=typeof u;"string"===g||"number"===g?_.push(d+"="+encodeURIComponent(u)):"options"===d&&u&&"string"==typeof u.url_append&&_.push(u.url_append)}(new Image).src="https://sb.scorecardresearch.com/p?"+_.join("&")}))}))},purge:function(){for(var t=c._comscore||[];t.length>0;)c.COMSCORE.beacon(t.shift())}},c.COMSCORE.purge()}();
!function(t,e){"object"==typeof are you reading this right now?? ;) exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-sticky",[],e):"object"==typeof exports?exports["wafer-sticky"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-sticky"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/entry.js":function(t,e,o){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},u=function(){function t(t,e){var o=[],i=!0,r=!1,n=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){r=!0,n=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw n}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),p=function t(e,o,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,o,i)}if("value"in r)return r.value;var s=r.get;if(void 0!==s)return s.call(i)},d=window.wafer,v=d.constants,h=d.features,b=d.utils,g=d.WaferBaseClass,m=b.findAncestor,w=v.ATTR_PREFIX,k=function(t){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.selector;r(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:i},{})),a=t.getAttribute(w+"sticky-boundary"),l=t.getAttribute(w+"sticky-target"),c=t.getAttribute(w+"sticky-position"),y=(t.getAttribute(w+"sticky-offset")||"").split(" "),p=u(y,4),d=p[0],v=p[1],h=p[2],b=p[3],g=t.getAttribute(w+"sticky-body-classname")||"";g&&(g=g.split(" ")),s._util=f({},s._util,{bodyClassname:g,elem:t,targetElem:l&&(a&&m(t,a)||document.body).querySelector(l)||t,offsetBottom:void 0!==b&&b,offsetLeft:void 0!==v&&v,offsetRight:void 0!==h&&h,offsetTop:void 0!==d&&d,stickyPosition:c});var k=s._util.targetElem,_=k.style,O=_.bottom,S=_.left,j=_.position,E=_.right,P=_.top,T=_.width,C=k.getBoundingClientRect(),x=C.height,A=t.getBoundingClientRect(),R=A.height;return s._util.stickyAllowed=x<=R,s._state={isSticky:!1,targetElemOffsetTop:k.offsetTop,previousPositionValue:{bottom:O,left:S,position:j,right:E,top:P,width:T},scrollContainerObserver:null},t===k&&s.addEventListeners(),s}return s(e,t),y(e,[{key:"addEventListeners",value:function(){var t=this;if(h.mutationObserver){var e=this._util.targetElem;this._state.scrollContainerObserver=new MutationObserver(function(){t._state.isSticky&&t.addSticky("resize")}),this._state.scrollContainerObserver.observe(e,{childList:!0,subtree:!0})}}},{key:"updateStickyProperties",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._util.targetElem;Object.assign(e.style,{width:"",position:""}),Object.assign(e.style,{position:"fixed",width:e.offsetWidth+"px"},t)}},{key:"destroy",value:function(){var t=this._state.scrollContainerObserver;t&&t.disconnect(),p(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"addSticky",value:function(t){var e="resize"===t,o=this._state.isSticky;if(e||!o){var r=this._util,n=r.bodyClassname,s=r.elem,a=r.offsetLeft,l=r.offsetRight,c=r.offsetTop,f=r.stickyPosition,u=r.targetElem,y={};if(o||(this._state.targetElemOffsetTop=u.offsetTop),"bottom"===f?y.bottom="0":c&&(y.top=c),a?y.left=a:l&&(y.right=l),this._state.isSticky=!0,s!==u?Object.assign(u.style,{position:"fixed"},y):this.updateStickyProperties(y),u.classList.add("sticky-active"),n){var p;(p=document.body.classList).add.apply(p,i(n))}}}},{key:"makeStickyFlow",value:function(){var t=this._util,e=t.bodyClassname,o=t.elem,r=t.offsetBottom,n=t.offsetLeft,s=t.offsetRight,a=t.stickyPosition,l=t.targetElem,c=o.getBoundingClientRect(),f=l.getBoundingClientRect(),u=f.height,y=c.bottom,p={};if("bottom"===a?p.bottom=parseInt(r,10)+"px":p.top=y-u-parseInt(r,10)+"px",n?p.left=n:s&&(p.right=s),this._state.isSticky=!0,Object.assign(l.style,{position:"fixed"},p),l.classList.add("sticky-flow"),e){var d;(d=document.body.classList).add.apply(d,i(e))}}},{key:"removeSticky",value:function(){if(this._state.isSticky){var t=this._util,e=t.bodyClassname,o=t.targetElem;if(o.classList.remove("sticky-flow","sticky-active"),e){var r;(r=document.body.classList).remove.apply(r,i(e))}this._state.isSticky=!1,Object.assign(o.style,this._state.previousPositionValue)}}},{key:"config",get:function(){var t=this._util,e=t.offsetBottom,o=t.offsetTop,i=t.stickyAllowed,r=t.targetElem;return{isSticky:this._state.isSticky,offsetBottom:e,offsetTop:o,stickyAllowed:i,targetElem:r}}}]),e}(g),_=k,O=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),S=window.wafer,j=S.base,E=S.controllers,P=S.utils,T=P.elementInView,C=P.throttle,x=E.WaferBaseController,A=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,i=void 0===o?document:o,r=t.selector,n=t.validateDelay,s=void 0===n?15:n;a(this,e);var c=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:i,selector:r,props:{selector:r},WaferClass:_}));return c._validateWithThrottle=C(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.source;c.validate({source:e})},s,c),c.sync(),c}return c(e,t),O(e,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle({source:"resize"})}},{key:"didSync",value:function(){var t=this._state,e=t.elementInstances,o=t.mounted;0!==e.size&&!o&&(this._state.mounted=!0)}},{key:"handleSelfSticky",value:function(t,e,o){if(window.pageYOffset+window.innerHeight>t+e._state.targetElemOffsetTop)return void e.addSticky(o);e.removeSticky(o)}},{key:"willValidate",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.source,r=this._state.elementInstances;t.forEach(function(t){var o=r.get(t),n=o.instance,s=T(t,{},j.viewport),a=n.config,l=a.isSticky,c=a.stickyAllowed;if(!s||!c)return void(l&&n.removeSticky());var f=n.config.targetElem,u=f.getBoundingClientRect(),y=u.height;if(f!==t){var p=t.getBoundingClientRect(),d=p.bottom,v=p.top;if(p.height<=y)return;var h=n.config,b=h.offsetTop,g=h.offsetBottom;g=g&&parseInt(g,10),b=b&&parseInt(b,10),d-(y+g+b)<0?n.makeStickyFlow(i):l&&v-b>=0?n.removeSticky(i):v-b<0&&n.addSticky(i)}else e.handleSelfSticky(y,n,i)})}}]),e}(x),R=A;e.default=new R({selector:".wafer-sticky"})}})});
window.wafer&&window.wafer.ready((function(){var e="show-drawer",t=null,a=null,r="wafer-fetch-error",i="wafer-fetch-complete",n="stream-related-drawer",o="StreamRelated",s="react-wafer-stream",c="json",d="wafer-fetch",l="stream-uuid-list",u=[],w=document.querySelectorAll(".stream-items"),m=window.innerWidth||document.documentElement.clientWidth,f="js-sponsored-moments-dwell-time",A=window.wafer&&window.wafer.utils,g={INARTICLE:9/16,reservemoments:16/9},p=function e(t){var a,r,i=t.getAttribute("data-da-position");if("reservemoments"===i&&(t=t.querySelector("#defaultRESERVEMOMENTS")),a=t.getAttribute("data-html"),r=t.getAttribute("data-darla-config"),a&&r){(r=JSON.parse(r)).dest;var n=window.DARLA.prefetched();if(!window.DARLA.config()||window.DARLA.inProgress()||n&&0!==n.length)setTimeout((function(){e(t)}),500);else{if(!r.h&&!r.w){var o=Math.floor(m*g[i]),s={flex:{h:{min:o},w:{min:m}},h:o,w:m};Object.assign(r,s)}var c=r.id;window.DARLA.addPos(r);var d=new window.DARLA.Response(c,{});a=unescape(a),d.add(c,a),window.DARLA.render(d),t.classList.remove("unprocessed-display-card")}}};window.wafer.on("fetch:success",(function(e){var t=e.elem;if(t&&t.classList){if(t.classList.contains("collections-view-more")&&(document.documentElement.classList.remove("Reader-closed"),document.documentElement.classList.add("Reader-open"),window.wafer.base.lock(document.getElementById("MainView")),window.scrollTo(0,0)),t.classList.contains("stream-batch-fetch")){var a=document.getElementsByClassName("js-display-card unprocessed-display-card");a.length&&A.convertNodeListToArray(a).forEach((function(e){window.DARLA&&e?p(e):e.style.display="none"}));var r=window.rapidPageConfig&&window.rapidPageConfig.rapidConfig&&window.rapidPageConfig.rapidConfig.spaceid;r&&(window._comscore=window._comscore||[],window._comscore.push({c1:2,c14:window.YAHOO&&window.YAHOO.comscore&&window.YAHOO.comscore.c14||-1,c2:"7241469",c5:r,c7:document.location.href}),window.COMSCORE&&window.COMSCORE.purge())}if(t.classList.contains("wafer-fetch-complete")){var i=t.getAttribute("data-wf-url");if(i&&i.includes("react-wafer-stream")){A.convertNodeListToArray(w).includes(t)||(w=document.querySelectorAll(".stream-items"),L())}}}}));var v=function e(t){var a=Math.floor(16*m/9),r=t.querySelector("#defaultRESERVEMOMENTS"),i=r&&r.getAttribute("data-html");if(i){var n=window.DARLA.prefetched();if(window.DARLA.inProgress()||n&&0!==n.length)setTimeout((function(){e(t)}),500);else{var o={dest:"defaultRESERVEMOMENTS",flex:{h:{min:a},w:{min:m}},h:a,id:"RESERVEMOMENTS",supports:{"exp-ovr":1,"exp-push":1,"resize-to":1},w:m};window.DARLA.addPos(o);var s=new window.DARLA.Response("RESERVEMOMENTS",{});i=unescape(i),s.add("RESERVEMOMENTS",i),window.DARLA.render(s)}}};function L(){A.convertNodeListToArray(w).filter((e=>!e.classList.contains("init-visited"))).forEach((l=>{l.classList.add("init-visited"),l.addEventListener("animationend",(function(e){var t=e&&e.target;e&&t&&"fadeOutAdConfirm"===e.animationName&&(t.classList.contains("ad-feedback-options")||(t.classList.contains("give-feedback-screen")?t=A.findAncestor(t,"stream-item"):t.classList.contains("comm-undo")&&(t=A.findAncestor(t,"stream-item-card")),t.parentNode&&(window.wafer.base.destroy(t),t.parentElement.classList.contains("hide-on-dislike")?t.parentElement.parentElement.removeChild(t.parentNode):t.parentNode.removeChild(t))))})),l.addEventListener("click",(function(l){!function(l){window.location.href.indexOf("functest=1")>-1&&l.preventDefault();var u=l.target;if(!A||!u)return;var w=A.findAncestor(u,"js-content-viewer");if(!w)return;var m=A.findAncestor(w,"stream-cluster-item")||A.findAncestor(w,"js-stream-content");if(!m)return;var f=m.getAttribute("data-uuid");if(f){var g=m&&m.getAttribute("data-parent-uuid");if(t=g&&document.querySelector('li[data-uuid="'+g+'"]')||m,a=t&&t.getElementsByClassName(n)[0]){if(t.classList.contains(e))return;var p=S(),v=window.YAHOO&&window.YAHOO.context||{},L={config:{leadItemUuid:g||f},ctrl:o,lang:v.lang,m_id:s,m_mode:c,region:v.region,site:v.site};const n=v.partner,l={dedupUuids:p.dedupUuids.join(","),uuid:f};var E=a.getAttribute("data-cfg");if(E){var h=m.getAttribute("data-cposy");h=isNaN(h)?null:parseInt(h,10);try{var y=JSON.parse(E);null!==h&&(y.i13n.cposy=h),L.config=Object.assign(L.config,y)}catch(e){}}const u=a.getAttribute("data-bucket");u&&(L.bucket=u),n&&(L.partner=n),L.config.ncpParams=L.config.ncpParams||{},L.config.ncpParams.query=L.config.ncpParams.query||{},L.config.ncpParams.query=Object.assign(l,L.config.ncpParams.query);var N=window.wafer.base.state.drawer,R=N&&N.adsToken;R&&(L.config.ncpParams.query.geminiDedupeToken=R),a.setAttribute("data-wf-body",JSON.stringify(L)),a.classList.remove(r,i),a.classList.add(d),window.wafer.base.sync(a.parentNode)}}}(l)}));var u=l.querySelectorAll("."+f+", ."+f+"-mon");if(u.length){A.convertNodeListToArray(u).forEach((function(e){e.classList&&e.classList.contains("js-reserve-moments")&&(window.DARLA?v(e):e.style.display="none")}));var w=u[0].querySelector(".js-panorama-scroll-view");w&&0===w.scrollLeft&&(w.scrollLeft=(w.scrollWidth-m)/2)}var g=!!window.DARLA,L=l.querySelectorAll(".js-display-card.unprocessed-display-card");L.length&&A.convertNodeListToArray(L).forEach((function(e){g&&e?p(e):e.style.display="none"}))}))}if(w&&w.length){L();var E,h,y=document.getElementById("scrollable-smad"),N=document.getElementById("scrollable-video"),R=window.innerHeight||document.documentElement.clientHeight,b={},q=function(e){return e&&(e=(e=(e=(e=(e=(e=e.replace(/(V_AUTOPLAYED/,!1)).replace(/V_PLAYER_WIDTH/,y.clientHeight)).replace(/(V_PLAYER_HEIGHT/,y.clientWidth)).replace(/(V_SKIP_AVAIL)/,!1)).replace(/(V_EXPANDED)/,!1)).replace(/(V_AUD_INFO)/,2)),e};if(y){var O=y.getBoundingClientRect();E=O.top-R,h=O.bottom-E,b.startActionUrl=y.getAttribute("data-video-quartile-start"),b.quartileActionUrl25=y.getAttribute("data-video-quartile-25"),b.quartileActionUrl50=y.getAttribute("data-video-quartile-50"),b.quartileActionUrl75=y.getAttribute("data-video-quartile-75"),b.quartileActionUrl100=y.getAttribute("data-video-quartile-100")}y&&N&&window.addEventListener("scroll",A.throttle((function(){var e=N&&N.duration,t=y.getBoundingClientRect();if(t.top<R&&t.bottom>0){N.currentTime=(window.pageYOffset-E)*e/h;var a=(R-t.top)/R*100;(a=5*Math.ceil(a/5))>=100&&b.quartileActionUrl100?(A.fireBeacon(q(b.quartileActionUrl100),{useNavigator:!1}),b.quartileActionUrl100=null):a>=75&&b.quartileActionUrl75?(A.fireBeacon(q(b.quartileActionUrl75),{useNavigator:!1}),b.quartileActionUrl75=null):a>=50&&b.quartileActionUrl50?(A.fireBeacon(q(b.quartileActionUrl50),{useNavigator:!1}),b.quartileActionUrl50=null):a>=25&&b.quartileActionUrl25?(A.fireBeacon(q(b.quartileActionUrl25),{useNavigator:!1}),b.quartileActionUrl25=null):a>=5&&b.startActionUrl&&(A.fireBeacon(q(b.startActionUrl),{useNavigator:!1}),b.startActionUrl=null)}}),16))}var S=function(){for(var e=Array.prototype.slice.call(document.getElementsByClassName(l)),t=0;t<e.length;t++){var a=e[t],r=a.text;a.classList.remove(l);try{var i=JSON.parse(r);i&&Array.isArray(i.uuidList)&&u.length+i.uuidList.length<=250&&(u=u.concat(i.uuidList))}catch(e){}}return{dedupUuids:u}};window.addEventListener("viewerClosed",(function(){if(t){var r=t,i=a&&!!a.getElementsByClassName("stream-realted-list")[0];!r.classList.contains(e)&&i&&(r.classList.add("drawer-beacon"),setTimeout((function(){r.classList.add(e)}),10)),a=null,t=null}}));window.wafer.on("video:adplaybackstart",(function(e){e&&e.elem&&e.elem.parentNode&&e.elem.parentNode.classList&&e.elem.parentNode.classList.contains("stream-video-ad-v2")&&e.elem.parentNode.classList.remove("video-endcard")})),window.wafer.on("video:playbackcomplete",(function(e){e&&e.elem&&e.elem.parentNode&&e.elem.parentNode.classList&&e.elem.parentNode.classList.contains("stream-video-ad-v2")&&e.elem.parentNode.classList.add("video-endcard")}));window.wafer.on("toggle:change",(function(e){if(e&&e.meta&&e.elem){var t=e.elem.getAttribute("data-wf-toggle-target");"show-drawer"===e.meta.className&&w&&w.length&&A.convertNodeListToArray(w).forEach((e=>{var a=e.querySelector(t),r=a&&a.getElementsByClassName("drawer-fetch-target")[0];setTimeout((()=>{r&&(r.innerHTML="")}),300)}))}}))}));
`;
export enum Font {
  Monospace = "monospace",
  SansSerif = "sans-serif",
  Serif = "serif",
  Monaco = "Monaco, Menlo, Consolas, 'Courier New', monospace",
  Arial = "Arial",
  Helvetica = "Helvetica, Arial, sans-serif",
  TimesNewRoman = "'Times New Roman', Times, serif",
  CourierNew = "'Courier New', Courier, monospace",
  Verdana = "Verdana, Geneva, sans-serif",
  Georgia = "Georgia, serif",
  ComicSans = "'Comic Sans MS', cursive, sans-serif",
  Trebuchet = "'Trebuchet MS', Helvetica, sans-serif",
  Impact = "Impact, Charcoal, sans-serif",
  LucidaConsole = "'Lucida Console', Monaco, monospace",
  Palatino = "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
  Tahoma = "Tahoma, Geneva, sans-serif",
  GillSans = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  Optima = "Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif",
  Futura = "Futura, 'Trebuchet MS', Arial, sans-serif",
  Garamond = "Garamond, 'Hoefler Text', 'Times New Roman', Times, serif",
}

export function getImageArrayFromText(
  text: string,
  width: number,
  height: number,
  font: Font
) {
  if (width === 0 || height === 0) {
    return [];
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return [];
  }

  let fontSize = 100;
  ctx.font = `${fontSize}px ${font}`;

  const textWidth = ctx.measureText(text).width;
  const newFontSize = Math.floor((width / textWidth) * fontSize);
  fontSize = Math.min(newFontSize, height);
  ctx.font = `${fontSize}px Arial`;

  ctx.fillStyle = "black";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(text, width / 2, height / 2);
  document.body.appendChild(canvas);

  const imageData = ctx.getImageData(0, 0, width, height);
  canvas.remove();
  const data = imageData.data;
  const imageArray = [];
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1] ?? 0;
    const blue = data[i + 2] ?? 0;
    const alpha = data[i + 3] ?? 0;
    if (red || green || blue || alpha) {
      imageArray.push(1);
    } else {
      imageArray.push(0);
    }
  }

  return imageArray;
}

let rows: number[] = []

export const renderCodeCanvas = (
  context: CanvasRenderingContext2D,
  codeFontSize: number,
  font: Font,
  text: string,
  width: number,
  height: number,
  colors: number[][]
) => {
  context.font = `${codeFontSize}px ${font}`;
  context.fillStyle = "white";
  const textMetrics = context.measureText("a");
  // account of spacing between lines
  // gets smaller as font size decreases
  const offsetHeight = (codeFontSize / 10) * 4;
  const textHeight = textMetrics.actualBoundingBoxAscent + offsetHeight;
  const textWidth = textMetrics.width;

  const charsPerLine = Math.floor(width / textWidth) || 0;
  const numOfLines = Math.floor(height / textHeight) || 0;
  const totalNumOfChars = charsPerLine * numOfLines;
  const imageArray = getImageArrayFromText(
    text,
    charsPerLine,
    numOfLines,
    font
  );

  const isMobile = width < 1200;

  if (rows.length === 0 || rows.length !== charsPerLine) {
    rows = Array(charsPerLine).fill(0).map(() => Math.floor(Math.random() * numOfLines))
  }

  context.clearRect(0, 0, width, height);

  for (let i = 0; i < totalNumOfChars; i++) {
    const currentLine = Math.floor(i / charsPerLine);
    const currentColumn = i % charsPerLine;
    const x = currentColumn * textWidth;
    const y = currentLine * textHeight + textHeight;

    const colorIndex = Math.floor(
      (currentColumn / charsPerLine) * colors.length
    );
    const [r, g, b] = colorMixer(
      colors[(colorIndex + 1) % colors.length],
      colors[colorIndex],
      (currentColumn / charsPerLine) * colors.length - colorIndex
    );


    const imageDataValue = imageArray[i];
    const isMatrix = !isMobile && Math.abs(rows[currentColumn]) > currentLine;
    const alpha = Math.min(0.9 * currentLine / numOfLines, 0.2)
    const color = `rgba(${r}, ${g}, ${b}, ${imageDataValue ? 1 : alpha})`;
    if (imageDataValue || isMatrix) {
      context.fillStyle = color;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 10;
      context.shadowColor = color;
      const currentChar = sampleCode[i % sampleCode.length];
      context.fillText(currentChar, x, y);
    }
  }

  if (!isMobile) {

    //shift up the rows
    for (let i = 0; i < charsPerLine; i++) {
      rows[i]++;
      if (rows[i] > numOfLines) {
        rows[i] = -rows[i]
      }
    }
  }

};


const MAX_FREQ = 0.001;
const MIN_FREQ = 0.0007;

let freq = MIN_FREQ;
let increment = 0.0000001;

function colorChannelMixer(
  colorChannelA: number,
  colorChannelB: number,
  amountToMix: number
) {
  const channelA = colorChannelA * amountToMix;
  const channelB = colorChannelB * (1 - amountToMix);
  return channelA + channelB;
}

export function colorMixer(
  rgbA: number[],
  rgbB: number[],
  amountToMix: number
) {
  const r = colorChannelMixer(rgbA[0], rgbB[0], amountToMix);
  const g = colorChannelMixer(rgbA[1], rgbB[1], amountToMix);
  const b = colorChannelMixer(rgbA[2], rgbB[2], amountToMix);
  return [r, g, b];
}

export function renderCanvas1(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  colors: number[][]
) {
  ctx.clearRect(0, 0, width, height);

  if (freq > MAX_FREQ || freq < MIN_FREQ) {
    increment *= -1;
  }

  const frequency = (freq += increment);

  for (let i = 0; i < height; i++) {
    // Calculate color index based on the current row
    const colorIndex = Math.floor((i / height) * colors.length);

    const blend = (i / height) * colors.length - colorIndex;

    const [r, g, b] = colorMixer(
      colors[(colorIndex + 1) % colors.length],
      colors[colorIndex],
      blend
    );
    const color = `rgb(${r}, ${g}, ${b})`;

    ctx.fillStyle = color;

    // Add glow effect
    ctx.shadowBlur = 20;
    ctx.shadowColor = color;

    const offset =
      Math.tan(frequency * 10_000 * Math.sin(i * frequency)) *
      (width / 6);
    ctx.fillRect(width / 4 + offset, i, width / 4, 1);
  }
}

const letters = "é♪π♫￥ƒ➫é♪ππ♫￥ƒ➫é♪π♫￥ƒ➫Ⓣ✎☻⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧∀⁺π♫♫♫";
const LETTER_SIZE = 20;

let letterList: string[][] = [];
let imageArray: number[] = [];

export function renderCanvas2(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  colors: number[][]
) {
  ctx.clearRect(0, 0, width, height);

  const numOfColumns = Math.ceil(width / LETTER_SIZE);

  if (letterList.length === 0 || letterList.length !== numOfColumns) {
    letterList = Array(numOfColumns)
      .fill(0)
      .map(() => {
        return letters.split("").map(() => {
          return letters.charAt(
            Math.floor(Math.random() * letters.length)
          );
        });
      });
  }
  if (imageArray.length === 0 || imageArray.length !== numOfColumns * letters.length) {
    imageArray = getImageArrayFromText(
      "théo",
      letterList.length,
      letters.length,
      Font.ComicSans
    );
  }

  for (let i = 0; i < letterList.length; i++) {
    const randLetters = letterList[i];
    for (let j = 0; j < letters.length; j++) {
      const letter = randLetters[j];

      const colorIndex = Math.floor((j / letters.length) * colors.length);
      const blend = (j / letters.length) * colors.length - colorIndex;

      const [r, g, b] = colorMixer(
        colors[(colorIndex + 1) % colors.length],
        colors[colorIndex],
        blend
      );

      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 10;

      const normalized = (j / letters.length) * 2 - 1;
      let alpha = 1 - Math.pow(normalized, 2);
      alpha = Math.min(Math.max(alpha, 0.1), 0.5)

      const isImage = imageArray[i + j * letterList.length] === 1;
      if (isImage) {
        alpha = 0.3;
      }

      const color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.shadowColor = color;
      ctx.fillStyle = color;

      ctx.font = `${LETTER_SIZE}px Arial`;
      ctx.fillText(
        isImage ? letters[0] : letter,
        i * LETTER_SIZE,
        LETTER_SIZE * j
      );
    }
  }

  //shift letters down
  for (let i = 0; i < numOfColumns; i++) {
    for (let j = 0; j < (letterList[i].length ?? 0); j++) {
      if (Math.random() > 0.9) {
        letterList[i][j] = letters.charAt(
          Math.floor(Math.random() * letterList.length - 1)
        );
      }
    }
  }
}
