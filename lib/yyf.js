!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){"use strict";var n={OPTIONS:{async:!0,debug:!1,contentType:"application/json;charset=utf-8",headers:{},method:"GET",root:"/"},PROPS:{},set:function(e){for(var t in e)this.OPTIONS[t]=e[t];return this},callback:function(e,t){if("undefined"!=typeof t)console.assert("function"==typeof t,n+" should be a function,",t),this.PROPS[e]=t;else if(e)for(var n in e)this.PROPS[n]=e[n];return this},request:function(e,t){if(t)for(var n in this.OPTIONS)t.hasOwnProperty(n)||(t[n]=this.OPTIONS[n]);else t=this.OPTIONS;t.debug&&console.log(t);var o=new XMLHttpRequest;for(var n in this.PROPS)this.PROPS[n]&&(o[n]=this.PROPS[n]);t.root&&(e=t.root+e),o.open(t.method,e,t.async),t.contentType&&o.setRequestHeader("Content-Type",t.contentType);for(var n in this.OPTIONS.headers)t.headers.hasOwnProperty(n)&&o.setRequestHeader(n,t.headers[n]);if(t.data){var r="object"==typeof t.data?JSON.stringify(t.data):t.data;o.send(r)}else o.send();return o}};["onload","onerror","onreadystatechange","onabort","ontimeout"].forEach(function(e){n.callback(e,function(){n.OPTIONS.debug&&console.log(e,arguments)})}),e.exports=n},function(e,t,n){"use strict";function o(){c.codeMap={};for(var e in c.code)c.codeMap[c.code[e]]=e}function r(e,t,n){if(t)for(var r in t)t.hasOwnProperty(r)&&(c[r]=t[r],"code"===r?o():"debug"===r&&("undefined"==typeof e?e={debug:t.debug}:"undefined"==typeof e.debug&&(e.debug=t.debug)));return"undefined"==typeof n&&(n=c.callback),i.set(e).callback(n)}function s(e){try{var t=JSON.parse(e),n=t[c.status];n=c.codeMap[n];var o=r.getHandle(n);if(c.debug&&console.debug(n,o,t),o){var s=t[c.data];o(s)}}catch(e){console.error(e)}}function a(e){r.getHandle("_error")(e)}function u(e,t,n,o,r){o&&(f.success=o),r&&(f.error=r);var s=i.request(e,{method:t,data:n});return s}var i=n(0),c={root:"/",debug:!1,status:"status",data:"info",code:{success:1,fail:0,auth:-1},handle:{success:function(){},fail:function(){},auth:function(){},_error:function(){}},callback:{onload:function(){if(c.debug&&console.log(this.status,this.responseText),this.readyState===XMLHttpRequest.DONE)if(this.status>=200&&this.status<300){var e=r.getHandle();console.assert("function"==typeof e),e(this.responseText,this)}else a(this)},onerror:function(){a(this)}}},f={};r.setCode=function(e,t){return c.code[e]=t,o(),this},r.setHandle=function(e,t){return"undefined"!=typeof t?c.handle[e]=t:"function"==typeof e?f=e:c.debug&&console.log("it's not callable function",e,t),this},["success","fail"].forEach(function(e){r[e]=function(t){return f[e]=t,this}}),r.getHandle=function(e){return e?f[e]?f[e]:c.handle[e]:"function"==typeof f?f:s},r.delete=function(e,t,n){return u(e,"DELETE",null,t,n)},["get","put","post","patch"].forEach(function(e){r[e]=function(t,n,o,r){return u(t,e.toUpperCase(),n,o,r)}}),i.callback(c.callback),o(),"undefined"==typeof window||window.YYF||(window.YYF=r),e.exports=r}]);